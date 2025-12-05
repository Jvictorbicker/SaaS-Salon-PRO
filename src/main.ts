const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
const mainNav = document.querySelector('.main-nav') as HTMLElement;

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');       // abre/fecha menu
    menuToggle.classList.toggle('active');    // transforma hambúrguer em X
});
