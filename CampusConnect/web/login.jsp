<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Login - CampusConnect</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="assets/styles.css" />
  <%@ include file="js/config.js" %>
  <%@ include file="js/auth.js" %>
</head>
<body>
<%@ include file="partials/header.jsp" %>

<main class="container">
  <div class="card">
    <h2>Login</h2>
    <label class="label" for="email">Email</label>
    <input class="input" id="email" type="email" placeholder="you@campus.edu" required />
    <label class="label" for="password">Password</label>
    <input class="input" id="password" type="password" placeholder="Enter password" required />
    <button class="btn" id="loginBtn">Login</button>
    <p id="msg" class="meta" style="margin-top:10px;"></p>
    <p class="meta" style="margin-top:16px;">New here? <a href="register.jsp">Create an account</a></p>
  </div>
</main>

<%@ include file="partials/footer.jsp" %>

<script>
  document.getElementById('loginBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const msg = document.getElementById('msg');

    try {
      await window.auth.login(email, password);
      window.showMsg(msg, "success", "Login successful. Redirecting...");
      setTimeout(() => window.location.href = "dashboard.jsp", 700);
    } catch (err) {
      window.showMsg(msg, "error", err.message || "Login failed");
    }
  });
</script>
</body>
</html>