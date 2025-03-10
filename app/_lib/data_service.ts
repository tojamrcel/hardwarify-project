import { getServerSession } from "next-auth";
import { Product, Profile } from "../_types/types";
import { supabase } from "./supabase";
import { Order } from "../_types/types";
import { createClient } from "./supabase-server";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error(error.message);
  if (!data) return [];

  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getProductsByIds(ids: number[]): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .in("id", ids);

  if (error) throw new Error(error.message);
  return data;
}

export async function getBestsellers(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("bestsellers")
    .select(`products(*)`);

  if (error) throw new Error(error.message);
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

  if (error) throw new Error(error.message);
  if (!data || !data.length) throw new Error("No products in this category :(");

  return data;
}

export async function getProfile(email: string): Promise<Profile> {
  const supabaseServer = await createClient();
  const { data, error } = await supabaseServer
    .from("profiles")
    .select("email, image, firstName, lastName")
    .eq("email", email)
    .single();

  if (error) throw new Error(error.message);
  if (!data) throw new Error("Profile not found.");

  return data;
}

export async function getUserOrders(): Promise<Order[]> {
  const supabaseServer = await createClient();

  const session = await getServerSession();
  if (!session?.user?.email) throw new Error("You must be logged in.");

  const { data: ordersData, error: orderError } = await supabaseServer
    .from("orders")
    .select("id, total_price, status, address, first_name, last_name")
    .eq("email", session.user.email);

  if (orderError) throw new Error(orderError.message);

  const orderIds = ordersData.map((order) => order.id);

  const { data: orderItemsData, error: itemsError } = await supabaseServer
    .from("order_items")
    .select("product_id, quantity, order_id")
    .in("order_id", orderIds);

  if (itemsError) throw new Error(itemsError.message);

  const finalOrders = ordersData.map((o) => {
    const items = orderItemsData
      .filter((item) => item.order_id === o.id)
      .map((item) => {
        return { product_id: item.product_id, quantity: item.quantity };
      });

    return { ...o, items };
  });

  if (finalOrders.length === 0) throw new Error("No orders found.");

  return finalOrders;
}

export async function getOrderDetails(id: string): Promise<Order> {
  const session = await getServerSession();
  if (!session?.user?.email) throw new Error("You must be logged in.");

  const supabaseServer = await createClient();

  const { data: ordersData, error: orderError } = await supabaseServer
    .from("orders")
    .select("id, total_price, status, address, first_name, last_name")
    .eq("id", id)
    .single();

  if (orderError) throw new Error(orderError.message);

  const { data: orderItemsData, error: itemsError } = await supabaseServer
    .from("order_items")
    .select("product_id, quantity, order_id")
    .eq("order_id", id);

  if (itemsError) throw new Error(itemsError.message);
  const finalOrder = { ...ordersData, items: orderItemsData };

  return finalOrder;
}

export async function createProfile(newProfile: Profile): Promise<void> {
  const supabaseServer = await createClient();
  const { error } = await supabaseServer
    .from("profiles")
    .insert([{ ...newProfile }]);

  if (error) throw new Error("Profile could not be created");
}
