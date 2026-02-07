// recommended.js
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("recommended-slider");
  // Get current product ID to exclude it from recommendation
  const urlParams = new URLSearchParams(window.location.search);
  const currentId = urlParams.get("id");

  if (!slider || typeof PRODUCTS === 'undefined') return;

  Object.entries(PRODUCTS).forEach(([id, p]) => {
    if (id === currentId) return; // skip current product
    
    const a = document.createElement("a");
    a.className = "rec-card";
    a.href = `product-detail.html?id=${id}`;
    a.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <p>${p.name}</p>
      <span>${p.price}</span>
    `;
    slider.appendChild(a);
  });
});