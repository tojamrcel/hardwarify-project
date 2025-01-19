import { supabase } from "./supabase";

interface Products extends Array<Products> {
  id: number;
  product_name: string;
  regular_price: number;
  discount: number | null;
  description: string;
  category: string;
  image: string;
}

export async function getProducts(): Promise<Products[]> {
  const { data, error } = await supabase.from("products").select("*");
  if (error) console.error(error);

  return data;
}
