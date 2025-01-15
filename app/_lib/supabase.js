import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.local.SUPABASE_URL,
  process.env.local.SUPABASE_KEY,
);
