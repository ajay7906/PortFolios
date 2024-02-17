//let navbutton=document.getElementById("nav-button");


const navButton = document.getElementById('nav-button');
const slideDownNav = document.getElementById('slide-down-nav');
const content = document.getElementById('content');

navButton.addEventListener('click', function () {
    const isNavOpen = slideDownNav.style.top === '0%';

    slideDownNav.style.top = isNavOpen ? '-100%' : '0%';
    content.style.marginTop = isNavOpen ? '0' : '80px';
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('#slide-down-nav') && !event.target.closest('#nav-button')) {
        slideDownNav.style.top = '-100%';
        content.style.marginTop = '0';
    }
});