import { Product, Profile } from "../_types/types";
import { supabase, supabaseUrl } from "./supabase";

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

export async function createProfile(newProfile: Profile): Promise<void> {
  const { error } = await supabase.from("profiles").insert([newProfile]);

  if (error) {
    console.error(error);
    throw new Error("Profile could not be created");
  }
}

export async function updateProfileImage(image: File, email: string) {
  const imageName = `${Math.random()}-${email}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/profile_images/${imageName}`;

  const { error } = await supabase
    .from("profiles")
    .update({ image: imagePath })
    .eq("email", email);

  if (error) {
    console.error(error);
    throw new Error("Image couldn't be uploaded.");
  }

  const { error: storageErr } = await supabase.storage
    .from("profile-images")
    .upload(imageName, image, {
      cacheControl: "3600",
      upsert: false,
    });

  if (storageErr) {
    await supabase.from("profiles").update({ image: "" }).eq("email", email);
    console.error(error);
    throw new Error("Cabin could not be created");
  }
}
