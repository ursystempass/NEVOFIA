document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".category-btn");
    const productCards = document.querySelectorAll(".product-card");
  
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
  
        productCards.forEach(card => {
          const category = card.getAttribute("data-category");
  
          if (filter === "all" || category === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
  