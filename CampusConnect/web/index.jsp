<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CampusConnect</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="assets/styles.css" />
  <%@ include file="js/config.js" %>
</head>
<body>
<%@ include file="partials/header.jsp" %>
<main class="container">
  <div class="card">
    <marquee><h1>Students Platform</h1></marquee>
    <h2>Welcome to CampusConnect</h2>
    <p>Secure campus communication and announcements for students, faculty, and administrators.</p>
    <div style="margin-top: 16px">
      <a href="login.jsp" class="btn">Login</a>
      <a href="register.jsp" class="btn-outline" style="margin-left: 8px;">Register</a>
    </div>
  </div>
</main>
<%@ include file="partials/footer.jsp" %>
</body>
</html>