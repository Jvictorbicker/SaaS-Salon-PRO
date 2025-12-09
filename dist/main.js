"use strict";
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active'); // abre/fecha menu
    menuToggle.classList.toggle('active'); // transforma hambúrguer em X
});
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex"; // mostra modal
});
closeModal.addEventListener("click", () => {
    loginModal.style.display = "none"; // esconde modal
});
// fecha ao clicar no fundo
window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});
//# sourceMappingURL=main.js.map