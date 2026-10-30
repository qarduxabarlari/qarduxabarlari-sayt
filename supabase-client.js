// ========================================================
// Supabase Client Configuration
// ========================================================
const SUPABASE_URL = "https://vmzbgcgcafptdgwdarsm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtemJnY2djYWZwdGRnd2RhcnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5OTIwNDEsImV4cCI6MjEwODU2ODA0MX0.NzTmVGbF0589VZAnI3JSCkFEzhrY3Y1kCtUPt0Hq7T0";

// Initialize Supabase client with PKCE & automatic session detection
window.supabaseClient = null;
if (window.supabase) {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    }
  });
  console.log("Supabase client muvaffaqiyatli ishga tushirildi.");
} else {
  console.warn("Supabase SDK yuklanmadi.");
}
