import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oluekkawuggalugtvbig.supabase.co";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  },
);
