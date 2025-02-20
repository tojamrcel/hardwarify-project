"use server";

import { redirect } from "next/navigation";
import { supabase } from "./supabase";
import { SignUpFormValues, UpdatePassword } from "../_types/types";
import { createProfile } from "./data_service";

export async function signUpAction(data: SignUpFormValues) {
  const { email, password } = data;
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  const profile = { firstName: "", lastName: "", email, image: "" };

  if (error) {
    console.error(error);
    return;
  }

  const newProfile = await createProfile(profile);
  redirect("/login");
}
