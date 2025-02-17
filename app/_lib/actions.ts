"use server";

import { redirect } from "next/navigation";
import { supabase } from "./supabase";
import { SignUpFormValues } from "../_types/types";

export async function signUpAction(data: SignUpFormValues) {
  const { email, password } = data;
  console.log(email, password);
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("error");
    return;
  }

  redirect("/login");
}
