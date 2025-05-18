document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000); // Ganti slide setiap 5 detik

  showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully");

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

    // BEST PRODUCT (sama seperti top-brand)
    const bestProduct = document.querySelector(".best-product");
    function handleBestProductScroll() {
        if (!bestProduct) return;
        const rect = bestProduct.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 150) {
            bestProduct.classList.add("show");
        }
    }

    // Event scroll listener untuk kedua bagian
    window.addEventListener("scroll", () => {
        handleBrandScroll();
        handleBestProductScroll();
    });

    // Panggil langsung untuk mengecek awal saat halaman sudah kebuka
    handleBrandScroll();
    handleBestProductScroll();

    // HANDLE GAMBAR GAGAL LOAD
    const brandImages = document.querySelectorAll(".brand img");
    brandImages.forEach(img => {
        img.addEventListener("error", function () {
            console.error("Gambar tidak ditemukan:", img.src);
            img.style.display = "none"; 
        });
    });

    // HAMBURGER MENU
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // SLIDER UNTUK CUSTOMER REVIEW
    let index = 0;
    function slideReviews() {
        const slider = document.querySelector(".review-slider");
        index = (index + 1) % 3;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(slideReviews, 3000);
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    let index = 0;
    function slideReviews() {
        const slider = document.querySelector(".review-slider");
        index = (index + 1) % 3;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(slideReviews, 3000);
});

