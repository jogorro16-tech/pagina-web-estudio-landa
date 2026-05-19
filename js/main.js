/* ─── MAIN — inicialización general ──────────────────────────────────────── */

(function () {

  /* Indicador deslizante en barra de navegación del hero */
  const heroEyebrow = document.querySelector('.hero--plain .hero__eyebrow');
  const heroLinks   = heroEyebrow?.querySelectorAll('.hero__eyebrow-link');

  heroLinks?.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const er = heroEyebrow.getBoundingClientRect();
      const lr = link.getBoundingClientRect();
      const pct = ((lr.right - er.left) / er.width) * 100;
      heroEyebrow.style.setProperty('--indicator-w', pct + '%');
    });
  });

  heroEyebrow?.addEventListener('mouseleave', () => {
    heroEyebrow.style.setProperty('--indicator-w', '0%');
  });

  /* Pestañas de inspiraciones */
  const inspoTabs = document.querySelectorAll('.inspo-tab');
  inspoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      inspoTabs.forEach(t => { t.classList.remove('inspo-tab--active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('inspo-tab--active');
      tab.setAttribute('aria-selected','true');
      document.querySelectorAll('.inspo-panel').forEach(p => p.classList.remove('inspo-panel--active'));
      document.getElementById('tab-' + tab.dataset.tab)?.classList.add('inspo-panel--active');
    });
  });

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
