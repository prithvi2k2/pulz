import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY
);

export default supabaseClient;
