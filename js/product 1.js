document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("product-grid");

    const products = Array(12).fill({
        price: "Rp 30.000",
        name: "Loose Powder"
    });

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <div class="product-image" style="height: 150px; background: #C8A2B0; border-radius: 10px;"></div>
            <p class="product-price">${product.price}</p>
            <p>${product.name}</p>
            <div class="product-shadow" style="height: 10px; background: #FFE6D9; border-radius: 5px; margin-top: 10px;"></div>
        `;

        productGrid.appendChild(productCard);
    });
});
