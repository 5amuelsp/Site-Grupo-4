// js/login.js

document.addEventListener('DOMContentLoaded', () => {
    // Pega os elementos do formulário
    const formLogin = document.getElementById('form-login');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Verifica se estamos na página de login
    if (!formLogin) return;

    // Adiciona um "ouvinte" para o evento de 'submit' do formulário
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // SIMULAÇÃO DE AUTENTICAÇÃO
        if (email === 'usuario@ecocozinha.com' && password === 'senha123') {
            errorMessage.textContent = '';
            localStorage.setItem('usuarioLogado', email);
            alert('Login realizado com sucesso! Redirecionando para a página inicial.');
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = 'E-mail ou senha inválidos. Tente novamente.';
        }
    });
});