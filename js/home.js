document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero");
    let heroImages = [];
    let heroIndex = 0;

    // ** Ambil data dari JSON **
    fetch("/project-folder/data/hero.json")
        .then(response => response.json())
        .then(data => {
            heroImages = data.heroImages;
            updateHeroImage(); // Tampilkan gambar pertama
            setInterval(updateHeroImage, 3000); // Slideshow otomatis tiap 3 detik
        })
        .catch(error => console.error("Error mengambil hero images:", error));

    function updateHeroImage() {
        if (heroImages.length > 0) {
            heroSection.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
            heroIndex = (heroIndex + 1) % heroImages.length;
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // ** Ambil elemen penting **
    const gallery = document.querySelector(".gallery");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const featuredProducts = document.querySelector(".featured-products");
    const categoryButtons = document.querySelectorAll(".categories button");
    const searchInput = document.querySelector(".search-bar input");

    // ** Fetch data dari JSON **
    fetch("/project-folder/image/images.json")
        .then(response => response.json())
        .then(data => {
            // ** Buat galeri otomatis **
            data.images.forEach((imgName, index) => {
                const galleryItem = document.createElement("div");
                galleryItem.classList.add("gallery-item");

                const img = document.createElement("img");
                img.src = `/project-folder/image/${imgName}`;
                img.alt = `Image ${index + 1}`;

                const text = document.createElement("p");
                text.classList.add("gallery-text");
                text.textContent = `Gambar ${index + 1}`;

                galleryItem.appendChild(img);
                galleryItem.appendChild(text);
                gallery.appendChild(galleryItem);
            });

            // ** Buat produk unggulan otomatis **
            data.products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    <img src="/project-folder/image/${product.img}" alt="${product.name}" />
                    <p class="product-name">${product.name}</p>
                    <p class="price">${product.price}</p>
                `;

                featuredProducts.appendChild(productCard);
            });

            // ** Aktifkan pencarian produk **
            searchInput.addEventListener("input", function () {
                const searchValue = this.value.toLowerCase();
                const productCards = document.querySelectorAll(".product-card");

                productCards.forEach(card => {
                    const productName = card.querySelector(".product-name").textContent.toLowerCase();
                    if (productName.includes(searchValue)) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        })
        .catch(error => console.error("Error loading JSON:", error));

    // ** Fungsi Scroll Manual untuk Galeri **
    const scrollAmount = 620;

    nextBtn.addEventListener("click", () => {
        gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
        stopAutoScroll();
    });

    prevBtn.addEventListener("click", () => {
        gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        stopAutoScroll();
    });

    // ** Auto Scroll tiap 3 detik **
    function autoScroll() {
        if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
            gallery.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }

    let autoScrollInterval = setInterval(autoScroll, 3000);

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(autoScroll, 3000);
    }

    // ** Alert saat kategori diklik **
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert(`Anda memilih kategori: ${this.textContent}`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });