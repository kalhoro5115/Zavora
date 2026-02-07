// animation.js
document.addEventListener("DOMContentLoaded", function() {
  // Simple animation for contact page elements
  const animElements = document.querySelectorAll('.anim-text');
  
  animElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200 + (index * 100));
  });
});