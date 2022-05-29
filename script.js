gsap.from('.hamburger-lines', {duration: 2, x:'250%', ease: 'power2'})
gsap.from('.line', {duration: 1.5, opacity: 0, delay: .5, stagger: .5})
gsap.from('.hero-heading', {duration: 2.2, x:'-200px', opacity: 0, ease: 'power2'})

gsap.from('.gallery', {duration: 1.6, y:'150%', ease: 'power2'})
gsap.from('img', {duration: .5, opacity: 0, delay: 0.2, stagger: .2, ease: 'power2.in'})

lightbox.option({
    'showImageNumberLabel': false
})