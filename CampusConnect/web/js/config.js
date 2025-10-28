<!-- Load Supabase SDK -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = "https://xvrrcvlgmsurmttsovcr.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2cnJjdmxnbXN1cm10dHNvdmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1ODE3ODcsImV4cCI6MjA3NzE1Nzc4N30.UUBFxRT6E1zo3fTYyUK-8cyPKZ6t_tXBXYiy2U1K-0U";

  // Ensure Supabase is available
  if (window.supabase) {
    // Create a global Supabase client
    window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("✅ Supabase client initialized successfully");
  } else {
    console.error("❌ Supabase SDK failed to load.");
  }

  // Simple helper to show messages
  window.showMsg = (el, type, msg) => {
    if (!el) return console.warn("showMsg: element not found");
    el.textContent = msg;
    el.className = type; // e.g. "success" or "error"
  };

  // Require authentication: redirect to login if no session
  window.requireAuth = async () => {
    const { data, error } = await window.sb.auth.getSession();
    if (error) {
      console.error("Error getting session:", error.message);
      return null;
    }
    const session = data?.session;
    if (!session) {
      window.location.href = "login.jsp";
      return null;
    }
    return session;
  };

  // Get current user
  window.getUser = async () => {
    const { data, error } = await window.sb.auth.getUser();
    if (error) {
      console.error("Error getting user:", error.message);
      return null;
    }
    return data?.user ?? null;
  };
</script>