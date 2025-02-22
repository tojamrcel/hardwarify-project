import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oluekkawuggalugtvbig.supabase.co";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  },
);
