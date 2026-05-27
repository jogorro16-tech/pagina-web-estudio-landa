/* ─── LANDING — scatter intro · imagen featured · thumbs · frases ────────── */

(function () {

  /* ── Datos de proyectos ─────────────────────────────────────────────────── */
  const proyectos = [
    { nombre: 'Casa Huertas del Carmen', año: '2018',
      img: 'assets/images/proyectos/casa-huertas-del-carmen/hero.jpg',
      imgs: ['assets/images/proyectos/casa-huertas-del-carmen/1.jpg',
             'assets/images/proyectos/casa-huertas-del-carmen/2.jpg',
             'assets/images/proyectos/casa-huertas-del-carmen/3.jpg',
             'assets/images/proyectos/casa-huertas-del-carmen/4.jpg',
             'assets/images/proyectos/casa-huertas-del-carmen/5.jpg'],
      bg: 'linear-gradient(140deg,#CACAC6,#A2A4A0)' },
    { nombre: 'Casa Aragón',             año: '2025',
      img: 'assets/images/proyectos/casa-aragon/hero.jpeg',
      imgs: ['assets/images/proyectos/casa-aragon/1.jpeg',
             'assets/images/proyectos/casa-aragon/2.jpeg',
             'assets/images/proyectos/casa-aragon/3.jpeg'],
      bg: 'linear-gradient(140deg,#C8C4BC,#9E9890)' },
    { nombre: 'Departamento Sophia',     año: '2025',
      img: 'assets/images/proyectos/departamento-sophia/hero.jpg',
      imgs: [],
      bg: 'linear-gradient(140deg,#B8C4C2,#8AA0A0)' },
    { nombre: 'Oficinas GGI',            año: '2023',
      img: 'assets/images/proyectos/oficinas-ggi/hero.jpg',
      imgs: ['assets/images/proyectos/oficinas-ggi/1.jpg',
             'assets/images/proyectos/oficinas-ggi/2.jpg',
             'assets/images/proyectos/oficinas-ggi/3.jpg',
             'assets/images/proyectos/oficinas-ggi/4.jpg'],
      bg: 'linear-gradient(140deg,#C4C0B8,#9C9890)' },
    { nombre: 'Casa Laja 18',            año: '2022',
      img: 'assets/images/proyectos/casa-laja-18/hero.jpg',
      imgs: ['assets/images/proyectos/casa-laja-18/1.jpg',
             'assets/images/proyectos/casa-laja-18/2.jpg',
             'assets/images/proyectos/casa-laja-18/3.jpg'],
      bg: 'linear-gradient(140deg,#C0C4C4,#96A0A4)' },
    { nombre: 'Casa Tacana A',           año: '2019',
      img: 'assets/images/proyectos/casa-tacana-a/hero.png',
      imgs: ['assets/images/proyectos/casa-tacana-a/1.png',
             'assets/images/proyectos/casa-tacana-a/2.jpg',
             'assets/images/proyectos/casa-tacana-a/3.png',
             'assets/images/proyectos/casa-tacana-a/4.png',
             'assets/images/proyectos/casa-tacana-a/5.png',
             'assets/images/proyectos/casa-tacana-a/6.jpg',
             'assets/images/proyectos/casa-tacana-a/7.png'],
      bg: 'linear-gradient(140deg,#C8C6C0,#A09E98)' },
    { nombre: 'Casa Olivo',              año: '2026', img: null, imgs: [],
      bg: 'linear-gradient(140deg,#C6CAC4,#96A094)' },
    { nombre: 'Bohäi Reserva',           año: '2026', img: null, imgs: [],
      bg: 'linear-gradient(140deg,#C2C8CC,#8EA4AC)' },
    { nombre: 'Campus Vía Diseño',       año: '2020–2026', img: null, imgs: [],
      bg: 'linear-gradient(140deg,#BEC8C0,#8AA098)' },
    { nombre: 'Casa Ikaya',              año: '2025', img: null, imgs: [],
      bg: 'linear-gradient(140deg,#BECABD,#8EA890)' },
    { nombre: 'Dpto. Zonté',             año: '2026', img: null, imgs: [],
      bg: 'linear-gradient(140deg,#C8C8C4,#9CA0A0)' },
    { nombre: 'Fraccto. Bohäi Pedregal', año: '2025', img: null, imgs: [],
      bg: 'linear-gradient(140deg,#C0C8C4,#90A09C)' },
  ];

  /* ── Elementos del DOM ──────────────────────────────────────────────────── */
  const introEl     = document.getElementById('intro');
  const landingEl   = document.getElementById('landing');
  const frameEl     = document.getElementById('l-featured-frame');
  const labelEl     = document.getElementById('l-featured-label');
  const indicatorEl = document.getElementById('l-featured-indicator');
  const thumbsEl    = document.getElementById('l-thumbs');

  if (!introEl || !landingEl) return;

  /* ── Indicador de segmentos ─────────────────────────────────────────────── */

  function buildIndicator (count) {
    indicatorEl.innerHTML = '';
    /* Si hay 1 sola imagen no hace falta indicador */
    indicatorEl.style.display = count > 1 ? 'flex' : 'none';
    for (let i = 0; i < count; i++) {
      const seg = document.createElement('span');
      seg.className = 'l-indicator__seg' + (i === 0 ? ' l-indicator__seg--active' : '');
      indicatorEl.appendChild(seg);
    }
  }

  function setIndicatorActive (idx) {
    indicatorEl.querySelectorAll('.l-indicator__seg').forEach((s, i) => {
      s.classList.toggle('l-indicator__seg--active', i === idx);
    });
  }

  /* Actualiza el segmento activo mientras el usuario scrollea */
  frameEl.addEventListener('scroll', () => {
    const segs = indicatorEl.querySelectorAll('.l-indicator__seg');
    if (!segs.length) return;
    const children = Array.from(frameEl.children);
    const frameMid = frameEl.scrollLeft + frameEl.clientWidth / 2;
    let bestIdx = 0, bestDist = Infinity;
    children.forEach((el, i) => {
      const dist = Math.abs((el.offsetLeft + el.offsetWidth / 2) - frameMid);
      if (dist < bestDist) { bestDist = dist; bestIdx = i; }
    });
    setIndicatorActive(bestIdx);
  }, { passive: true });

  /* ══════════════════════════════════════════════════════════════════════════
     1. GRID INTRO — cuadrícula con aparición aleatoria y cruces rojas
  ══════════════════════════════════════════════════════════════════════════ */

  const VW   = window.innerWidth;
  const VH   = window.innerHeight;
  const COLS = 4;
  const ROWS = 3;
  const GAP  = 1;        /* px entre celdas */
  const ARM  = 9;        /* px de cada brazo de la cruz */

  /* Contenedor grid que llena la pantalla */
  const gridWrap = document.createElement('div');
  gridWrap.style.cssText =
    'position:absolute;inset:0;' +
    'display:grid;' +
    'grid-template-columns:repeat(' + COLS + ',1fr);' +
    'grid-template-rows:repeat(' + ROWS + ',1fr);' +
    'gap:' + GAP + 'px;';
  introEl.appendChild(gridWrap);

  /* Crear celdas vacías y rellenarlas con imagen o degradado */
  const cells = Array.from({ length: COLS * ROWS }, (_, i) => {
    const cell = document.createElement('div');
    /* Marco blanco: padding del 20% por lado → imagen ocupa el 60% del espacio */
    cell.style.cssText =
      'overflow:hidden;opacity:0;' +
      'background:#fff;' +
      'padding:20%;' +
      'box-sizing:border-box;';
    const p = proyectos[i % proyectos.length];
    if (p.img) {
      const img = document.createElement('img');
      img.src = p.img;
      img.alt = p.nombre;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(15%);';
      cell.appendChild(img);
    } else {
      const bg = document.createElement('div');
      bg.style.cssText = 'width:100%;height:100%;background:' + p.bg + ';';
      cell.appendChild(bg);
    }
    gridWrap.appendChild(cell);
    return cell;
  });

  /* Cruces rojas en cada intersección interna del grid */
  const cellW = (VW - GAP * (COLS - 1)) / COLS;
  const cellH = (VH - GAP * (ROWS - 1)) / ROWS;

  for (let c = 1; c < COLS; c++) {
    for (let r = 1; r < ROWS; r++) {
      const cx = c * (cellW + GAP) - GAP / 2;
      const cy = r * (cellH + GAP) - GAP / 2;

      const cross = document.createElement('div');
      cross.style.cssText =
        'position:absolute;' +
        'left:' + cx + 'px;top:' + cy + 'px;' +
        'width:' + (ARM * 2) + 'px;height:' + (ARM * 2) + 'px;' +
        'transform:translate(-50%,-50%);' +
        'pointer-events:none;z-index:3;';

      const h = document.createElement('span');
      h.style.cssText =
        'position:absolute;top:50%;left:0;' +
        'width:100%;height:1px;' +
        'background:#F33414;transform:translateY(-50%);';

      const v = document.createElement('span');
      v.style.cssText =
        'position:absolute;left:50%;top:0;' +
        'height:100%;width:1px;' +
        'background:#F33414;transform:translateX(-50%);';

      cross.appendChild(h);
      cross.appendChild(v);
      introEl.appendChild(cross);
    }
  }

  /* Aparición aleatoria de celdas */
  const CELL_DELAY = 110;   /* ms entre cada celda */
  const PAUSE      = 500;   /* pausa final antes de salir */

  const order = Array.from({ length: cells.length }, (_, i) => i)
    .sort(() => Math.random() - 0.5);

  order.forEach((idx, i) => {
    setTimeout(() => {
      cells[idx].style.transition = 'opacity 0.32s ease';
      cells[idx].style.opacity    = '1';
    }, i * CELL_DELAY);
  });

  /* Cuando todo está lleno → fade out y mostrar landing */
  const TOTAL = cells.length * CELL_DELAY + PAUSE;

  setTimeout(() => {
    introEl.style.transition = 'opacity 0.55s ease';
    introEl.style.opacity    = '0';

    setTimeout(() => {
      introEl.classList.add('intro--done');
      landingEl.classList.add('landing--visible');
      showFeatured(0);
      buildThumbs();
      startPhrases();
    }, 580);

  }, TOTAL);


  /* ══════════════════════════════════════════════════════════════════════════
     2. IMAGEN DESTACADA
  ══════════════════════════════════════════════════════════════════════════ */

  let activeIdx = -1;

  function showFeatured (idx) {
    if (idx === activeIdx) return;
    activeIdx = idx;
    const p = proyectos[idx];

    /* Ocultar antes de cambiar contenido */
    frameEl.classList.remove('is-visible');

    setTimeout(() => {
      frameEl.innerHTML = '';
      frameEl.scrollLeft = 0; /* reiniciar scroll al inicio */

      const allImgs = p.img ? [p.img, ...(p.imgs || [])] : [];

      if (allImgs.length > 0) {
        allImgs.forEach((src) => {
          const img = document.createElement('img');
          img.src  = src;
          img.alt  = p.nombre;
          frameEl.appendChild(img);
        });
      } else {
        const bg = document.createElement('div');
        bg.className = 'l-featured__bg';
        bg.style.background = p.bg;
        frameEl.appendChild(bg);
      }

      labelEl.textContent = p.nombre + ' · ' + p.año;

      /* Construir indicador */
      buildIndicator(frameEl.children.length);

      /* Animar entrada */
      setTimeout(() => frameEl.classList.add('is-visible'), 30);

    }, 280);

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

      /* Ícono semilla */
      const icon = document.createElement('span');
      icon.className = 'l-thumb__icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = '<svg viewBox="0 0 554.93 656.02" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="m254.1,537.54c-.39-2.25-.93-3.83-1.78-6.31-1.11-3.24-2.18-5.62-2.48-6.27-.8-1.77-2.86-6.06-6.66-11.43-4.28-6.04-7.18-8.39-8.74-9.53-.78-.57-2.58-1.33-3.39-1.73-.36-.04-.73-.07-1.12-.05-1.93.08-3.39.92-3.87,1.2-1.03.61-1.89,1.4-3.46,3.58-.76,1.05-2.09,2.99-4.16,6.92-.61,1.16-1.66,3.2-2.86,5.85-.28.62-1.17,2.59-2.22,5.26-1.8,4.53-2.9,8.1-3.29,9.37-.56,1.84-.96,3.4-1.76,6.52-.41,1.6-.74,2.94-.94,4.77-.15,1.35-.25,2.36-.06,3.7.05.35.3,2.02,1.34,3.98.23.44,1.24,2.28,3.34,4.1,1.43,1.24,2.84,1.9,5.64,3.22.97.46,3.09,1.42,5.92,2.36.39.13.74.24,1.07.35.9.03,6.15.57,6.36.56,2.59-.17,4.48-.86,6.02-1.43,3.36-1.25,5.65-2.86,7.22-3.99,1-.72,2.66-1.91,4.51-3.83,1.21-1.25,2.47-2.55,3.63-4.65,1.53-2.76,1.95-5.17,2.03-5.66.43-2.66.08-4.7-.29-6.84Z"/>' +
        '<path d="m238.96,395.12c.62-9.33,1.33-16.88,1.81-21.59.34-3.32,1.06-10.2,2.23-18.96.91-6.83,1.7-11.95,2.47-16.88,1.21-7.77,1.82-11.66,2.83-17.12,1.16-6.26,2.56-13.71,5.12-23.24,1.04-3.85,2-7.06,2.71-9.36l1.8-6.73,1.45-4.1,1.87-6.3,1.51-4.95,1.8-5.81,3.31-10.15,3.75-12.37,3.44-12.43,2.32-9.26,3.12-15.76.8-5.69,1.04-7.88.8-14.38.16-15.6-.24-18.84-.48-17.22-.71-20.55-.89-12.02-1.2-16.57-1.2-13.89-1.39-15.12c-2.22-.27-4.47-.43-6.82-.33-11.75.48-20.69,5.62-23.61,7.34-6.27,3.7-11.5,8.51-21.09,21.82-4.63,6.42-12.73,18.24-25.36,42.22-3.72,7.06-10.12,19.51-17.44,35.66-1.71,3.76-7.11,15.78-13.57,32.08-10.95,27.65-17.71,49.39-20.07,57.13-3.41,11.21-5.86,20.73-10.75,39.77-2.51,9.75-4.52,17.95-5.72,29.07-.89,8.24-1.52,14.38-.36,22.55.3,2.13,1.85,12.34,8.14,24.27,1.43,2.71,7.54,13.92,20.34,24.99,8.73,7.55,17.29,11.59,34.42,19.67,5.91,2.79,18.86,8.68,36.13,14.36,2.38.78,4.51,1.48,6.54,2.13.24-7.16.58-13.88.98-19.97Z"/>' +
        '<path d="m417.81,257.44c-2.37-13.72-5.68-23.36-10.86-38.47-6.77-19.75-13.32-34.28-15.13-38.24-4.91-10.77-17.43-36.94-40.62-69.72-26.08-36.86-43.8-51.2-53.32-58.12-4.77-3.46-9.56-6.53-14.53-8.94l1.56,8.64c2.94,16.23,5.17,30.11,6.81,40.85,3.79,24.91,5.21,38.61,5.6,42.5.78,7.73,1.61,17.29,2.05,28.01.11,2.79.36,9.69.3,18.23-.03,4.23-.12,6.95-.18,8.44-.24,5.99-.63,10.4-.72,11.38-.22,2.44-.61,6.15-1.27,10.64-.5,3.43-.96,5.9-1.87,10.83-.56,3.04-1.35,7.27-2.47,12.54-.93,4.37-1.48,6.57-2.65,11.56-1.16,4.95-.79,3.51-4.52,20-3.25,14.38-3.56,15.58-4.34,19.63-1.1,5.69-1.88,10.53-2.41,14.01-.54,3.53-1.18,8.18-1.87,14.25-1.14,10.14-1.41,15.73-2.05,23.73-.62,7.78-1.56,15.85-3.43,31.99-1.3,11.2-1.84,14.97-3.43,28.56-.16,1.38-.56,4.8-1.14,9.42-.47,3.76-.9,6.99-1.24,9.48,5.52.17,9.38-.05,10.68-.13,15.82-1.06,27.3-5.24,36.71-8.74,20.51-7.64,34.47-17.46,44.06-24.32,6.12-4.37,16.2-11.64,27.53-23.37,7.36-7.61,15.05-15.58,22.15-28.34,9.36-16.82,11.89-31.56,12.37-34.53,2.63-16.21.48-28.67-1.78-41.74Z"/>' +
        '</svg>';
      btn.appendChild(icon);

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
