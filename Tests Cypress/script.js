// script.js

// Obtener elementos del DOM
const modal = document.getElementById("customAlert");
const openAlertButton = document.getElementById("openAlert");
const closeButton = document.querySelector(".close-button");
const confirmButton = document.getElementById("confirmButton");

// Función para abrir la alerta personalizada
function openModal() {
    modal.style.display = "block";
}

// Función para cerrar la alerta personalizada
function closeModal() {
    modal.style.display = "none";
}

// Event Listeners para abrir y cerrar la alerta
openAlertButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
confirmButton.addEventListener("click", closeModal);

// Cerrar la alerta al hacer clic fuera de ella
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
