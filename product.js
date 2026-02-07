// product.js

// 1. MASTER PRODUCT DATA (Object Structure)
const PRODUCTS = {
  cs: { name: "Classic Solitaire", price: "PKR 45,000", off: "20% off", img: "cs.png", desc: "Elegant solitaire ring crafted for timeless beauty." },
  c:  { name: "Round Pendant", price: "PKR 28,000", off: "15% off", img: "c.png", desc: "Minimal pendant that brings subtle shine to your look." },
  gr: { name: "Wedding Bands", price: "PKR 62,000", off: "10% off", img: "gr.png", desc: "Symbol of commitment crafted with perfection." },
  se: { name: "Stud Earrings", price: "PKR 12,500", off: "25% off", img: "se.png", desc: "Sparkling studs designed for everyday elegance." },
  gh: { name: "Golden Halo Ring", price: "PKR 38,000", off: "10% off", img: "gh.png", desc: "Radiant halo design that enhances every moment." },
  cd: { name: "Crystal Drop Earrings", price: "PKR 26,500", off: "15% off", img: "cd.png", desc: "Graceful drop earrings that shimmer with every move." },
  db: { name: "Diamond Band", price: "PKR 59,000", off: "20% off", img: "db.png", desc: "Classic band with a bold diamond presence." },
  rp: { name: "Royal Pendant", price: "PKR 44,500", off: "25% off", img: "rp.png", desc: "Luxurious pendant with a royal aesthetic." },
  rhn:{ name: "Ruby Heart Necklace", price: "PKR 62,000", off: "10% off", img: "rhn.png", desc: "Heart shaped ruby necklace crafted with precision." },
  bs: { name: "Bridal Set", price: "PKR 85,000", off: "18% off", img: "bs.png", desc: "Perfect bridal set for the perfect day." },
  ee: { name: "Emerald Earrings", price: "PKR 28,000", off: "22% off", img: "ee.png", desc: "Emerald green earrings for a statement look." },
  cdr:{ name: "Classic Diamond Ring", price: "PKR 48,000", off: "12% off", img: "cdr.png", desc: "Diamond ring that showcases pure brilliance." }
};

// 2. LOGIC FOR PRODUCT DETAIL PAGE
document.addEventListener("DOMContentLoaded", () => {
  // Check if we are on the details page by looking for the 'product-details' ID
  const detailsSection = document.getElementById("product-details");
  
  if (detailsSection) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId || !PRODUCTS[productId]) {
      detailsSection.innerHTML = "<h2>Product not found</h2>";
      return;
    }

    const p = PRODUCTS[productId];
    
    // Fill data safely
    const imgEl = document.getElementById("p-image");
    const nameEl = document.getElementById("p-name");
    const priceEl = document.getElementById("p-price");
    const descEl = document.getElementById("p-desc");

    if (imgEl) { imgEl.src = p.img; imgEl.alt = p.name; }
    if (nameEl) nameEl.textContent = p.name;
    if (priceEl) priceEl.textContent = `${p.price} · ${p.off}`;
    if (descEl) descEl.textContent = p.desc;
  }
});

// 3. CART & BUY FUNCTIONS (Global)
function addToCart() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId) return alert("No product selected");
  
  let cart = JSON.parse(localStorage.getItem("cart_v1")) || [];
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ id: productId, qty: 1 });
  
  localStorage.setItem("cart_v1", JSON.stringify(cart));
  alert("Added to cart successfully!");
}

function buyNow() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId || !PRODUCTS[productId]) return alert("No product selected");
  
  const p = PRODUCTS[productId];
  const phone = "923000000000"; // Replace with your number
  const text = `Hello Zavora, I want to buy: ${p.name} (Price: ${p.price}). Please assist me.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}