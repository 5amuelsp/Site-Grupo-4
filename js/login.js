// js/login.js

// Pega os elementos do formulário
const formLogin = document.getElementById('form-login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Adiciona um "ouvinte" para o evento de 'submit' do formulário
formLogin.addEventListener('submit', (event) => {
    // 1. Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // 2. Pega os valores dos inputs
    const email = emailInput.value;
    const password = passwordInput.value;

    // 3. SIMULAÇÃO DE AUTENTICAÇÃO
    // Em um app real, aqui você enviaria os dados para um servidor (backend)
    // Para nosso estudo, vamos usar um usuário e senha fixos.
    if (email === 'usuario@ecocozinha.com' && password === 'senha123') {
        // Se a autenticação for bem-sucedida:
        errorMessage.textContent = ''; // Limpa a mensagem de erro

        // Salva um "token" de usuário no localStorage para simular que ele está logado
        localStorage.setItem('usuarioLogado', email);

        // Mostra um alerta de sucesso
        alert('Login realizado com sucesso! Redirecionando para a página inicial.');

        // Redireciona o usuário para a página inicial
        window.location.href = 'index.html';

    } else {
        // Se a autenticação falhar:
        errorMessage.textContent = 'E-mail ou senha inválidos. Tente novamente.';
    }
});