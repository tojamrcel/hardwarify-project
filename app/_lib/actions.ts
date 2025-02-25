"use server";

import { redirect } from "next/navigation";
import { supabase, supabaseUrl } from "./supabase";
import { OrderForm, SignUpFormValues, UploadImage } from "../_types/types";
import { createProfile } from "./data_service";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { SHIPPING_COST } from "./constants";

export async function signUpAction(data: SignUpFormValues) {
  const { email, password, firstName, lastName } = data;
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  const profile = { firstName, lastName, email, image: "" };

  if (error) {
    console.error(error);
    return;
  }
  await createProfile(profile);
  redirect("/login");
}

export async function updateProfileImageAction(data: UploadImage) {
  const session = await getServerSession();
  const { image } = data;
  const img = Array.isArray(image) ? image.at(0) : image;

  if (!session || !session.user?.email) return;

  const imageName = `${Math.random()}-${session.user.email}-${img.name}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/profile_images/${imageName}`;

  const { error } = await supabase
    .from("profiles")
    .update({ image: imagePath })
    .eq("email", session.user.email);

  if (error) {
    console.error(error);
    throw new Error("Image couldn't be uploaded.");
  }

  const { error: storageErr } = await supabase.storage
    .from("profile_images")
    .upload(imageName, img, {
      cacheControl: "3600",
      upsert: false,
    });

  if (storageErr) {
    await supabase
      .from("profiles")
      .update({ image: "" })
      .eq("email", session.user.email);
    console.error(error);
    throw new Error("Image could not be uploaded.");
  }

  revalidatePath("/account/*");
}

export async function createOrderAction(orderData: OrderForm) {
  const session = await getServerSession();
  if (!session?.user)
    throw new Error("You have to be signed in to place the order.");
  const ids = orderData.products.map((prod) => prod.id);

  // double checking prices with database
  const { data, error } = await supabase
    .from("products")
    .select("id, regular_price, discount")
    .in("id", ids);

  const products = data?.map((prod) => {
    const { quantity } = orderData.products.find(
      (cartProd) => cartProd.id === prod.id,
    )!;

    return { ...prod, quantity };
  });

  if (error) {
    console.error(error);
  }

  const price = products?.reduce((acc, cur) => {
    const regularPrice = cur.regular_price * cur.quantity;
    const discounts = Number(cur.discount) * cur.quantity;

    return (acc += regularPrice - discounts);
  }, 0);

  const totalPrice = Number(price) + SHIPPING_COST;

  const orderID = Date.now();

  const finalOrder = {
    id: orderID,
    total_price: totalPrice,
    status: "pending",
    email: session.user.email,
    address: `${orderData.postal_code} ${orderData.city} ${orderData.address}`,
  };

  const finalProducts = products?.map((prod) => {
    return {
      product_id: prod.id,
      quantity: prod.quantity,
      order_id: orderID,
    };
  });

  const { error: finalOrderError } = await supabase
    .from("orders")
    .insert(finalOrder);

  if (finalOrderError) {
    throw new Error("There is a problem with creating new order.");
  }

  const { error: productsError } = await supabase
    .from("order_items")
    .insert(finalProducts);

  if (productsError) {
    console.error(productsError);
    throw new Error("There is a problem with creating new order.");
  }

  redirect("/thankyou");
}
