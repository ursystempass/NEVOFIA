document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");

    const products = [
        { price: "Rp 30.000", name: "Loose Powder" },
        { price: "Rp 30.000", name: "Loose Powder" },
        { price: "Rp 30.000", name: "Loose Powder" },
        { price: "Rp 30.000", name: "Loose Powder" },
        { price: "Rp 30.000", name: "Loose Powder" },
        { price: "Rp 30.000", name: "Loose Powder" }
    ];

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <div class="product-image" style="width:100px; height:100px; background:#C4A4B8; border-radius:10px;"></div>
            <p>${product.price}</p>
            <p>${product.name}</p>
        `;
        productGrid.appendChild(productCard);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Loose Powder", price: "Rp 42.000", image: "/project-folder/image/apple.jpeg" },
        { name: "Compact Powder", price: "Rp 30.000", image: "/project-folder/image/apple.jpeg" },
        { name: "Foundation", price: "Rp 50.000", image: "/project-folder/image/apple.jpeg" }
    ];

    const container = document.getElementById("products-container");
    container.classList.add("products-container");

    products.forEach(product => {
        const productBox = document.createElement("div");
        productBox.classList.add("product-box");

        productBox.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}</p>
        `;

        container.appendChild(productBox);
    });
});
