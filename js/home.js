document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

let currentIndex = 0;
const cards = document.querySelectorAll('.promo-card');

function showSlide(index) {
  cards.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % cards.length;
  showSlide(currentIndex);
}

// Tampilkan slide pertama
showSlide(currentIndex);

// Otomatis ganti setiap 3 detik
setInterval(nextSlide, 3000);

