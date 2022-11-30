const cards = document.querySelectorAll('.slider-card');
const sliderLine = document.querySelectorAll('.slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelectorAll('.slider').offsetWidth;
    console.log(width)
}

init();