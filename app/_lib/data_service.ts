import { supabase } from "./supabase";
import { Product } from "../_types/types";

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
