<script>
(async function initDashboard() {
  // Require login
  const session = await window.requireAuth();
  if (!session) return;

  const user = await window.getUser();

  // Load announcements
  async function loadAnnouncements() {
    const list = document.getElementById('announcements');
    const annMsg = document.getElementById('annMsg');
    list.innerHTML = '';
    const { data, error } = await window.sb
      .from('announcements')
      .select('id,title,body,author_id,created_at')
      .order('created_at', { ascending: false });

    if (error) {
      window.showMsg(annMsg, "error", error.message);
      return;
    }
    if (!data || data.length === 0) {
      list.innerHTML = '<p class="meta">No announcements yet.</p>';
      return;
    }
    data.forEach(a => {
      const el = document.createElement('div');
      el.className = 'ann-item';
      el.innerHTML = `
        <h4>${a.title}</h4>
        <p>${(a.body || '').replace(/</g,'&lt;')}</p>
        <p class="meta">Posted: ${new Date(a.created_at).toLocaleString()}</p>
      `;
      list.appendChild(el);
    });
  }

  await loadAnnouncements();

  // Role control: fetch role from users table
  let role = 'student';
  try {
    const { data: udata, error: uerr } = await window.sb
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();
    if (!uerr && udata?.role) role = udata.role;
  } catch (e) { /* ignore */ }

  const createBtn = document.getElementById('createBtn');
  const createMsg = document.getElementById('createMsg');

  createBtn.addEventListener('click', async () => {
    const title = document.getElementById('title').value.trim();
    const body = document.getElementById('body').value.trim();

    if (role === 'student') {
      window.showMsg(createMsg, "error", "Only faculty/admin can post announcements.");
      return;
    }
    if (!title) {
      window.showMsg(createMsg, "error", "Title is required.");
      return;
    }

    const { error } = await window.sb
      .from('announcements')
      .insert({
        title,
        body,
        author_id: user.id
      });

    if (error) {
      window.showMsg(createMsg, "error", error.message);
    } else {
      window.showMsg(createMsg, "success", "Announcement posted.");
      document.getElementById('title').value = '';
      document.getElementById('body').value = '';
      await loadAnnouncements();
    }
  });

  // Realtime updates
  try {
    window.sb
      .channel('realtime:announcements')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'announcements' }, async () => {
        await loadAnnouncements();
      })
      .subscribe();
  } catch (e) {
    console.warn("Realtime not enabled or failed:", e.message);
  }
})();
</script>