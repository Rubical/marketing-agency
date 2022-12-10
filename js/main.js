// Dark mode button functional

const btnDarkMode = document.querySelector('.dark-mode-btn');

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    document.body.classList.toggle('dark');
};

// Modal box functional

const modalBtns = document.querySelectorAll(".modal-box--active");
const modalOverlay = document.querySelector(".modal-box-overlay");
const modalCloseBtn = document.querySelector(".modal-box-close");

modalBtns.forEach((el) => {
el.addEventListener('click', (e) => {
    modalOverlay.classList.add('modal-box-overlay--visible');
    document.body.style.overflow = 'hidden';
    })
});

modalCloseBtn.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal-box-overlay--visible');
    document.body.style.overflow = 'auto';
    });

// Logo reload page

const logoBtn = document.querySelector('.logo');

logoBtn.addEventListener('click', (e) => {
    location.reload();
});

// Mobile Nav

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');

navBtn.addEventListener('click', () => {
nav.classList.add ('open');
});
