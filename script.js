// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Dummy server status (replace with real API ping if needed)
const serverStatus = document.getElementById('serverStatus');
fetch('https://api.mcsrvstat.us/2/plovdivmc.aternos.me')
  .then(res => res.json())
  .then(data => {
    serverStatus.textContent = data.online ? 'Online' : 'Offline';
  })
  .catch(() => serverStatus.textContent = 'Offline');
