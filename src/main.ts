const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
const mainNav = document.querySelector('.main-nav') as HTMLElement;

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');       // abre/fecha menu
    menuToggle.classList.toggle('active');    // transforma hambúrguer em X
});

const btnSubscriptions = document.getElementById("btn-subscriptions");
const sectionSubscriptions = document.getElementById("subscriptions");

btnSubscriptions?.addEventListener("click", () => {
    sectionSubscriptions?.scrollIntoView({
        behavior: "smooth"
    });
});

