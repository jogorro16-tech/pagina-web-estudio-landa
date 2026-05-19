/* ─── PARALLAX — desplazamiento suave en imágenes clave ──────────────────── */

(function () {

  const imgs = document.querySelectorAll('.parallax-img');
  if (!imgs.length) return;

  /* Reduce motion: respeta preferencia del usuario */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* No aplicar en móvil — impacto menor y perf menor */
  if (window.innerWidth < 768) return;

  const SPEED = 0.28; /* 0 = sin efecto, 0.5 = muy pronunciado */

  function update () {
    imgs.forEach(img => {
      const wrap = img.parentElement;
      const rect = wrap.getBoundingClientRect();

      /* Solo calcular si el elemento está cerca del viewport */
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;

      const center   = rect.top + rect.height / 2;
      const relative = center - window.innerHeight / 2;
      const offset   = relative * SPEED;

      img.style.transform = `translateY(${offset}px) scale(1.06)`;
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

})();
