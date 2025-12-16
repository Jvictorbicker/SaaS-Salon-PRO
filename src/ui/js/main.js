const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');    // abre/fecha menu
        menuToggle.classList.toggle('active'); // transforma hambúrguer em X
    });
}

const btnSubscriptions = document.getElementById("btn-subscriptions");
const sectionSubscriptions = document.getElementById("subscriptions");

if (btnSubscriptions && sectionSubscriptions) {
    btnSubscriptions.addEventListener("click", function () {
        sectionSubscriptions.scrollIntoView({
            behavior: "smooth"
        });
    });
}