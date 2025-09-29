// js/main.js (VERSÃO ATUALIZADA)

document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO HEADER AO ROLAR A PÁGINA (CONTINUA ÚTIL) ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- LÓGICA PARA MARCAR O LINK DA PÁGINA ATIVA (CONTINUA ÚTIL) ---
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav a.nav-link');

    navLinks.forEach(link => {
        // Lógica ajustada para funcionar corretamente com caminhos de arquivo locais
        const linkPath = link.getAttribute('href').split('/').pop();
        const activePath = activePage.split('/').pop();
        if (linkPath === activePath) {
            link.classList.add('active-link');
        }
    });

});