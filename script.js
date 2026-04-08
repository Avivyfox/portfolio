// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const dropdown = document.getElementById('nav-dropdown');

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
  });

  // Close menu if clicking a nav link
  document.querySelectorAll('.nav-layer').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
    });
  });
}

console.log("Aviv Fox Portfolio");
