document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // --- Fonctionnement du menu Hamburger ---
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Ajoute/retire la classe active pour les barres
        });
    }

    // Fermer le menu quand on clique sur un lien (utile pour l'UX mobile)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Optionnel: Ajouter une classe 'active' au lien de la page courante
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Gère le cas de la racine
    if (currentPage) {
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // --- Fonctionnement du Dark/Light Mode ---
    if (themeToggleBtn) {
        // Vérifier le thème sauvegardé dans localStorage ou par défaut
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark-mode') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        // Écouteur d'événement pour le bouton de bascule
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Sauvegarder le thème dans localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark-mode');
            } else {
                localStorage.setItem('theme', 'light-mode');
            }
        });
    }
});