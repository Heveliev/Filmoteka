const closeBtnRef = document.querySelector('.close-button');
const overlayRef = document.querySelector('.overlay');
const footerTextRef = document.querySelector('a.footer-text');


closeBtnRef.addEventListener('click', closeModal);

function closeModal() {
    overlayRef.classList.add("is-hidden");
    document.body.classList.remove('no-scroll');
};

footerTextRef.addEventListener('click', openModal);

function openModal(e) {
    e.preventDefault();
    overlayRef.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
};