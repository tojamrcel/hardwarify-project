import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.local.SUPABASE_URL,
  process.env.local.SUPABASE_KEY,
);
