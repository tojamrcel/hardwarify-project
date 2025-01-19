import { supabase } from "./supabase";
import { Product } from "../_types/types";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");
  if (error) console.error(error);

  if (!data) return [];

  return data;
}
