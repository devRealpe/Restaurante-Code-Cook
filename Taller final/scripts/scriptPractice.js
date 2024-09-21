document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const navItems = document.querySelectorAll('.nav-item');
    const activityCards = document.querySelectorAll('.activity-card');

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

    // Funcionalidad para abrir/cerrar detalles de actividades
    activityCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });
});

