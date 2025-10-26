<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<footer class="app-footer">
  <p>© <span id="year"></span> CampusConnect</p>
</footer>
<script>
  document.getElementById('year').textContent = new Date().getFullYear();
</script>