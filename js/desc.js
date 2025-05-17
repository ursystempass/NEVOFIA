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
    alert(`Berhasil menambahkan ${quantity} item ke keranjang.`);
    // Logika penyimpanan atau pengiriman ke backend bisa ditambahkan di sini
  };
});
