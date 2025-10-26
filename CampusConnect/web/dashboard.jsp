<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Dashboard - CampusConnect</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="assets/styles.css" />
  <%@ include file="js/config.js" %>
</head>
<body>
<%@ include file="partials/header.jsp" %>

<main class="container">
  <div class="grid grid-2">
    <div class="card">
      <h2>Announcements</h2>
      <div id="announcements"></div>
      <p id="annMsg" class="meta"></p>
    </div>

    <div class="card">
      <h3>Create announcement</h3>
      <p class="meta">Only faculty/admin can post. Students are read-only.</p>

      <label class="label" for="title">Title</label>
      <input class="input" id="title" type="text" placeholder="Announcement title" />

      <label class="label" for="body">Body</label>
      <textarea class="input" id="body" rows="4" placeholder="Details"></textarea>

      <button class="btn" id="createBtn">Post announcement</button>
      <p id="createMsg" class="meta" style="margin-top:10px;"></p>
    </div>
  </div>
</main>

<%@ include file="partials/footer.jsp" %>

<%@ include file="js/auth.js" %>
<%@ include file="js/dashboard.js" %>
</body>
</html>