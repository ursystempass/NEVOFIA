document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const quantityDisplay = document.getElementById('quantity');

  let quantity = 1;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  window.increaseQuantity = function () {
    quantity++;
    quantityDisplay.textContent = quantity;
  };

  window.decreaseQuantity = function () {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  };

  window.addToBasket = function () {
  const productTitle = document.querySelector('.product-title').textContent;
  const priceElement = document.getElementById('product-price');
  const price = parseFloat(priceElement.dataset.price);
  const quantity = parseInt(document.getElementById('quantity').textContent);

  // Ambil keranjang dari localStorage atau buat baru
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Cek apakah produk sudah ada di cart
  const existingItemIndex = cart.findIndex(item => item.title === productTitle);

  if (existingItemIndex !== -1) {
    // Jika sudah ada, tambahkan quantity-nya
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Jika belum, tambahkan item baru
    cart.push({
      title: productTitle,
      price: price,
      quantity: quantity,
    });
  }

  // Simpan kembali ke localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`Berhasil menambahkan ${quantity} item "${productTitle}" ke keranjang.`);
  };
});

function changeImage(imageSrc) {
  // Ganti gambar utama saja
  const mainImage = document.getElementById("productImage");

  if (mainImage) {
    mainImage.src = imageSrc;
  }
}
