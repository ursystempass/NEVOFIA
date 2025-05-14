 document.addEventListener("DOMContentLoaded", function () {
     const products = document.querySelectorAll(".product");
     const totalPriceElement = document.getElementById("total-price");
     const checkoutButton = document.getElementById("checkout-button");
     const selectAllCheckbox = document.getElementById("select-all");

     function updateTotal() {
         let total = 0;
         let totalItems = 0;
         let cart = [];

         products.forEach(product => {
             const checkbox = product.querySelector("input[type='checkbox']");
             const quantityInput = product.querySelector("input[type='number']");
             const priceText = product.querySelector(".price").textContent.replace("Rp", "").replace(/\./g, "");
             const price = parseInt(priceText);
             const name = product.querySelector(".name").textContent;
             const image = product.querySelector("img").src;
             const variation = product.querySelector(".variation-select").value;

             if (checkbox.checked) {
                 let quantity = parseInt(quantityInput.value);
                 total += price * quantity;
                 totalItems += quantity;
                 cart.push({
                     name,
                     price,
                     quantity,
                     variation,
                     image
                 });
             }
         });

         totalPriceElement.textContent = `Rp${total.toLocaleString()}`;
         checkoutButton.textContent = `Checkout (${totalItems})`;
         checkoutButton.disabled = totalItems === 0;
         localStorage.setItem("cart", JSON.stringify(cart));
     }

     function changeQuantity(input, amount) {
         let newValue = Math.max(1, parseInt(input.value) + amount);
         input.value = newValue;
         updateTotal();
     }

     products.forEach(product => {
         const checkbox = product.querySelector("input[type='checkbox']");
         const minusButton = product.querySelector(".minus");
         const quantityInput = product.querySelector("input[type='number']");
         const plusButton = product.querySelector(".plus");

         checkbox.addEventListener("change", updateTotal);
         minusButton.addEventListener("click", () => changeQuantity(quantityInput, -1));
         plusButton.addEventListener("click", () => changeQuantity(quantityInput, 1));
         quantityInput.addEventListener("input", updateTotal);
     });

     selectAllCheckbox.addEventListener("change", function () {
         const isChecked = this.checked;
         products.forEach(product => {
             product.querySelector("input[type='checkbox']").checked = isChecked;
         });
         updateTotal();
     });

     function loadCartFromStorage() {
         let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
         products.forEach(product => {
             const name = product.querySelector(".name").textContent;
             let cartItem = savedCart.find(item => item.name === name);
             if (cartItem) {
                 product.querySelector("input[type='number']").value = cartItem.quantity;
                 product.querySelector(".variation-select").value = cartItem.variation;
                 product.querySelector("input[type='checkbox']").checked = true;
             }
         });
         updateTotal();
     }

     checkoutButton.addEventListener("click", function () {
         window.location.href = "/html/checkout.html";
     });
     loadCartFromStorage();
 });

 document.addEventListener('DOMContentLoaded', () => {
     const hamburger = document.getElementById('hamburger');
     const navLinks = document.getElementById('navLinks');

     hamburger.addEventListener('click', () => {
         navLinks.classList.toggle('active');
     });
 });