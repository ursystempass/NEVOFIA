document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully");

    // HAMBURGER MENU
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // TOP BRAND
    const topBrand = document.querySelector(".top-brand");
    function handleBrandScroll() {
        if (!topBrand) return;
        const rect = topBrand.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 150) {
            topBrand.classList.add("show");
        }
    }

    // BEST PRODUCT
    const bestProduct = document.querySelector(".best-product");
    function handleBestProductScroll() {
        if (!bestProduct) return;
        const rect = bestProduct.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 150) {
            bestProduct.classList.add("show");
        }
    }

    window.addEventListener("scroll", () => {
        handleBrandScroll();
        handleBestProductScroll();
    });

    handleBrandScroll();
    handleBestProductScroll();

    // GAMBAR ERROR
    const brandImages = document.querySelectorAll(".brand img");
    brandImages.forEach(img => {
        img.addEventListener("error", function () {
            console.error("Gambar tidak ditemukan:", img.src);
            img.style.display = "none"; 
        });
    });

    // SLIDER REVIEW
    let index = 0;
    function slideReviews() {
        const slider = document.querySelector(".review-slider");
        index = (index + 1) % 3;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(slideReviews, 3000);
});
