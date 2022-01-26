# Town Nails & Spa Webpage

### Table of contents
- [Project Description](#project-description)
- [Tech Used](#tech-used)
- [Features](#features)
- [Credits](#credits)
- [Connect with me](#connect-with-me)

## Project Description
- Client wanted a basic webpage that would convert potential clients into customers.

- Main things the client wanted:
    - Buttons that would directly call the salon when clicked
    - All information potential clients would need in order to click the CTA's
    - A FAQ section to cut down on phone calls that weren't leading to appointments
    - Mobile friendly

## Tech Used
- HTML 5
- Sass
- JavaScript

## Features
- #### Mobile hamburger menu
``` javascript
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
```
- #### Fade in on scroll
``` javascript
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
```
- #### FAQ accordion
``` javascript
    faqQuestion.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('open');
            question.nextElementSibling.classList.toggle('collapsed');
        });
    });
```

## Credits
- Hamburger menu & FAQ accordian help from [Coder Coder YouTube Channel](https://www.youtube.com/c/TheCoderCoder).

## Connect with me
- Website - [josephwilde.me](http://www.josephwilde.me)
- LinkedIn - [Joseph Wilde](https://www.linkedin.com/in/joseph-michael1/)
- Twitter - [@jwilde19](https://twitter.com/jwilde19)