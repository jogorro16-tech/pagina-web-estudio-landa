/* ─── PORTAFOLIO — proyectos Estudio Landa ───────────────────────────────── */

(function () {

  /* ── Proyectos ──────────────────────────────────────────────────────────── */
  /* imgs: array de imágenes para la galería lightbox. Si solo hay hero, poner [hero] */
  const proyectos = [
    { slug: 'casa-huertas-del-carmen',      nombre: 'Casa Huertas del Carmen',             categoria: 'arq', año: '2018', img: 'assets/images/proyectos/casa-huertas-del-carmen/hero.jpg',   imgs: ['assets/images/proyectos/casa-huertas-del-carmen/hero.jpg','assets/images/proyectos/casa-huertas-del-carmen/1.jpg','assets/images/proyectos/casa-huertas-del-carmen/2.jpg','assets/images/proyectos/casa-huertas-del-carmen/3.jpg','assets/images/proyectos/casa-huertas-del-carmen/4.jpg','assets/images/proyectos/casa-huertas-del-carmen/5.jpg'],   bg: 'linear-gradient(140deg,#CACAC6 0%,#A2A4A0 100%)' },
    { slug: 'casa-olivo',                   nombre: 'Casa Olivo',                           categoria: 'arq', año: '2026', img: null, imgs: [], bg: 'linear-gradient(140deg,#C6CAC4 0%,#96A094 100%)' },
    { slug: 'bohai-reserva',                nombre: 'Bohäi Reserva',                        categoria: 'arq', año: '2026', img: null, imgs: [], bg: 'linear-gradient(140deg,#C2C8CC 0%,#8EA4AC 100%)' },
    { slug: 'departamentos-zonte-2026',     nombre: 'Departamentos Zonté',                  categoria: 'arq', año: '2026', img: null, imgs: [], bg: 'linear-gradient(140deg,#C8C8C4 0%,#9CA0A0 100%)' },
    { slug: 'campus-via-diseno-el-marques', nombre: 'Campus Vía Diseño El Marqués',         categoria: 'arq', año: '2020–2026', img: null, imgs: [], bg: 'linear-gradient(140deg,#BEC8C0 0%,#8AA098 100%)' },
    { slug: 'casa-aragon',                  nombre: 'Casa Aragón',                          categoria: 'arq', año: '2025', img: 'assets/images/proyectos/casa-aragon/hero.jpeg',              imgs: ['assets/images/proyectos/casa-aragon/hero.jpeg','assets/images/proyectos/casa-aragon/1.jpeg','assets/images/proyectos/casa-aragon/2.jpeg','assets/images/proyectos/casa-aragon/3.jpeg'],              bg: 'linear-gradient(140deg,#C8C4BC 0%,#9E9890 100%)' },
    { slug: 'casa-ikaya',                   nombre: 'Casa Ikaya',                           categoria: 'arq', año: '2025', img: null, imgs: [], bg: 'linear-gradient(140deg,#BECABD 0%,#8EA890 100%)' },
    { slug: 'departamento-sophia',          nombre: 'Departamento Sophia',                  categoria: 'int', año: '2025', img: 'assets/images/proyectos/departamento-sophia/hero.jpg',      imgs: ['assets/images/proyectos/departamento-sophia/hero.jpg'],      bg: 'linear-gradient(140deg,#B8C4C2 0%,#8AA0A0 100%)' },
    { slug: 'oficinas-ventas-bohai',        nombre: 'Oficinas de Ventas Inmobiliaria Bohäi',categoria: 'arq', año: '2025', img: null, imgs: [], bg: 'linear-gradient(140deg,#C4C2C8 0%,#9896A4 100%)' },
    { slug: 'fraccionamiento-bohai-pedregal',nombre: 'Fraccionamiento Bohäi Pedregal',      categoria: 'arq', año: '2025', img: null, imgs: [], bg: 'linear-gradient(140deg,#C0C8C4 0%,#90A09C 100%)' },
    { slug: 'departamentos-tzonte-2025',    nombre: 'Departamentos Tzönte',                 categoria: 'arq', año: '2025', img: null, imgs: [], bg: 'linear-gradient(140deg,#CAC6C0 0%,#A09C96 100%)' },
    { slug: 'concurso-kaira-looro',         nombre: 'Concurso Kaira Looro',                 categoria: 'arq', año: '2023', img: null, imgs: [], bg: 'linear-gradient(140deg,#C8CCCA 0%,#98A4A8 100%)' },
    { slug: 'oficinas-ggi',                 nombre: 'Oficinas GGI',                         categoria: 'arq', año: '2023', img: 'assets/images/proyectos/oficinas-ggi/hero.jpg',             imgs: ['assets/images/proyectos/oficinas-ggi/hero.jpg','assets/images/proyectos/oficinas-ggi/1.jpg','assets/images/proyectos/oficinas-ggi/2.jpg','assets/images/proyectos/oficinas-ggi/3.jpg','assets/images/proyectos/oficinas-ggi/4.jpg'],             bg: 'linear-gradient(140deg,#C4C0B8 0%,#9C9890 100%)' },
    { slug: 'cafe-ocampo',                  nombre: 'Café Ocampo',                          categoria: 'int', año: '2022', img: null, imgs: [], bg: 'linear-gradient(140deg,#C2C8BC 0%,#90A08A 100%)' },
    { slug: 'casa-laja-18',                 nombre: 'Casa Laja 18',                         categoria: 'arq', año: '2022', img: 'assets/images/proyectos/casa-laja-18/hero.jpg',            imgs: ['assets/images/proyectos/casa-laja-18/hero.jpg','assets/images/proyectos/casa-laja-18/1.jpg','assets/images/proyectos/casa-laja-18/2.jpg','assets/images/proyectos/casa-laja-18/3.jpg'],            bg: 'linear-gradient(140deg,#C0C4C4 0%,#96A0A4 100%)' },
    { slug: 'casa-laja-13',                 nombre: 'Casa Laja 13',                         categoria: 'arq', año: '2021', img: null, imgs: [], bg: 'linear-gradient(140deg,#C4C2BC 0%,#9A9890 100%)' },
    { slug: 'suites-pitahayas-los-cabos',   nombre: 'Suites Pitahayas Los Cabos',           categoria: 'arq', año: '2021', img: null, imgs: [], bg: 'linear-gradient(140deg,#C8CAC4 0%,#A0A49E 100%)' },
    { slug: 'casa-tacana-b',                nombre: 'Casa Tacana B',                        categoria: 'arq', año: '2020', img: null, imgs: [], bg: 'linear-gradient(140deg,#C6C8C4 0%,#9EA4A0 100%)' },
    { slug: 'casa-tacana-a',                nombre: 'Casa Tacana A',                        categoria: 'arq', año: '2019', img: 'assets/images/proyectos/casa-tacana-a/hero.png',           imgs: ['assets/images/proyectos/casa-tacana-a/hero.png','assets/images/proyectos/casa-tacana-a/1.png','assets/images/proyectos/casa-tacana-a/2.jpg','assets/images/proyectos/casa-tacana-a/3.png','assets/images/proyectos/casa-tacana-a/4.png','assets/images/proyectos/casa-tacana-a/5.png','assets/images/proyectos/casa-tacana-a/6.jpg','assets/images/proyectos/casa-tacana-a/7.png'],           bg: 'linear-gradient(140deg,#C8C6C0 0%,#A09E98 100%)' },
    { slug: 'departamentos-zonte-2018',     nombre: 'Departamentos Zonté',                  categoria: 'arq', año: '2018', img: null, imgs: [], bg: 'linear-gradient(140deg,#C4C6C8 0%,#9CA0A4 100%)' },
  ];

  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  /* ── Lightbox state ─────────────────────────────────────────────────────── */
  const lightbox     = document.getElementById('lightbox');
  const lbMedia      = document.getElementById('lightbox-media');
  const lbTitle      = document.getElementById('lightbox-title');
  const lbCounter    = document.getElementById('lightbox-counter');
  const lbClose      = document.getElementById('lightbox-close');
  const lbPrev       = document.getElementById('lightbox-prev');
  const lbNext       = document.getElementById('lightbox-next');

  let lbProject = null;
  let lbIndex   = 0;

  function openLightbox (proyecto, startIndex) {
    lbProject = proyecto;
    lbIndex   = startIndex || 0;
    renderLightbox();
    lightbox.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox () {
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = '';
    lbProject = null;
  }

  function renderLightbox () {
    if (!lbProject) return;
    const imgs = lbProject.imgs;
    lbTitle.textContent   = lbProject.nombre + ' · ' + lbProject.año;
    lbCounter.textContent = imgs.length > 1 ? `${lbIndex + 1} / ${imgs.length}` : '';

    if (imgs.length === 0) {
      lbMedia.innerHTML = `<div class="lightbox__placeholder" style="background:${lbProject.bg};display:flex;align-items:center;justify-content:center;">
        <span style="color:rgba(255,255,255,0.3);font-size:1rem;letter-spacing:0.1em;text-transform:uppercase;">Imágenes próximamente</span>
      </div>`;
    } else {
      lbMedia.innerHTML = `<img class="lightbox__img" src="${imgs[lbIndex]}" alt="${lbProject.nombre}">`;
    }

    lbPrev.style.visibility = imgs.length > 1 ? 'visible' : 'hidden';
    lbNext.style.visibility = imgs.length > 1 ? 'visible' : 'hidden';
  }

  lbClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  lbPrev?.addEventListener('click', () => {
    if (!lbProject || !lbProject.imgs.length) return;
    lbIndex = (lbIndex - 1 + lbProject.imgs.length) % lbProject.imgs.length;
    renderLightbox();
  });

  lbNext?.addEventListener('click', () => {
    if (!lbProject || !lbProject.imgs.length) return;
    lbIndex = (lbIndex + 1) % lbProject.imgs.length;
    renderLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('lightbox--open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  lbPrev?.click();
    if (e.key === 'ArrowRight') lbNext?.click();
  });

  /* ── Renderizar planilla ─────────────────────────────────────────────────── */
  function renderGrid (filtro = 'all') {
    const lista = filtro === 'all'
      ? proyectos
      : proyectos.filter(p => p.categoria === filtro);

    grid.innerHTML = lista.map((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      const mediaHtml = p.img
        ? `<img class="grid-cell__img" src="${p.img}" alt="${p.nombre}" loading="lazy">`
        : `<div class="grid-cell__placeholder" style="background:${p.bg};position:absolute;inset:0;"></div>`;

      return `
        <article class="grid-cell" role="listitem" data-index="${i}" tabindex="0" aria-label="${p.nombre}">
          ${mediaHtml}
          <span class="grid-cell__num">${num}</span>
          <div class="grid-cell__overlay">
            <div class="grid-cell__name">${p.nombre}</div>
            <div class="grid-cell__year">${p.año}</div>
          </div>
        </article>`;
    }).join('');

    /* Bind click → lightbox */
    grid.querySelectorAll('.grid-cell').forEach((cell, i) => {
      const proyecto = lista[i];
      const open = () => openLightbox(proyecto, 0);
      cell.addEventListener('click', open);
      cell.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });

    bindCursorHover();
  }

  /* ── Cursor hover ────────────────────────────────────────────────────────── */
  function bindCursorHover () {
    const cursor   = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    grid.querySelectorAll('.grid-cell').forEach(cell => {
      cell.addEventListener('mouseenter', () => { cursor?.classList.add('cursor--hover'); follower?.classList.add('cursor-follower--hover'); });
      cell.addEventListener('mouseleave', () => { cursor?.classList.remove('cursor--hover'); follower?.classList.remove('cursor-follower--hover'); });
    });
  }

  /* ── Filtros ─────────────────────────────────────────────────────────────── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      renderGrid(btn.dataset.filter);
    });
  });

  renderGrid();

})();
