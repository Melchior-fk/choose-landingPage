const navTriggerButton = document.querySelector('#nav-trigger-btn')
const navMenu = document.querySelector('#nav-menu')

navTriggerButton.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open')
})


// swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320 : {
            slidesPerView: 1
        },
        960 : {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }

})

//scroll reveal

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 900,
    delay: 400,
})

sr.reveal('.hero--text', {origin : 'top'})
sr.reveal('.steps--step', {distance: '100px', interval: 100})
sr.reveal('.about--text', {origin : 'left'})
sr.reveal('.about--img', {origin : 'right'})
sr.reveal('.testimonial--bg', {delai : 400})
sr.reveal('.testimonial--title')
sr.reveal('.testimonial--slider', {delai : 600})
sr.reveal('.brand--img', {delai:300, distance: '100px', interval: 100})
sr.reveal('.work--title')
sr.reveal('.work--subtitle', {delai: 500})
sr.reveal('.work--grid', {delai: 600})
sr.reveal('.contact--container')
sr.reveal('.contact--text', {delai:600})
sr.reveal('.footer--item', {distance: '100px', interval : 100})
sr.reveal('.footer--copy')