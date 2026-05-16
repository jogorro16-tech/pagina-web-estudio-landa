/* ─── MAIN — inicialización general ──────────────────────────────────────── */

(function () {

  /* Año actual en footer */
  const yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(el => { el.textContent = new Date().getFullYear(); });

  /* Formulario de contacto */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const original = btn.innerHTML;
      btn.innerHTML = 'Enviando <span>→</span>';
      btn.disabled = true;

      /* Aquí se conectará Netlify Forms o el servicio de email */
      setTimeout(() => {
        btn.innerHTML = 'Mensaje enviado ✓';
        form.reset();
        setTimeout(() => {
          btn.innerHTML = original;
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  /* Active state en la navegación según sección visible */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href')?.slice(1);
          link.style.opacity = href === id ? '1' : '0.6';
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));

})();
