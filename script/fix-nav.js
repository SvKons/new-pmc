'use strict';

window.onscroll = function () {
    let navbar = document.querySelector('.header');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
};
