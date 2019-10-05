import './style.scss'


let getNav = document.querySelector('.nav-top');
let getNavMobile = document.querySelector('.mobile-nav .nav__line');
getNavMobile.addEventListener('click', () => onNavMobile());

const onNavMobile = () => {
    getNav.classList.toggle('js-nav-visible');   
}
