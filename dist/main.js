"use strict";
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active'); // abre/fecha menu
    menuToggle.classList.toggle('active'); // transforma hambúrguer em X
});
//# sourceMappingURL=main.js.map