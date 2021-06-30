const burgerMenu = document.querySelector('.nav__hamburger-menu');
const navMenu = document.querySelector('.nav__ul');

function mobileMenu() {
    navMenu.classList.toggle('active');
}

burgerMenu.addEventListener('click', mobileMenu);
