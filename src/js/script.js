const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('#hamburgerButton');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const mobileMenu = document.querySelector('.header__menu');

function closeHamburgerMenu() {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach( (e) => {
        e.classList.remove('fade-in');
        e.classList.add('fade-out');
    });
}

function openMobileMenu() {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach( (e) => {
        e.classList.remove('fade-out');
        e.classList.add('fade-in');
    });
}

hamburgerMenu.addEventListener('click', () => {
    if(header.classList.contains('open')) {
        closeHamburgerMenu();
    } else {
        openMobileMenu();
    }
});

// Removes mobile menu when link is pressed
mobileMenu.addEventListener('click', () => {
    if(header.classList.contains('open')) {closeHamburgerMenu()}
});

