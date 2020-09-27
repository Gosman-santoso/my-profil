const menuBar = document.querySelector('.menu-bar');
const hamburger = document.querySelector('.hamburger');
const hamburgerColor = document.querySelector('.hamburger div');
const buttonLink = document.querySelectorAll('.link');

const screen = document.querySelector('.screen');
const screen1 = document.querySelector('.screen-1');
const screen2 = document.querySelector('.screen-2');

const cover = document.querySelector('.cover');

const slideImg = document.getElementsByClassName('img-slide');
const buttonCover = document.querySelector('.cover aside button');

const link = document.getElementsByClassName('link');

const formFooter = document.querySelector('footer form');
const buttonFooter = document.querySelector('footer .form-button');
const submitFooter = document.querySelector('footer .submit');
const gmail = document.querySelector('gmail');
const message = document.querySelector('message');



// hamburger
hamburger.addEventListener("click", function() {
    menuBar.classList.toggle("open");
    hamburgerColor.classList.toggle("changeColor");
});

for (var i = 0; i < link.length; i++) {

    link[i].addEventListener('click', function() {
        hamburgerColor.classList.remove('changeColor');
        menuBar.classList.remove('open');
    });
}

// scroll appear
function scrollAppear() {
    const vanilla = document.querySelector('.about aside');
    const photoProfil = document.querySelector('.photo-profil');
    const vainllaPosition = vanilla.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.7;

    if (vainllaPosition < screenPosition) {
        vanilla.classList.add('appear-effect');
        photoProfil.classList.add('appear-effect');
    } else {
        vanilla.classList.remove('appear-effect');
        photoProfil.classList.remove('appear-effect');
    }
}
window.addEventListener('scroll', scrollAppear);

// window load
window.onload = function() {
    screen.classList.add('screen-open');
    screen1.classList.add('screen-open');
    screen2.classList.add('screen-open');
    cover.classList.add('open');
}

// slide photo
buttonCover.addEventListener('click', function() {
    for (var i = 0; i < slideImg.length; i++) {
        slideImg[i].classList.add('slide');
    }
});

// form animation
buttonFooter.addEventListener('click', function() {
    formFooter.classList.add('open');
});

submitFooter.addEventListener('click', function() {
    if (gmail == "" && message == "") {
        alert('thank you')
    }
});