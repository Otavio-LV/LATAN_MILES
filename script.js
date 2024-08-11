document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    const cpf = document.getElementById('cpf').value;
    const errorMessage = document.getElementById('error-message');
    
    if (isValidCPF(cpf)) {
        // Supondo que o CPF é válido, você pode prosseguir com a lógica de login aqui
        window.location.href = 'PAG 2/latam.html';
    } else {
        errorMessage.textContent = 'CPF inválido. Verifique o formato e tente novamente.';
        errorMessage.classList.remove('hidden');
    }
    localStorage.setItem('cpfUsuario', cpf);
});

function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false; // Verifica se todos os dígitos são iguais

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;

    return true;
}

