document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil nilai dari input
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Validasi sederhana
        if (name === "" || email === "" || message === "") {
            alert("Harap isi semua kolom!");
            return;
        }

        // Simulasi pengiriman (bisa diganti dengan AJAX)
        alert("Pesan berhasil dikirim!");
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });