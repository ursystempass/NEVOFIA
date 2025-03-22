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

    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");

        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    });


function updatePrice() {
    const priceElement = document.getElementById("product-price");
    const basePrice = parseInt(priceElement.getAttribute("data-price"));
    const quantity = parseInt(document.getElementById("quantity").textContent);
    const totalPrice = basePrice * quantity;
    priceElement.textContent = `Rp${totalPrice.toLocaleString("id-ID")}`;
}

function increaseQuantity() {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updatePrice();
}

function decreaseQuantity() {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        updatePrice();
    }
}

function updatePrice() {
    const priceElement = document.getElementById("product-price");
    const basePrice = parseInt(priceElement.getAttribute("data-price"));
    const quantity = parseInt(document.getElementById("quantity").textContent);
    const totalPrice = basePrice * quantity;
    priceElement.textContent = `Rp${totalPrice.toLocaleString("id-ID")}`;
}

function increaseQuantity() {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updatePrice();
}

function decreaseQuantity() {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        updatePrice();
    }
}

function addToBasket() {
    const product = {
        id: "lillo-grey-vase",  // ID unik untuk produk ini
        name: document.querySelector(".product-title").textContent,
        category: document.querySelector(".product-category").textContent,
        price: parseInt(document.getElementById("product-price").getAttribute("data-price")),
        quantity: parseInt(document.getElementById("quantity").textContent),
        image: document.getElementById("productImage").src
    };

    // Ambil data cart yang sudah ada
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Cek apakah produk sudah ada di cart
    let existingProduct = basket.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += product.quantity; // Tambah jumlah jika sudah ada
    } else {
        basket.push(product); // Tambahkan produk baru
    }

    // Simpan kembali ke localStorage
    localStorage.setItem("basket", JSON.stringify(basket));

    alert("Produk berhasil ditambahkan ke keranjang!");
}