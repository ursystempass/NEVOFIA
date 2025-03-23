document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    const modal = document.getElementById("register-modal");
    const closeModal = document.getElementById("close-modal");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil nilai input
        const inputs = document.querySelectorAll(".input-box");
        const fullName = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const password = inputs[2].value.trim();
        const confirmPassword = inputs[3].value.trim();

        // Validasi input
        if (!fullName || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Jika valid, tampilkan modal
        modal.style.display = "flex";

        setTimeout(() => {
            window.location.href = "/html/login.html";
        }, 3000);
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        window.location.href = "/html/login.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });