gsap.from('.hamurger-lines', {duration: 2, x:'250%', ease: 'power2'})
gsap.from('.line', {duration: 1.5, opacity: 0, delay: .5, stagger: .5})
gsap.from('.hero-heading', {duration: 2.2, x:'-200px', opacity: 0, ease: 'power2'})

gsap.from('.gallery', {duration: 1.6, y:'150%', ease: 'power2'})
gsap.from('img', {duration: .5, opacity: 0, delay: 0.2, stagger: .2, ease: 'power2.in'})

lightbox.option({
    'showImageNumberLabel': false
})

let close = document.getElementById('close');
let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger-lines');

document.querySelector('.hamburger-lines').onclick = function(e) {
    menu.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
    close.classList.toggle('is-active');
    e.preventDefault();
}
document.querySelector('#close').onclick = function(e) {
    menu.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
    close.classList.toggle('is-active');
    e.preventDefault();
}

window.addEventListener('scroll', function(){
    var nav = document.querySelector('nav');
    var hamburgerLines = document.querySelector('.hamburger-lines');
    var logo = document.querySelectorAll('.hero-heading h1');
    
    nav.classList.toggle('sticky', window.scrollY > 0);
    hamburgerLines.classList.toggle('sticky', window.scrollY > 0);
    logo.classList.toggle('sticky', window.scrollY > 0);
})