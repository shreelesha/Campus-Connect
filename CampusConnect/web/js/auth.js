<script>
// Auth operations
window.auth = {
  register: async (email, password, fullName) => {
    // Sign up
    const { data, error } = await window.sb.auth.signUp({ email, password });
    if (error) throw error;

    // Optionally insert profile into users table
    const userId = data.user?.id;
    if (userId) {
      const { error: insErr } = await window.sb
        .from("users")
        .insert({
          id: userId,
          full_name: fullName || "",
          email,
          role: "student"
        });
      if (insErr) console.warn("Profile insert warning:", insErr.message);
    }
    return data;
  },

  login: async (email, password) => {
    const { data, error } = await window.sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  logout: async () => {
    await window.sb.auth.signOut();
    window.location.href = "login.jsp";
  }
};
</script>