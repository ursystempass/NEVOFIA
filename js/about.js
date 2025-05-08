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
// Toggle navbar saat tombol hamburger diklik
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    
    // Mengubah ikon saat mode berubah
    if (body.classList.contains('dark-mode')) {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  });
});

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