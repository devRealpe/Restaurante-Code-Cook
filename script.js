document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const navItems = document.querySelectorAll('.nav-item');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.add('open');
    });

    closeMenu.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebar.classList.remove('open');
        });
    });
});