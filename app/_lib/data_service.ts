import { supabase } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*").single();

  if (error) console.error(error);

  return data;
}
