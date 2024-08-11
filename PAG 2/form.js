document.addEventListener('DOMContentLoaded', function () {
    const leftRadio = document.getElementById('leftRadio');
    const rightRadio = document.getElementById('rightRadio');
    const formContainer = document.getElementById('formContainer');
    const cpfForm = document.getElementById('cpfForm');
    const cpfInput = document.getElementById('cpf');
    const confirmCpfInput = document.getElementById('confirmCpf');
    const errorMessage = document.getElementById('error-message');
    const cpfIdentification = document.getElementById('cpfIdentification');
    const identifiedCpf = document.getElementById('identified-cpf');

    function updateFormVisibility() {
        if (rightRadio.checked) {
            formContainer.classList.remove('hidden');
        } else {
            formContainer.classList.add('hidden');
            cpfIdentification.classList.add('hidden'); // Esconde o CPF identificado
        }
    }

    function isValidCPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, '');

        if (cpf.length !== 11) return false;
        if (/^(\d)\1{10}$/.test(cpf)) return false;

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

    function handleFormSubmit(event) {
        event.preventDefault();
        errorMessage.textContent = '';

        const cpf = cpfInput.value;
        const confirmCpf = confirmCpfInput.value;

        if (cpf !== confirmCpf) {
            errorMessage.textContent = 'Os CPFs não coincidem.';
            cpfIdentification.classList.add('hidden'); // Esconde o CPF identificado se os CPFs não coincidirem
            return;
        }

        if (isValidCPF(cpf)) {
            identifiedCpf.textContent = cpf;
            cpfIdentification.classList.remove('hidden');
            errorMessage.textContent = ''; // Limpar mensagem de erro, se houver
        } else {
            errorMessage.textContent = 'CPF inválido.';
            cpfIdentification.classList.add('hidden'); // Esconde o CPF identificado se inválido
        }
    }

    leftRadio.addEventListener('change', updateFormVisibility);
    rightRadio.addEventListener('change', updateFormVisibility);

    cpfForm.addEventListener('submit', handleFormSubmit);
});
