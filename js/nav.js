/* ─── NAV ────────────────────────────────────────────────────────────────── */

(function () {
  const nav     = document.getElementById('nav');
  const menuBtn = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  let lastScroll = 0;
  let isMenuOpen = false;

  /* Pills amarillas — opacidad desaparece en los primeros 400px de scroll */
  const navLinks = document.querySelectorAll('.nav__link');
  function updatePillOpacity (scrollY) {
    const opacity = Math.max(0, 0.72 * (1 - scrollY / 400));
    navLinks.forEach(link => {
      link.style.backgroundColor = `rgba(240, 210, 50, ${opacity.toFixed(3)})`;
    });
  }
  updatePillOpacity(0);

  /* Scroll: ocultar nav al bajar, mostrar al subir */
  window.addEventListener('scroll', () => {
    const current = window.scrollY;

    updatePillOpacity(current);

    if (current > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    if (current > lastScroll && current > 200) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }

    lastScroll = current;
  }, { passive: true });

  nav.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.55s, box-shadow 0.55s';

  /* Menú mobile */
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      mobileNav.classList.toggle('nav__mobile--open', isMenuOpen);
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';

      const spans = menuBtn.querySelectorAll('span');
      if (isMenuOpen) {
        spans[0].style.transform = 'translateY(7.5px) rotate(45deg)';
        spans[1].style.transform = 'translateY(-7.5px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.transform = '';
      }
    });

    /* Cerrar al hacer clic en un link */
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileNav.classList.remove('nav__mobile--open');
        document.body.style.overflow = '';
        menuBtn.querySelectorAll('span').forEach(s => s.style.transform = '');
      });
    });
  }

  /* Smooth scroll a secciones */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();
