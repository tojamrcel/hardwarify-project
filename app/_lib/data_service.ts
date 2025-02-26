import { getServerSession } from "next-auth";
import { Product, Profile } from "../_types/types";
import { supabase } from "./supabase";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");

  if (error) console.error(error);
  if (!data) return [];

  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) console.error(error);

  return data;
}

export async function getBestsellers(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("bestsellers")
    .select(`products(*)`);

  if (error) console.error(error);
  if (!data) throw new Error("There are not any bestsellers.");

  return data.flatMap((prod) => prod.products);
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category);

  if (error) console.error(error);
  if (!data || !data.length) throw new Error("No products in this category :(");

  return data;
}

export async function getProfile(email: string): Promise<Profile> {
  const { data, error } = await supabase
    .from("profiles")
    .select("email, image, firstName, lastName")
    .eq("email", email)
    .single();

  if (error) console.error(error);
  if (!data) throw new Error("Profile not found.");

  return data;
}

export async function getUserOrders() {
  const session = await getServerSession();
  if (!session?.user?.email) throw new Error("You must be logged in.");

  const { data: ordersData, error: orderError } = await supabase
    .from("orders")
    .select("id, total_price, status, address")
    .eq("email", session.user.email);

  if (orderError) throw new Error(orderError.message);

  const orderIds = ordersData.map((order) => order.id);

  const { data: orderItemsData, error: itemsError } = await supabase
    .from("order_items")
    .select("product_id, quantity")
    .in("order_id", orderIds);

  if (itemsError) throw new Error(itemsError.message);
}

export async function createProfile(newProfile: Profile): Promise<void> {
  const { error } = await supabase.from("profiles").insert([newProfile]);

  if (error) {
    console.error(error);
    throw new Error("Profile could not be created");
  }
}
