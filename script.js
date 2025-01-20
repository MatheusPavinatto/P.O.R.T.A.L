// Função para verificar a chave
const correctKey = "exterminação";  // A chave correta
const submitBtn = document.getElementById("submitBtn");
const keyInput = document.getElementById("keyInput");
const successMessage = document.getElementById("successMessage");

submitBtn.addEventListener("click", () => {
    const inputValue = keyInput.value.trim().toLowerCase();
    if (inputValue === correctKey) {
        successMessage.style.display = "block";
        setTimeout(() => {
            window.location.href = "proxima_fase.html";  // Redireciona para outra parte do site
        }, 2000);  // Atraso de 2 segundos antes de redirecionar
    } else {
        alert("A chave está incorreta. Tente novamente.");
    }
});
