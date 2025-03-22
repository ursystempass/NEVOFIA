document.querySelector(".image-section img").addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.3) translateY(-20px)";
    this.style.transition = "transform 0.3s ease-in-out";
});

document.querySelector(".image-section img").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1) translateY(0)";
});

document.querySelector(".login-button").addEventListener("click", function() {
    window.location.href = "/html/home.html";
});

document.querySelector(".register-button").addEventListener("click", function() {
    window.location.href = "/html/register.html";
});

