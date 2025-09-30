// js/login.js

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    if (formLogin) {
        formLogin.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = emailInput.value;
            const password = passwordInput.value;

            // --- SIMULAÇÃO DE AUTENTICAÇÃO ---
            if (email === 'usuario@ecocozinha.com' && password === 'senha123') {
                errorMessage.textContent = '';
                alert('Login realizado com sucesso! Redirecionando...');
                localStorage.setItem('usuarioLogado', email);
                window.location.href = 'index.html';
            } else {
                errorMessage.textContent = 'E-mail ou senha inválidos. Tente novamente.';
            }
        });
    }
});