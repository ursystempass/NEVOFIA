document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Lip Serum Laneige", price: 64000, variations: ["chocolate", "peach", "Sugar"] },
        { name: "Dear Me Beauty", price: 56000, variations: ["rachel", "vania", "debby"] },
        { name: "Clay stick Glad2Glow", price: 43000, variations: ["pink", "hijau", "abu"] },
        { name: "Cream Blush Tavi", price: 66000, variations: ["love bites", "starburst"] },
        { name: "Serum Sunscreen Skintific", price: 79000, variations: ["matte", "aqua"] },
        { name: "Dazzle Me Loose Powder", price: 47000, variations: ["satu", "dua", "tiga"] }
    ];

    const productContainer = document.querySelector(".product-list");

    function updateTotal() {
        let totalQuantity = 0;
        let totalPrice = 0;

        document.querySelectorAll(".product").forEach((productElement, index) => {
            const quantityInput = productElement.querySelector("input[type='number']");
            const isChecked = productElement.querySelector("input[type='checkbox']").checked;
            if (isChecked) {
                let quantity = parseInt(quantityInput.value, 10);
                totalQuantity += quantity;
                totalPrice += quantity * products[index].price; // Koreksi: Hitung harga total berdasarkan index produk
            }
        });

        document.getElementById("totalQuantity").textContent = totalQuantity;
        document.getElementById("totalPrice").textContent = `Rp${totalPrice.toLocaleString()}`;
    }

    products.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", updateTotal);

        const img = document.createElement("img");
        img.src = "https://via.placeholder.com/100";
        img.alt = product.name;

        const details = document.createElement("div");
        details.classList.add("details");

        const name = document.createElement("div");
        name.classList.add("name");
        name.textContent = product.name;

        const priceContainer = document.createElement("div");
        priceContainer.classList.add("price-container");

        const originalPrice = document.createElement("span");
        originalPrice.classList.add("original-price");
        originalPrice.textContent = `Rp${product.price.toLocaleString()}`;

        priceContainer.appendChild(originalPrice);

        const variationSelect = document.createElement("select");
        variationSelect.classList.add("variation-select");

        product.variations.forEach(variation => {
            const option = document.createElement("option");
            option.value = variation;
            option.textContent = variation;
            variationSelect.appendChild(option);
        });

        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantity-container");

        const minusButton = document.createElement("button");
        minusButton.textContent = "-";

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = 1;
        quantityInput.min = 1;
        quantityInput.setAttribute("step", "1");

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";

        minusButton.onclick = () => {
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value, 10) - 1;
                updateTotal();
            }
        };

        plusButton.onclick = () => {
            quantityInput.value = parseInt(quantityInput.value, 10) + 1;
            updateTotal();
        };

        quantityContainer.appendChild(minusButton);
        quantityContainer.appendChild(quantityInput);
        quantityContainer.appendChild(plusButton);

        details.appendChild(name);
        details.appendChild(priceContainer);
        details.appendChild(variationSelect);
        details.appendChild(quantityContainer);

        productElement.appendChild(checkbox);
        productElement.appendChild(img);
        productElement.appendChild(details);

        productContainer.appendChild(productElement);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    loadBasket();
});

function loadBasket() {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    let basketContainer = document.getElementById("basket-container");
    let totalPriceElement = document.getElementById("total-price");

    if (basket.length === 0) {
        basketContainer.innerHTML = "<p>Keranjang kosong.</p>";
        totalPriceElement.textContent = "Rp0";
        return;
    }

    let total = 0;
    let basketHTML = "";

    basket.forEach((item, index) => {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        basketHTML += `
            <div class="basket-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <p class="item-name">${item.name}</p>
                    <p class="item-category">${item.category}</p>
                    <p class="item-price">Rp${subtotal.toLocaleString("id-ID")}</p>
                    <p class="item-quantity">Jumlah: ${item.quantity}</p>
                </div>
                <button class="remove-btn" onclick="removeFromBasket(${index})">Hapus</button>
            </div>
        `;
    });

    basketContainer.innerHTML = basketHTML;
    totalPriceElement.textContent = `Rp${total.toLocaleString("id-ID")}`;
}

function removeFromBasket(index) {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.splice(index, 1); // Hapus item berdasarkan index
    localStorage.setItem("basket", JSON.stringify(basket));
    loadBasket(); // Refresh tampilan keranjang
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Customer Review Slider
    let index = 0;
    function slideReviews() {
        const slider = document.querySelector(".review-slider");
        index = (index + 1) % 3;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(slideReviews, 3000);
});