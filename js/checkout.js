const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
document.getElementById('payment-method').addEventListener('change', function() {
  const selected = this.value;
  console.log("Metode pembayaran dipilih:", selected);
  // Bisa tampilkan instruksi tambahan sesuai metode jika mau
});
document.addEventListener("DOMContentLoaded", () => {
  const bayarBtn = document.querySelector(".checkout-btn");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  bayarBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Tutup modal kalau klik di luar modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
