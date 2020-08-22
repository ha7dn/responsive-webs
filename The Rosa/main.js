//Select element function
const selectElement = (element) => {
    return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
});


// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.anim-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.anim-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.anim-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.anim-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});