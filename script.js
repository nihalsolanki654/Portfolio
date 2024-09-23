document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded");
});

// JavaScript to trigger the animations when the page loads
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.querySelector('header').classList.add('loaded');
    document.querySelector('nav ul').classList.add('loaded');
    document.querySelector('.container').classList.add('loaded');
    document.querySelector('section').classList.add('loaded');
    document.querySelector('footer').classList.add('loaded');
});

// Wait until the DOM is fully loaded
window.addEventListener('load', () => {
    // Add the 'loaded' class to the body to trigger animations
    document.body.classList.add('loaded');

    // Add the 'loaded' class to the header, nav, container, and sections
    document.querySelector('header').classList.add('loaded');
    document.querySelector('nav ul').classList.add('loaded');
    document.querySelectorAll('.container').forEach(container => {
        container.classList.add('loaded');
    });
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('loaded');
    });
});

