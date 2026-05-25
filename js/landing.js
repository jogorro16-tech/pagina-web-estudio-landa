/* ─── LANDING — scatter intro · imagen featured · thumbs · frases ────────── */

(function () {

  /* ── Datos de proyectos ─────────────────────────────────────────────────── */
  const proyectos = [
    { nombre: 'Casa Huertas del Carmen', año: '2018',
      img: 'assets/images/proyectos/casa-huertas-del-carmen/hero.jpg',
      bg: 'linear-gradient(140deg,#CACAC6,#A2A4A0)' },
    { nombre: 'Casa Aragón',             año: '2025',
      img: 'assets/images/proyectos/casa-aragon/hero.jpeg',
      bg: 'linear-gradient(140deg,#C8C4BC,#9E9890)' },
    { nombre: 'Departamento Sophia',     año: '2025',
      img: 'assets/images/proyectos/departamento-sophia/hero.jpg',
      bg: 'linear-gradient(140deg,#B8C4C2,#8AA0A0)' },
    { nombre: 'Oficinas GGI',            año: '2023',
      img: 'assets/images/proyectos/oficinas-ggi/hero.jpg',
      bg: 'linear-gradient(140deg,#C4C0B8,#9C9890)' },
    { nombre: 'Casa Laja 18',            año: '2022',
      img: 'assets/images/proyectos/casa-laja-18/hero.jpg',
      bg: 'linear-gradient(140deg,#C0C4C4,#96A0A4)' },
    { nombre: 'Casa Tacana A',           año: '2019',
      img: 'assets/images/proyectos/casa-tacana-a/hero.png',
      bg: 'linear-gradient(140deg,#C8C6C0,#A09E98)' },
    { nombre: 'Casa Olivo',              año: '2026', img: null,
      bg: 'linear-gradient(140deg,#C6CAC4,#96A094)' },
    { nombre: 'Bohäi Reserva',           año: '2026', img: null,
      bg: 'linear-gradient(140deg,#C2C8CC,#8EA4AC)' },
    { nombre: 'Campus Vía Diseño',       año: '2020–2026', img: null,
      bg: 'linear-gradient(140deg,#BEC8C0,#8AA098)' },
    { nombre: 'Casa Ikaya',              año: '2025', img: null,
      bg: 'linear-gradient(140deg,#BECABD,#8EA890)' },
    { nombre: 'Dpto. Zonté',             año: '2026', img: null,
      bg: 'linear-gradient(140deg,#C8C8C4,#9CA0A0)' },
    { nombre: 'Fraccto. Bohäi Pedregal', año: '2025', img: null,
      bg: 'linear-gradient(140deg,#C0C8C4,#90A09C)' },
  ];

  /* ── Elementos del DOM ──────────────────────────────────────────────────── */
  const introEl   = document.getElementById('intro');
  const landingEl = document.getElementById('landing');
  const frameEl   = document.getElementById('l-featured-frame');
  const labelEl   = document.getElementById('l-featured-label');
  const thumbsEl  = document.getElementById('l-thumbs');

  if (!introEl || !landingEl) return;

  /* ══════════════════════════════════════════════════════════════════════════
     1. SCATTER INTRO
  ══════════════════════════════════════════════════════════════════════════ */

  const VW = window.innerWidth;
  const VH = window.innerHeight;

  /* Tamaño de cada miniatura scatter: varía para dar profundidad */
  function randSize () {
    const sizes = [80, 96, 108, 120, 88, 100];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  /* Crear elementos scatter */
  const items = proyectos.map((p) => {
    const size = randSize();
    const el   = document.createElement('div');
    el.className = 's-item';
    el.style.width  = size + 'px';
    el.style.height = size + 'px';

    /* Posición aleatoria, con margen de los bordes */
    const margin = 30;
    const x = margin + Math.random() * (VW - size - margin * 2);
    const y = margin + Math.random() * (VH - size - margin * 2);
    const rot = (Math.random() - 0.5) * 22;

    el.style.left      = x + 'px';
    el.style.top       = y + 'px';
    el.style.transform = `rotate(${rot}deg)`;
    el.style.opacity   = '0';

    /* Contenido */
    if (p.img) {
      const img = document.createElement('img');
      img.src = p.img;
      img.alt = p.nombre;
      el.appendChild(img);
    } else {
      const bg = document.createElement('div');
      bg.className = 's-item__bg';
      bg.style.background = p.bg;
      el.appendChild(bg);
    }

    introEl.appendChild(el);
    return { el, size };
  });

  /* Aparición escalonada */
  items.forEach(({ el }, i) => {
    setTimeout(() => {
      el.style.transition = 'opacity 0.35s ease';
      el.style.opacity    = '1';
    }, i * 70);
  });

  /* ── Convergencia al centro ─────────────────────────────────────────────── */
  const APPEAR_END  = items.length * 70 + 500;   /* cuando todos son visibles */
  const CONV_DUR    = 680;

  setTimeout(() => {
    items.forEach(({ el, size }, i) => {
      const cx = VW / 2 - size / 2;
      const cy = VH / 2 - size / 2;
      const delay = i * 28;

      /* Transicionar posición + escala + opacidad */
      el.style.transition =
        `left   ${CONV_DUR}ms cubic-bezier(0.55,0,1,0.45) ${delay}ms,` +
        `top    ${CONV_DUR}ms cubic-bezier(0.55,0,1,0.45) ${delay}ms,` +
        `transform ${CONV_DUR}ms cubic-bezier(0.55,0,1,0.45) ${delay}ms,` +
        `opacity ${Math.round(CONV_DUR * 0.55)}ms ease ${delay + Math.round(CONV_DUR * 0.45)}ms`;

      el.style.left      = cx + 'px';
      el.style.top       = cy + 'px';
      el.style.transform = 'rotate(0deg) scale(0.05)';
      el.style.opacity   = '0';
    });

    /* Cuando la convergencia termina: mostrar landing */
    const lastDelay = (items.length - 1) * 28;
    setTimeout(() => {

      introEl.classList.add('intro--done');
      landingEl.classList.add('landing--visible');

      /* Proyecto 0 como featured */
      showFeatured(0);

      /* Construir thumbs */
      buildThumbs();

      /* Arrancar frases */
      startPhrases();

    }, CONV_DUR + lastDelay + 80);

  }, APPEAR_END);


  /* ══════════════════════════════════════════════════════════════════════════
     2. IMAGEN DESTACADA
  ══════════════════════════════════════════════════════════════════════════ */

  let activeIdx = -1;

  function showFeatured (idx) {
    if (idx === activeIdx) return;
    activeIdx = idx;
    const p = proyectos[idx];

    /* Ocultar con scale antes de cambiar contenido */
    frameEl.classList.remove('is-visible');

    setTimeout(() => {
      frameEl.innerHTML = '';

      if (p.img) {
        const img = document.createElement('img');
        img.src = p.img;
        img.alt = p.nombre;
        frameEl.appendChild(img);
      } else {
        const bg = document.createElement('div');
        bg.className = 'l-featured__bg';
        bg.style.background = p.bg;
        frameEl.appendChild(bg);
      }

      labelEl.textContent = p.nombre + ' · ' + p.año;

      /* Animar entrada */
      setTimeout(() => frameEl.classList.add('is-visible'), 30);

    }, activeIdx === -1 ? 0 : 280); /* sin espera en la primera carga */

    /* Actualizar thumb activo */
    document.querySelectorAll('.l-thumb').forEach((t, i) => {
      t.classList.toggle('l-thumb--active', i === idx);
    });
  }


  /* ══════════════════════════════════════════════════════════════════════════
     3. TIRA DE MINIATURAS
  ══════════════════════════════════════════════════════════════════════════ */

  function buildThumbs () {
    proyectos.forEach((p, i) => {
      const btn = document.createElement('button');
      btn.className = 'l-thumb' + (i === 0 ? ' l-thumb--active' : '');
      btn.setAttribute('role', 'listitem');
      btn.setAttribute('aria-label', p.nombre + ', ' + p.año);
      btn.title = p.nombre + ' · ' + p.año;

      if (p.img) {
        const img = document.createElement('img');
        img.src = p.img;
        img.alt = '';
        btn.appendChild(img);
      } else {
        const bg = document.createElement('div');
        bg.className = 'l-thumb__bg';
        bg.style.background = p.bg;
        btn.appendChild(bg);
      }

      btn.addEventListener('click', () => showFeatured(i));
      thumbsEl.appendChild(btn);
    });
  }


  /* ══════════════════════════════════════════════════════════════════════════
     4. FRASES ROTANTES
  ══════════════════════════════════════════════════════════════════════════ */

  function startPhrases () {
    const phrases = [...document.querySelectorAll('.l-phrase')];
    if (!phrases.length) return;

    const ENTER_MS = 720;
    const PAUSE_MS = 2300;
    const EXIT_MS  = 720;
    const DIM      = 0.42;
    const EI       = 'cubic-bezier(0.22,1,0.36,1)';
    const EO       = 'cubic-bezier(0.64,0,0.78,0)';

    let idx = 0;

    function next () {
      const ph = phrases[idx];
      idx = (idx + 1) % phrases.length;

      ph.style.transition  = 'none';
      ph.style.transform   = 'translateX(-115vw)';
      ph.style.opacity     = String(DIM);
      ph.style.visibility  = 'visible';

      /* Pequeño retardo para que el browser registre el estado inicial */
      setTimeout(() => {
        ph.style.transition = `transform ${ENTER_MS}ms ${EI}`;
        ph.style.transform  = 'translateX(0)';

        setTimeout(() => {
          ph.style.transition = 'opacity 0.2s ease';
          ph.style.opacity    = '1';

          setTimeout(() => {
            ph.style.transition = `transform ${EXIT_MS}ms ${EO}, opacity 0.18s ease`;
            ph.style.opacity    = String(DIM);
            ph.style.transform  = 'translateX(115vw)';

            setTimeout(() => {
              ph.style.visibility = 'hidden';
              next();
            }, EXIT_MS + 40);

          }, PAUSE_MS);
        }, ENTER_MS);
      }, 32);
    }

    next();
  }

})();
