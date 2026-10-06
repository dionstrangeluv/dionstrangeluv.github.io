// ===== Smooth scroll para enlaces internos =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Efecto de "hover" en las cajas =====
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-2px)';
    box.style.transition = 'transform 0.2s ease';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
  });
});

// ===== Contador de visitas (solo visual, no real) =====
// Genera un número aleatorio entre 1000 y 9999 cada vez que se carga
const counter = document.querySelector('.visitor-counter');
if (counter) {
  const randomNum = Math.floor(Math.random() * 9000) + 1000;
  counter.textContent = String(randomNum).split('').join(' ');
}

console.log('♡ Site loaded — welcome! ♡');
