document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const navItems = document.querySelectorAll('.nav-item');

    // Toggle para abrir y cerrar el dashboard
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    // Cierra el menú si se hace clic en cualquier elemento del menú
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebar.classList.remove('open');
        });
    });
});
