document.querySelector(".image-section img").addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.3) translateY(-20px)";
    this.style.transition = "transform 0.3s ease-in-out";
});

document.querySelector(".image-section img").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1) translateY(0)";
});

document.querySelector(".login-button").addEventListener("click", function() {
    window.location.href = "/NEVOFIA/html/home.html";
});

document.querySelector(".register-button").addEventListener("click", function() {
    window.location.href = "/NEVOFIA/html/register.html";
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Customer Review Slider
    let index = 0;
    function slideReviews() {
        const slider = document.querySelector(".review-slider");
        index = (index + 1) % 3;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(slideReviews, 3000);
});

