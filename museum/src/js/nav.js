const burger = document.querySelector('.header-nav__burger');
const closeNavPopup = document.querySelector('.header-nav__close');
const nav = document.querySelector('.header-nav__list');
const welcomeText = document.querySelector('.welcome-text__wrapper');
const navWrapper = document.querySelector('.header-nav__wrapper');


function openNav() {
    burger.classList.add('none');
    closeNavPopup.classList.remove('none');
    closeNavPopup.classList.add('block');
    nav.classList.remove('nav-list');
    // nav.classList.add('nav-list__popup');
    navWrapper.classList.add('popup');

    setTimeout(() => {
        navWrapper.style.transition = `left 1s ease`;
        navWrapper.style.left = '-685px';
    }, 0);
};

function closeNav() {
    
    closeNavPopup.classList.remove('block');
    
    closeNavPopup.classList.add('none');
    burger.classList.remove('none');
    burger.classList.add('block');


        navWrapper.style.transition = `left 1s ease`;
        navWrapper.style.left = '-1500px'


    setTimeout(() => {
        // nav.classList.remove('nav-list__popup');
        nav.classList.add('nav-list');
        navWrapper.classList.remove('popup');
    }, 1000);
}

function onBurgerClick() {
    burger.addEventListener('click', openNav);
};

function onCloseClick() {
    closeNavPopup.addEventListener('click', closeNav);
}

export {
    onBurgerClick,
    onCloseClick
};
