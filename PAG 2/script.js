const cpfUsuario = localStorage.getItem('cpfUsuario');

document.getElementById('identificacao').innerText = ` ${cpfUsuario}`;