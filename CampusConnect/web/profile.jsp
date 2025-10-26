<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Profile - CampusConnect</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="assets/styles.css" />
  <%@ include file="js/config.js" %>
</head>
<body>
<%@ include file="partials/header.jsp" %>

<main class="container">
  <div class="card">
    <h2>Your profile</h2>

    <label class="label" for="fullName">Full name</label>
    <input class="input" id="fullName" type="text" placeholder="Your full name" />

    <label class="label" for="email">Email</label>
    <input class="input" id="email" type="email" disabled />

    <label class="label" for="role">Role</label>
    <input class="input" id="role" type="text" disabled />

    <button class="btn" id="saveBtn">Save changes</button>
    <p id="msg" class="meta" style="margin-top:10px;"></p>
  </div>
</main>

<%@ include file="partials/footer.jsp" %>

<%@ include file="js/profile.js" %>
</body>
</html>