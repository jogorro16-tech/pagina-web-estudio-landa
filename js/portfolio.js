/* ─── PORTAFOLIO — proyectos Estudio Landa ───────────────────────────────── */

(function () {

  /* ── Proyectos completos ────────────────────────────────────────────────── */
  /* Para conectar imagen: cambia img: null  por  img: 'assets/images/proyectos/SLUG/hero.jpg' */
  const proyectos = [
    /* ── 2026 ── */
    { slug: 'casa-olivo',                   nombre: 'Casa Olivo',                          subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2026', tamaño: 'large',  img: null, bg: 'linear-gradient(140deg,#C6CAC4 0%,#96A094 100%)' },
    { slug: 'bohai-reserva',                nombre: 'Bohäi Reserva',                       subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2026', tamaño: 'medium', img: null, bg: 'linear-gradient(140deg,#C2C8CC 0%,#8EA4AC 100%)' },
    { slug: 'departamentos-zonte-2026',     nombre: 'Departamentos Zonté',                 subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2026', tamaño: 'wide',   img: null, bg: 'linear-gradient(140deg,#C8C8C4 0%,#9CA0A0 100%)' },
    { slug: 'campus-via-diseno-el-marques', nombre: 'Campus Vía Diseño El Marqués',        subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2020–2026', tamaño: 'large',  img: null, bg: 'linear-gradient(140deg,#BEC8C0 0%,#8AA098 100%)' },
    /* ── 2025 ── */
    { slug: 'casa-aragon',                  nombre: 'Casa Aragón',                         subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2025', tamaño: 'medium', img: null, bg: 'linear-gradient(140deg,#C8C4BC 0%,#9E9890 100%)' },
    { slug: 'casa-ikaya',                   nombre: 'Casa Ikaya',                          subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2025', tamaño: 'large',  img: null, bg: 'linear-gradient(140deg,#BECABD 0%,#8EA890 100%)' },
    { slug: 'departamento-sophia',          nombre: 'Departamento Sophia',                 subtitulo: 'Interiorismo',                  categoria: 'int', año: '2025', tamaño: 'square', img: null, bg: 'linear-gradient(140deg,#B8C4C2 0%,#8AA0A0 100%)' },
    { slug: 'oficinas-ventas-bohai',        nombre: 'Oficinas de Ventas Inmobiliaria Bohäi', subtitulo: 'Arquitectura + Interiorismo', categoria: 'arq', año: '2025', tamaño: 'wide',   img: null, bg: 'linear-gradient(140deg,#C4C2C8 0%,#9896A4 100%)' },
    { slug: 'fraccionamiento-bohai-pedregal', nombre: 'Fraccionamiento Bohäi Pedregal',   subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2025', tamaño: 'medium', img: null, bg: 'linear-gradient(140deg,#C0C8C4 0%,#90A09C 100%)' },
    { slug: 'departamentos-tzonte-2025',    nombre: 'Departamentos Tzönte',                subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2025', tamaño: 'large',  img: null, bg: 'linear-gradient(140deg,#CAC6C0 0%,#A09C96 100%)' },
    /* ── 2024 ── */
    /* Casa Aragón 2024 duplicado — si es el mismo que arriba, ignorar */
    /* ── 2023 ── */
    { slug: 'concurso-kaira-looro',         nombre: 'Concurso Kaira Looro',                subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2023', tamaño: 'wide',   img: null, bg: 'linear-gradient(140deg,#C8CCCA 0%,#98A4A8 100%)' },
    { slug: 'oficinas-ggi',                 nombre: 'Oficinas GGI',                        subtitulo: 'Arquitectura + Interiorismo',   categoria: 'arq', año: '2023', tamaño: 'square', img: null, bg: 'linear-gradient(140deg,#C4C0B8 0%,#9C9890 100%)' },
    /* ── 2022 ── */
    { slug: 'cafe-ocampo',                  nombre: 'Café Ocampo',                         subtitulo: 'Arquitectura + Interiorismo',   categoria: 'int', año: '2022', tamaño: 'medium', img: null, bg: 'linear-gradient(140deg,#C2C8BC 0%,#90A08A 100%)' },
    { slug: 'casa-laja-18',                 nombre: 'Casa Laja 18',                        subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2022', tamaño: 'large',  img: null, bg: 'linear-gradient(140deg,#C0C4C4 0%,#96A0A4 100%)' },
    /* ── 2021 ── */
    { slug: 'casa-laja-13',                 nombre: 'Casa Laja 13',                        subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2021', tamaño: 'wide',   img: null, bg: 'linear-gradient(140deg,#C4C2BC 0%,#9A9890 100%)' },
    { slug: 'suites-pitahayas-los-cabos',   nombre: 'Suites Pitahayas Los Cabos',          subtitulo: 'Arquitectura + Interiorismo',   categoria: 'arq', año: '2021', tamaño: 'large',  img: null, bg: 'linear-gradient(140deg,#C8CAC4 0%,#A0A49E 100%)' },
    /* ── 2020 ── */
    { slug: 'casa-tacana-b',                nombre: 'Casa Tacana B',                       subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2020', tamaño: 'medium', img: null, bg: 'linear-gradient(140deg,#C6C8C4 0%,#9EA4A0 100%)' },
    /* ── 2019 ── */
    { slug: 'casa-tacana-a',                nombre: 'Casa Tacana A',                       subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2019', tamaño: 'square', img: null, bg: 'linear-gradient(140deg,#C8C6C0 0%,#A09E98 100%)' },
    /* ── 2018 ── */
    { slug: 'departamentos-zonte-2018',     nombre: 'Departamentos Zonté',                 subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2018', tamaño: 'wide',   img: null, bg: 'linear-gradient(140deg,#C4C6C8 0%,#9CA0A4 100%)' },
    { slug: 'casa-huertas-del-carmen',      nombre: 'Casa Huertas del Carmen',             subtitulo: 'Arquitectura',                  categoria: 'arq', año: '2018', tamaño: 'large',  img: null, bg: 'linear-gradient(140deg,#CACAC6 0%,#A2A4A0 100%)' },
  ];

  const track       = document.getElementById('portfolio-track');
  const progressBar = document.getElementById('portfolio-progress-bar');
  const prevBtn     = document.getElementById('arrow-prev');
  const nextBtn     = document.getElementById('arrow-next');

  if (!track) return;

  /* ── Renderizar tarjetas ─────────────────────────────────────────────────── */
  function renderCards (filtro = 'all') {
    const lista = filtro === 'all'
      ? proyectos
      : proyectos.filter(p => p.categoria === filtro);

    track.innerHTML = lista.map(p => {
      const imgHtml = p.img
        ? `<img class="project-card__img" src="${p.img}" alt="${p.nombre}" loading="lazy">`
        : `<div class="project-card__placeholder" style="background:${p.bg}"></div>`;

      return `
        <article class="project-card project-card--${p.tamaño}" role="listitem" data-slug="${p.slug}">
          <div class="project-card__image">${imgHtml}</div>
          <div class="project-card__category-tag">
            <span class="tag tag--sage">${p.subtitulo}</span>
          </div>
          <div class="project-card__caption">
            <div class="project-card__name">
              <strong>${p.nombre}</strong>
            </div>
            <span class="project-card__year">${p.año}</span>
          </div>
        </article>`;
    }).join('');

    updateProgress();
    bindCursorHover();
  }

  /* ── Progreso ────────────────────────────────────────────────────────────── */
  function updateProgress () {
    if (!progressBar) return;
    const max = track.scrollWidth - track.clientWidth;
    progressBar.style.width = max > 0 ? `${Math.min((track.scrollLeft / max) * 100, 100)}%` : '0%';
  }

  track.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  /* ── Flechas ─────────────────────────────────────────────────────────────── */
  prevBtn?.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.7, behavior: 'smooth' }));
  nextBtn?.addEventListener('click', () => track.scrollBy({ left:  track.clientWidth * 0.7, behavior: 'smooth' }));

  /* ── Drag to scroll ─────────────────────────────────────────────────────── */
  let isDragging = false, startX = 0, startScroll = 0;
  track.addEventListener('mousedown', e => { isDragging = true; startX = e.pageX - track.offsetLeft; startScroll = track.scrollLeft; e.preventDefault(); });
  document.addEventListener('mouseup',   () => { isDragging = false; });
  document.addEventListener('mousemove', e => { if (isDragging) track.scrollLeft = startScroll - (e.pageX - track.offsetLeft - startX); });

  /* ── Cursor hover ────────────────────────────────────────────────────────── */
  function bindCursorHover () {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    track.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => { cursor?.classList.add('cursor--hover'); follower?.classList.add('cursor-follower--hover'); });
      card.addEventListener('mouseleave', () => { cursor?.classList.remove('cursor--hover'); follower?.classList.remove('cursor-follower--hover'); });
    });
  }

  /* ── Filtros ─────────────────────────────────────────────────────────────── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      track.scrollTo({ left: 0, behavior: 'smooth' });
      renderCards(btn.dataset.filter);
    });
  });

  renderCards();

})();
