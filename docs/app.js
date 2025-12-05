// Mobile menu toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('#navMenu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scroll (se quiser usar em links internos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href').substring(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu?.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
});
