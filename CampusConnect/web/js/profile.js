<script>
(async function initProfile() {
  const session = await window.requireAuth();
  if (!session) return;

  const user = await window.getUser();

  const fullNameEl = document.getElementById('fullName');
  const emailEl = document.getElementById('email');
  const roleEl = document.getElementById('role');
  const msgEl = document.getElementById('msg');

  // Load profile
  const { data, error } = await window.sb
    .from('users')
    .select('full_name, email, role')
    .eq('id', user.id)
    .single();

  if (error) {
    window.showMsg(msgEl, "error", error.message);
    return;
  }

  fullNameEl.value = data?.full_name || '';
  emailEl.value = data?.email || user.email || '';
  roleEl.value = data?.role || 'student';

  document.getElementById('saveBtn').addEventListener('click', async () => {
    const { error: uerr } = await window.sb
      .from('users')
      .update({ full_name: fullNameEl.value.trim() })
      .eq('id', user.id);

    if (uerr) {
      window.showMsg(msgEl, "error", uerr.message);
    } else {
      window.showMsg(msgEl, "success", "Profile updated.");
    }
  });
})();
</script>