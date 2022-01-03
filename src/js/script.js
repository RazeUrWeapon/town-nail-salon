const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('#hamburgerButton');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const mobileMenu = document.querySelector('.header__menu');
const scrollFadeInElements = document.querySelectorAll('.scroll-fade-in');

let windowHeight = window.innerHeight;

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

// Fade in on scroll effect
function scrollFade() {
    document.addEventListener("DOMContentLoaded", () => {
      scrollFadeInInit(scrollFadeInElements);
  
      window.addEventListener("scroll", () => {
        scrollFadeInEffect(scrollFadeInElements);
      });
    });
  
    function scrollFadeInInit(element) {
      for (let i = 0; i < element.length; i++) {
        let posFromTop = element[i].getBoundingClientRect().top;
        if (posFromTop - windowHeight > 0) {
          element[i].classList.add("is-hidden");
        }
      }
    }
  
    function scrollFadeInEffect(element) {
      for (let i = 0; i < element.length; i++) {
        let posFromTop = element[i].getBoundingClientRect().top;
        if (posFromTop - windowHeight <= 0) {
          element[i].classList.remove("is-hidden");
        }
      }
    }
  };

  scrollFade();
