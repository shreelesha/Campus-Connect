<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<!-- This is a fragment (header), so no <html> or <body> tags -->
<header class="app-header">
  <div class="brand">
    <a href="index.jsp">CampusConnect</a>
  </div>
  <nav class="nav">
    <a href="dashboard.jsp">Dashboard</a>
    <a href="profile.jsp">Profile</a>
    <button id="logoutBtn" class="btn-outline">Logout</button>
  </nav>
</header>

<script>
  // Simple logout button handler, relies on auth.js
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('logoutBtn');
    if (btn) {
      btn.addEventListener('click', async () => {
        if (window.auth && window.auth.logout) {
          try {
            await window.auth.logout();
          } catch (e) {
            console.error("Logout failed:", e);
          }
        } else {
          console.warn("auth.js not loaded or logout not defined");
        }
      });
    }
  });
</script>