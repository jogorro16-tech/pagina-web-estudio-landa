/* ─── HERO — rotación de palabras "LANDA es…" ───────────────────────────── */

(function () {

  const words = document.querySelectorAll('.hero__word');
  if (!words.length) return;

  const DISPLAY    = 3500;  /* ms que cada palabra permanece visible */
  const EXIT_DUR   = 650;   /* ms de la animación de salida */
  const ENTER_LAG  = 200;   /* ms de retardo antes de mostrar la siguiente */

  let idx = 0;
  words[0].classList.add('hero__word--visible');

  function advance () {
    const leaving  = words[idx];
    idx = (idx + 1) % words.length;
    const arriving = words[idx];

    /* Salida: quitar visible → añadir exit */
    leaving.classList.remove('hero__word--visible');
    leaving.classList.add('hero__word--exit');
    setTimeout(() => leaving.classList.remove('hero__word--exit'), EXIT_DUR + 100);

    /* Entrada: añadir visible con pequeño retardo */
    setTimeout(() => arriving.classList.add('hero__word--visible'), ENTER_LAG);
  }

  setInterval(advance, DISPLAY);

})();
