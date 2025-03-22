document.addEventListener("DOMContentLoaded", function () {
    const voucherCheckbox = document.getElementById("voucherCheckbox");
    const paymentMethod = document.getElementById("paymentMethod");
    const totalPembayaran = document.getElementById("totalPembayaran");

    let totalHarga = 48112; // Harga awal tanpa voucher

    // Event ketika pengguna memilih metode pembayaran
    paymentMethod.addEventListener("change", function () {
        if (paymentMethod.value === "spaylater") {
            alert("Anda memilih SPayLater. Pastikan saldo cukup!");
        }
    });

    // Event untuk penggunaan voucher
    voucherCheckbox.addEventListener("change", function () {
        if (voucherCheckbox.checked) {
            totalHarga *= 0.8; // Diskon 20%
        } else {
            totalHarga = 48112; // Kembali ke harga awal
        }
        totalPembayaran.textContent = `Rp${totalHarga.toFixed(0)}`;
    });

    // Event ketika tombol checkout ditekan
    document.getElementById("checkoutButton").addEventListener("click", function () {
        alert("Pesanan berhasil dibuat! Total pembayaran: " + totalPembayaran.textContent);
    });
});
