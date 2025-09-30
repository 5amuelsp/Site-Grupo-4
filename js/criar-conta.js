// js/criar-conta.js
document.addEventListener('DOMContentLoaded', () => {
  // --- Elementos do DOM ---
  const form = document.getElementById('signupForm');
  const statusDiv = document.getElementById('status');
  const fileInput = document.getElementById('file');
  const avatarPreview = document.getElementById('avatarPreview');
  const avatarWrap = document.getElementById('avatarPreviewWrap');
  const removeBtn = document.getElementById('removeAvatar');
  const resetBtn = document.getElementById('resetBtn');

  if (!form) return;

  // --- Funções Auxiliares ---
  const el = id => document.getElementById(id);
  const getVal = id => (el(id).type === 'checkbox') ? el(id).checked : (el(id).value || '').trim();
  const showStatus = (text, type = 'info') => {
    statusDiv.textContent = text;
    statusDiv.className = `form-status ${type}`;
  };

  const showFieldError = (inputId, message) => {
    const input = el(inputId);
    input.parentElement.insertAdjacentHTML('beforeend', `<small class="error-message">${message}</small>`);
    input.style.borderColor = '#d32f2f';
  };

  const clearFieldErrors = () => {
    form.querySelectorAll('.error-message').forEach(e => e.remove());
    form.querySelectorAll('input, select').forEach(i => i.style.borderColor = '');
  };

  const clearFileInput = () => {
    fileInput.value = '';
    avatarPreview.src = '';
    avatarWrap.style.display = 'none';
  };

  const clearForm = () => {
    form.reset();
    clearFieldErrors();
    clearFileInput();
    showStatus('');
  };

  // --- Lógica Principal ---
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      showStatus('Erro: arquivo muito grande (máx 5MB).', 'error');
      clearFileInput();
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      avatarPreview.src = e.target.result;
      avatarWrap.style.display = 'flex';
    };
    reader.readAsDataURL(file);
  });

  removeBtn.addEventListener('click', clearFileInput);
  resetBtn.addEventListener('click', clearForm);

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    clearFieldErrors();
    showStatus('');

    const data = {
      fullName: getVal('fullName'),
      email: getVal('email'),
      password: getVal('password'),
      confirmPassword: getVal('confirmPassword'),
      estado: getVal('estado'),
    };

    // Validação
    let hasError = false;
    if (!data.fullName) { hasError = true; showFieldError('fullName', 'Nome é obrigatório.'); }
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) { hasError = true; showFieldError('email', 'E-mail inválido.'); }
    if (!data.password || data.password.length < 8) { hasError = true; showFieldError('password', 'A senha deve ter no mínimo 8 caracteres.'); }
    if (data.password !== data.confirmPassword) { hasError = true; showFieldError('confirmPassword', 'As senhas não coincidem.'); }
    if (!data.estado) { hasError = true; showFieldError('estado', 'Selecione um estado.'); }

    if (hasError) {
      showStatus('Erro: corrija os campos destacados.', 'error');
      return;
    }

    // Simulação de salvamento
    showStatus('Criando conta, por favor aguarde...', 'info');
    setTimeout(() => {
        showStatus('Conta criada com sucesso! Redirecionando para o login...', 'success');
        setTimeout(() => {
            window.location.href = 'login.html'; // Redireciona para a página de login
        }, 1500);
    }, 1000);
  });
});