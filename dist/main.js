"use strict";
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active'); // abre/fecha menu
    menuToggle.classList.toggle('active'); // transforma hambúrguer em X
});
const btnSubscriptions = document.getElementById("btn-subscriptions");
const sectionSubscriptions = document.getElementById("subscriptions");
btnSubscriptions === null || btnSubscriptions === void 0 ? void 0 : btnSubscriptions.addEventListener("click", () => {
    sectionSubscriptions === null || sectionSubscriptions === void 0 ? void 0 : sectionSubscriptions.scrollIntoView({
        behavior: "smooth"
    });
});
//# sourceMappingURL=main.js.map