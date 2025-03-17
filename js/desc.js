// Fungsi mengganti gambar produk utama saat thumbnail diklik
function changeImage(imageSrc) {
    document.getElementById("productImage").src = imageSrc;
}

// Pergantian otomatis untuk gambar lip product setiap 3 detik
const lipImages = [
    "/project-folder/image/hoyeon.jpg",
    "/project-folder/image/model.jpeg",
    "/project-folder/image/apple.jpeg"
];

let currentLipIndex = 0;

function changeLipProductImage() {
    currentLipIndex = (currentLipIndex + 1) % lipImages.length;
    document.getElementById("lipProductImage").src = lipImages[currentLipIndex];
}

setInterval(changeLipProductImage, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".product-gallery img");
    const mainProductImage = document.getElementById("productImage");

    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            mainProductImage.src = this.src;
        });
    });
});

function increaseQuantity() {
    let qty = document.getElementById("quantity");
    qty.innerText = parseInt(qty.innerText) + 1;
}

function decreaseQuantity() {
    let qty = document.getElementById("quantity");
    if (parseInt(qty.innerText) > 1) {
        qty.innerText = parseInt(qty.innerText) - 1;
    }
}