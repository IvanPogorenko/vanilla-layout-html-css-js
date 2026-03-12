document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (burger && mobileMenu) {
        burger.addEventListener('click', function() {
            mobileMenu.classList.toggle('mobile-menu--open');
            burger.classList.toggle('burger--active');
            body.classList.toggle('no-scroll');
        });
    }
});