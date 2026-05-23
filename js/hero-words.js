/* ─── HERO — frases deslizantes izq → centro → der ───────────────────────
   Flujo por frase:
     1. Aparece desde la izquierda (50% opacidad)
     2. Llega al centro (alineada con "landa") → opacidad 100%, pausa
     3. Sale hacia la derecha (50% opacidad)
     4. Siguiente frase
──────────────────────────────────────────────────────────────────────────── */

(function () {

  const words = [...document.querySelectorAll('.hero__word')];
  if (!words.length) return;

  /* ── Tiempos ─────────────────────────────────────────────────────────── */
  const ENTER_MS   = 750;   /* ms: deslizamiento de entrada        */
  const PAUSE_MS   = 2400;  /* ms: pausa en posición centrada      */
  const EXIT_MS    = 750;   /* ms: deslizamiento de salida         */
  const DIM_ALPHA  = 0.42;  /* opacidad mientras viaja             */
  const EASE_IN    = `cubic-bezier(0.22, 1, 0.36, 1)`;   /* desacelerada */
  const EASE_OUT   = `cubic-bezier(0.64, 0, 0.78, 0)`;   /* acelerada    */

  /* ── Inicializar todas las palabras fuera de la vista ───────────────── */
  words.forEach(w => {
    w.style.visibility = 'hidden';
    w.style.opacity    = '0';
    w.style.transform  = 'translateX(-120vw)';
  });

  let idx = 0;

  function runNext () {
    const word = words[idx];
    idx = (idx + 1) % words.length;

    /* — Posición inicial: fuera de pantalla a la izquierda, semitransparente */
    word.style.transition  = 'none';
    word.style.transform   = 'translateX(-120vw)';
    word.style.opacity     = String(DIM_ALPHA);
    word.style.visibility  = 'visible';

    /* — Pequeño retardo para que el navegador registre el estado inicial
         antes de iniciar la transición (equivalente al doble rAF) */
    setTimeout(() => {

        /* FASE 1 — Entrar: deslizar de izquierda a centro */
        word.style.transition = `transform ${ENTER_MS}ms ${EASE_IN}`;
        word.style.transform  = 'translateX(0)';

        setTimeout(() => {

          /* FASE 2 — Centro: opacidad plena, pausa */
          word.style.transition = 'opacity 0.22s ease';
          word.style.opacity    = '1';

          setTimeout(() => {

            /* FASE 3 — Salir: opacidad al 50%, deslizar a la derecha */
            word.style.transition = `transform ${EXIT_MS}ms ${EASE_OUT}, opacity 0.18s ease`;
            word.style.opacity    = String(DIM_ALPHA);
            word.style.transform  = 'translateX(120vw)';

            /* FASE 4 — Ocultar y pasar a la siguiente */
            setTimeout(() => {
              word.style.visibility = 'hidden';
              runNext();
            }, EXIT_MS + 40);

          }, PAUSE_MS);

        }, ENTER_MS);

    }, 32); /* ~2 frames a 60fps */
  }

  /* Esperar a que el hero haya hecho su fade-in antes de arrancar */
  setTimeout(runNext, 700);

})();
