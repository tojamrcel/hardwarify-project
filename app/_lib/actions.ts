"use server";
import { redirect } from "next/navigation";
import { supabase, supabaseUrl } from "./supabase";
import { OrderForm, SignUpFormValues, UploadImage } from "../_types/types";
import { createProfile } from "./data_service";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { SHIPPING_COST } from "./constants";
import { authOptions } from "./auth";
import { createClient } from "./supabase-server";

export async function signUpAction(data: SignUpFormValues) {
  const { email, password, firstName, lastName } = data;
  const { data: userData, error } = await supabase.auth.signUp({
    email,
    password,
  });

  const profile = {
    firstName,
    lastName,
    email,
    image: "",
    user_id: userData.user?.id,
  };

  if (error) throw new Error("User probably already exists.");
  await createProfile(profile);
  redirect("/login");
}

export async function updateProfileImageAction(data: UploadImage) {
  const supabaseServer = await createClient();
  const session = await getServerSession();
  const { image } = data;
  const img = Array.isArray(image) ? image.at(0) : image;

  if (!session || !session.user?.email) return;

  const imageName = `${Math.random()}-${session.user.email}-${img.name}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/profile_images/${imageName}`;

  const { error } = await supabaseServer
    .from("profiles")
    .update({ image: imagePath })
    .eq("email", session.user.email);

  if (error) throw new Error("Image couldn't be uploaded.");

  const { error: storageErr } = await supabaseServer.storage
    .from("profile_images")
    .upload(imageName, img, {
      cacheControl: "3600",
      upsert: false,
    });

  if (storageErr) {
    await supabaseServer
      .from("profiles")
      .update({ image: "" })
      .eq("email", session.user.email);
    throw new Error("Image could not be uploaded.");
  }

  revalidatePath("/account/*");
}

export async function createOrderAction(orderData: OrderForm) {
  const supabaseServer = await createClient();
  const session = await getServerSession(authOptions);

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

  if (error)
    throw new Error(
      "There was a problem with getting products prices. Try again later.",
    );

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
    user_id: session.user.id,
  };

  const finalProducts = products?.map((prod) => {
    return {
      product_id: prod.id,
      quantity: prod.quantity,
      order_id: orderID,
      user_id: session.user.id,
    };
  });

  const { error: finalOrderError } = await supabaseServer
    .from("orders")
    .insert(finalOrder);

  if (finalOrderError) {
    throw new Error("There is a problem with creating new order.");
  }

  const { error: productsError } = await supabaseServer
    .from("order_items")
    .insert(finalProducts);

  if (productsError)
    throw new Error("There is a problem with creating new order.");

  redirect(`/thankyou/${orderID}`);
}

export async function cancelOrderAction(id: string) {
  const supabaseServer = await createClient();

  const { data: itemsData, error: itemsError } = await supabaseServer
    .from("order_items")
    .delete()
    .eq("order_id", id)
    .select();
  if (itemsError || !itemsData.length)
    throw new Error("Order couldn't be canceled.");
  const { data: orderData, error: orderError } = await supabaseServer
    .from("orders")
    .delete()
    .eq("id", id)
    .select();
  if (orderError || !orderData.length)
    throw new Error("Order couldn't be canceled.");

  revalidatePath("/account/orders");
  revalidatePath("/account/pastorders");
  redirect("/account/orders");
}
