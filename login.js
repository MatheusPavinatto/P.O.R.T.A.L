function verificarCredenciais(event) {
    event.preventDefault();  // Previne o envio do formulário tradicional

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Se as credenciais forem "000"/"000", redireciona para a página secreta
    if (username === '000' && password === '000') {
        window.location.href = 'arq000.html';  // Página especial
    } else {
        // Exibe o pop-up de login sucedido
        alert('Login Sucedido');
        // Redireciona para a dashboard
        window.location.href = 'dashboard.html';
    }
}
const audio = document.getElementById('audio');
audio.volume = 0.5; // Ajusta o volume inicial (50%)
