"use server";

import { redirect } from "next/navigation";
import { supabase } from "./supabase";

export async function signUpAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("error");
    return;
  }

  redirect("/login");
}
