// Simple button animation
const shop = document.getElementById('shop-btn');
btn.addEventListener('click', () => {
  alert('Redirecting to Shop Page...');
});
// script.js — safe version with debug messages

// --- Shop Now Button (safe check) ---
const btn = document.getElementById('shop-btn');
if (btn) {
  btn.addEventListener('click', () => {
    // Smooth-scroll down to products section — adjust value if needed
    window.scrollTo({ top: 700, behavior: 'smooth' });
  });
} else {
  console.error("script.js: '#shop-btn' not found. Make sure the button has id=\"shop-btn\" in index.html and that this script is loaded after the HTML (script tag at the end of body).");
}

// --- Popup Logic ---
const popup = document.getElementById('popup');
const popupName = document.getElementById('popup-name');
const popupPrice = document.getElementById('popup-price');
const closePopup = document.getElementById('close-popup');

if (!popup || !popupName || !popupPrice || !closePopup) {
  console.error('script.js: Popup elements missing. Check IDs: popup, popup-name, popup-price, close-popup');
} else {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      popup.style.display = 'flex';
      popupName.textContent = card.dataset.name || 'Product';
      popupPrice.textContent = card.dataset.price || '';
    });
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
  });
}
// === 3D Background Particles ===
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('particles').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 80;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00fff0';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}

drawParticles();

// Make particles react to mouse
document.addEventListener('mousemove', (e) => {
  particles.forEach(p => {
    const dist = Math.hypot(p.x - e.clientX, p.y - e.clientY);
    if (dist < 100) {
      p.x += (p.x - e.clientX) * 0.03;
      p.y += (p.y - e.clientY) * 0.03;
    }
  });
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// ===== PRODUCT SEARCH FILTER =====
const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product-card');

searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    if (title.includes(filter)) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  });
});
<script>
document.addEventListener("DOMContentLoaded", function() {
  window.showPage = function(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));

    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.error("❌ Page not found:", pageId);
    }
  }
});

</script>
