<script>
// Auth operations
window.auth = {
  register: async (email, password, fullName) => {
    try {
      console.log("🔄 Starting registration for:", email);
      
      // Step 1: Sign up with Supabase Auth
      const { data, error } = await window.sb.auth.signUp({ 
        email, 
        password,
        options: {
          data: {
            full_name: fullName
          }
        }
      });
      
      if (error) {
        console.error("❌ Auth signup error:", error);
        throw error;
      }

      console.log("✅ Auth signup successful");

      const userId = data.user?.id;
      if (!userId) {
        throw new Error("No user ID returned from signup");
      }

      // Step 2: Create username from email (before @ symbol)
      const username = email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
      
      // Step 3: Insert into profiles table (REQUIRED for posts/comments)
      console.log("🔄 Creating profile...");
      const { error: profileError } = await window.sb
        .from("profiles")
        .insert({
          id: userId,
          username: username,
          full_name: fullName || ""
        });
      
      if (profileError) {
        console.error("❌ Profile insert error:", profileError);
        throw new Error(`Profile creation failed: ${profileError.message}`);
      }
      console.log("✅ Profile created successfully");

      // Step 4: Insert into users table (for additional user data)
      console.log("🔄 Creating user record...");
      const { error: userError } = await window.sb
        .from("users")
        .insert({
          id: userId,
          full_name: fullName || "",
          email: email,
          role: "student"
        });
      
      if (userError) {
        console.warn("⚠️ User table insert warning:", userError.message);
        // Don't throw - profile is more important
      } else {
        console.log("✅ User record created successfully");
      }
      
      return data;
    } catch (err) {
      console.error("❌ Registration failed:", err.message);
      throw err;
    }
  },

  login: async (email, password) => {
    try {
      console.log("🔄 Attempting login for:", email);
      const { data, error } = await window.sb.auth.signInWithPassword({ 
        email, 
        password 
      });
      
      if (error) {
        console.error("❌ Login error:", error.message);
        throw error;
      }
      
      console.log("✅ Login successful");
      return data;
    } catch (err) {
      console.error("❌ Login failed:", err.message);
      throw err;
    }
  },

  logout: async () => {
    try {
      console.log("🔄 Logging out...");
      await window.sb.auth.signOut();
      console.log("✅ Logout successful");
      window.location.href = "login.jsp";
    } catch (err) {
      console.error("❌ Logout failed:", err.message);
      throw err;
    }
  }
};
</script>