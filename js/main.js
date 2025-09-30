// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // --- EFEITO DO HEADER ENCOLHER AO ROLAR A PÁGINA ---
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
});