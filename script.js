// script.js

// Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.left = (index - currentSlide) * 100 + '%';
        slide.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

// Set interval to automatically change slides every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the first slide
showSlide();

