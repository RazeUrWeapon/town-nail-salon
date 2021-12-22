const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const servicesButton = document.querySelector('.servicesButton');
const hoursButton = document.querySelector('.hoursButton');
const reviewsButton = document.querySelector('.reviewsButton');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
servicesButton.addEventListener('click', close);
hoursButton.addEventListener('click', close);
reviewsButton.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0px';
}

function close() {
    mainMenu.style.top = '-100%';
}