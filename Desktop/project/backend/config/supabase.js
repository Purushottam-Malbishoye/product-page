const { createClient } = require('@supabase/supabase-js');

// Frontend-safe client (anon key, verifies JWTs but respects RLS)
const supabaseAnonClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Backend-only client (service role key, bypasses RLS for PA actions)
const supabaseServiceClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

module.exports = {
  supabaseAnon: supabaseAnonClient,
  supabaseService: supabaseServiceClient
};
