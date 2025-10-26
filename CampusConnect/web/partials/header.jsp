<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
          await window.auth.logout();
        }
      });
    }
  });
</script>