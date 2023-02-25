// Реалізуйте смужку прокручування
// та підключіть throttle для оптимізації скролла

const lineEl = document.querySelector('.line');
const documentHeight = document.body.clientHeight;
const oneProcentScroll = documentHeight / 100;

const throttleScroll = _.throttle(documentScroll, 100); //щоб можна було видалити слухач

document.addEventListener('scroll', throttleScroll);

// document.removeEventListener("scroll", throttleScroll);

function documentScroll(event) {
    const scrollWidth = window.scrollY / oneProcentScroll;
    lineEl.style.width = `${scrollWidth}%`;
}

console.log(document.body.clientHeight)