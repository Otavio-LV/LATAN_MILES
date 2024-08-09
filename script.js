document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const cpf = document.getElementById('cpf').value;
    const errorMessage = document.getElementById('error-message');
    
    if (isValidCPF(cpf)) {
        // Supondo que o CPF é válido, você pode prosseguir com a lógica de login aqui
        window.location.href = 'https://music.youtube.com/watch?v=83mhHOytg4U&list=RDAMVMh4UqMyldS7Q';
    } else {
        alert('CPF inválido. Verifique o formato e tente novamente.');
        errorMessage.classList.remove('hidden');
    }
});

function isValidCPF(cpf) {
    // Esta função é uma validação básica para o formato do CPF
    // Pode ser expandida conforme necessário
    const cpfPattern = /^\d{11}$/;
    return cpfPattern.test(cpf);
}


