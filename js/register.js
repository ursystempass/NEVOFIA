document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.querySelector(".register-button");
    const modal = document.getElementById("register-modal");
    const closeModal = document.getElementById("close-modal");

    registerButton.addEventListener("click", function () {
        const fullName = document.querySelector("input[placeholder='Full Name']").value.trim();
        const email = document.querySelector("input[placeholder='Email']").value.trim();
        const password = document.querySelector("input[placeholder='Password']").value.trim();
        const confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value.trim();

        if (fullName && email && password && confirmPassword) {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                modal.style.display = "flex"; // Tampilkan modal
            }
        } else {
            alert("Please fill in all fields.");
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Sembunyikan modal
        window.location.href = "login.html"; // Arahkan ke halaman login
    });
});
