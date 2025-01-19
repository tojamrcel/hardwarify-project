import { supabase } from "./supabase";

interface Product {
  id: number;
  product_name: string;
  regular_price: number;
  discount: number | null;
  description: string;
  category: string;
  image: string;
}

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");
  if (error) console.error(error);

  if (!data) return [];

  return data;
}
