<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Register - CampusConnect</title>
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
    <h2>Create account</h2>
    <label class="label" for="fullName">Full name</label>
    <input class="input" id="fullName" type="text" placeholder="Your full name" required />

    <label class="label" for="email">Email</label>
    <input class="input" id="email" type="email" placeholder="you@campus.edu" required />

    <label class="label" for="password">Password</label>
    <input class="input" id="password" type="password" placeholder="Choose a strong password" required />

    <button class="btn" id="registerBtn">Register</button>
    <p id="msg" class="meta" style="margin-top:10px;"></p>
    <p class="meta" style="margin-top:16px;">Already have an account? <a href="login.jsp">Login</a></p>
  </div>
</main>

<%@ include file="partials/footer.jsp" %>

<script>
  document.getElementById('registerBtn').addEventListener('click', async () => {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const msg = document.getElementById('msg');

    try {
      await window.auth.register(email, password, fullName);
      window.showMsg(msg, "success", "Registration successful. Check your email if confirmation is enabled.");
      setTimeout(() => window.location.href = "login.jsp", 1000);
    } catch (err) {
      window.showMsg(msg, "error", err.message || "Registration failed");
    }
  });
</script>
</body>
</html>