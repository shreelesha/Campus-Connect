<!-- Load Supabase SDK in every page that needs it -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
// Replace these with your actual Supabase values
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY";

// Global supabase client
window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Simple helpers
window.showMsg = (el, type, msg) => {
  el.textContent = msg;
  el.className = type; // "success" or "error"
};

// Gate: redirect to login if no session
window.requireAuth = async () => {
  const { data: { session } } = await window.sb.auth.getSession();
  if (!session) {
    window.location.href = "login.jsp";
    return null;
  }
  return session;
};

// Expose current user
window.getUser = async () => {
  const { data: { user } } = await window.sb.auth.getUser();
  return user;
};
</script>