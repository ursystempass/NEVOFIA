document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully");

    // Animasi muncul untuk .best-product
    const bestProduct = document.querySelector(".best-product");
    function handleScroll() {
        if (!bestProduct) return;
        const rect = bestProduct.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 150) {
            bestProduct.classList.add("show");
        }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Panggil sekali saat halaman dimuat

    // Pastikan semua gambar dimuat untuk best-product
    const productImages = document.querySelectorAll(".product-item img");
    productImages.forEach(img => {
        img.addEventListener("error", function () {
            console.error("Gambar tidak ditemukan:", img.src);
            img.style.display = "none"; // Sembunyikan jika tidak bisa dimuat
        });
    });

    // Animasi muncul untuk .top-brand
    const topBrand = document.querySelector(".top-brand");
    function handleBrandScroll() {
        if (!topBrand) return;
        const rect = topBrand.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 150) {
            topBrand.classList.add("show");
        }
    }
    window.addEventListener("scroll", handleBrandScroll);
    handleBrandScroll(); // Panggil sekali saat halaman dimuat

    // Pastikan semua gambar dimuat untuk top-brand
    const brandImages = document.querySelectorAll(".brand img");
    brandImages.forEach(img => {
        img.addEventListener("error", function () {
            console.error("Gambar tidak ditemukan:", img.src);
            img.style.display = "none"; // Sembunyikan jika tidak bisa dimuat
        });
    });
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
