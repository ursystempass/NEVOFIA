document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully");
});
document.addEventListener("DOMContentLoaded", function () {
    const bestProduct = document.querySelector(".best-product");

    function handleScroll() {
        const rect = bestProduct.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 150) {
            bestProduct.classList.add("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Jalankan saat pertama kali halaman dimuat
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
