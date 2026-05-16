/* ─── ANIMACIONES GSAP ───────────────────────────────────────────────────── */

(function () {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* ── Cursor personalizado ────────────────────────────────────────────── */
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (cursor && follower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(cursor, { x: mouseX, y: mouseY });
    });

    /* Follower con lerp suave */
    gsap.ticker.add(() => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      gsap.set(follower, { x: followerX, y: followerY });
    });

    /* Hover en links y botones */
    const hoverEls = document.querySelectorAll('a, button, .project-card, .servicio-item, .filter-btn');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
        follower.classList.add('cursor-follower--hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
        follower.classList.remove('cursor-follower--hover');
      });
    });
  }

  /* ── Hero: entrada inicial ───────────────────────────────────────────── */
  const heroTl = gsap.timeline({ delay: 0.2 });

  /* Línea vertical del hero */
  const vLine = document.querySelector('.hero__v-line');
  if (vLine) {
    heroTl.to(vLine, { height: '100%', duration: 1.2, ease: 'power3.out' }, 0);
  }

  /* Eyebrow */
  const eyebrow = document.querySelector('.hero__eyebrow');
  if (eyebrow) {
    heroTl.fromTo(eyebrow,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.3
    );
  }

  /* Líneas del título — reveal con clipPath */
  const titleLines = document.querySelectorAll('.hero__title-line span');
  if (titleLines.length) {
    heroTl.to(titleLines, {
      y: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power4.out'
    }, 0.4);
  }

  /* Subtítulo */
  const subtitle = document.querySelector('.hero__subtitle');
  if (subtitle) {
    heroTl.fromTo(subtitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.85
    );
  }

  /* CTA hero */
  const heroCta = document.querySelector('.hero__cta');
  if (heroCta) {
    heroTl.fromTo(heroCta,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.0
    );
  }

  /* Imagen hero */
  const heroVisual = document.querySelector('.hero__visual');
  if (heroVisual) {
    heroTl.fromTo(heroVisual,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power4.inOut' }, 0.1
    );
  }

  /* Scroll indicator */
  const heroScroll = document.querySelector('.hero__scroll');
  if (heroScroll) {
    heroTl.fromTo(heroScroll,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }, 1.2
    );
  }

  /* ── ScrollTrigger: secciones al hacer scroll ─────────────────────────── */

  /* Función helper: reveal genérico */
  function revealOnScroll(selector, vars = {}) {
    const els = document.querySelectorAll(selector);
    els.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: vars.y ?? 40 },
        {
          opacity: 1, y: 0,
          duration: vars.duration ?? 0.9,
          ease: vars.ease ?? 'power3.out',
          delay: vars.delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: vars.start ?? 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /* Títulos de sección */
  revealOnScroll('.portfolio__title, .servicios__title, .nosotros__title', { y: 50, duration: 1 });

  /* Cards de portafolio */
  document.querySelectorAll('.project-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: (i % 3) * 0.12,
        scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
      }
    );
  });

  /* Items de servicios — slide desde la izquierda */
  document.querySelectorAll('.servicio-item').forEach((item, i) => {
    gsap.fromTo(item,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.08,
        scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' }
      }
    );
  });

  /* Cita de nosotros — palabra por palabra */
  const quoteText = document.querySelector('.nosotros__quote-text');
  if (quoteText) {
    const words = quoteText.innerHTML.split(' ');
    quoteText.innerHTML = words.map(w => `<span style="display:inline-block;overflow:hidden"><span style="display:inline-block">${w}</span></span>`).join(' ');

    const spans = quoteText.querySelectorAll('span > span');
    gsap.fromTo(spans,
      { y: '110%' },
      {
        y: '0%',
        duration: 0.7,
        stagger: 0.04,
        ease: 'power4.out',
        scrollTrigger: { trigger: quoteText, start: 'top 80%', toggleActions: 'play none none none' }
      }
    );
  }

  /* Grid de nosotros */
  revealOnScroll('.nosotros__content', { y: 40, duration: 0.9 });
  revealOnScroll('.nosotros__visual', { y: 40, duration: 0.9, delay: 0.15 });

  /* Contacto */
  revealOnScroll('.contacto__title', { y: 50, duration: 1 });
  revealOnScroll('.contacto__grid', { y: 40, duration: 0.9, delay: 0.1 });

  /* Parallax sutil en imágenes grandes */
  document.querySelectorAll('.hero__image img').forEach(img => {
    gsap.to(img, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: img.closest('.hero__visual'),
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  /* Número de proyecto hero */
  const heroIndex = document.querySelector('.hero__index');
  if (heroIndex) {
    gsap.fromTo(heroIndex,
      { opacity: 0, y: 20 },
      { opacity: 0.35, y: 0, duration: 0.8, delay: 1.3, ease: 'power3.out' }
    );
  }

})();
