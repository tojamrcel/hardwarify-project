"use server";

import { redirect } from "next/navigation";
import { supabase, supabaseUrl } from "./supabase";
import { SignUpFormValues, UploadImage } from "../_types/types";
import { createProfile } from "./data_service";
import { getServerSession } from "next-auth";

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

  const newProfile = await createProfile(profile);
  redirect("/login");
}
export async function updateProfileImageAction(data: UploadImage) {
  const session = await getServerSession();
  console.log(data);
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
}
