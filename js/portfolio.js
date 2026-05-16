/* ─── PORTAFOLIO — scroll horizontal tipo Floema ─────────────────────────── */

(function () {

  /* ── Datos de proyectos ─────────────────────────────────────────────────── */
  const proyectos = [
    {
      id: 1,
      nombre: 'Los Encinos',
      subtitulo: 'Casa Habitación',
      categoria: 'arq',
      categoriaLabel: 'Arquitectura',
      año: '2024',
      tamaño: 'large',
      bg: 'linear-gradient(140deg, #C8C4BC 0%, #9E9890 100%)'
    },
    {
      id: 2,
      nombre: 'Santa Fe',
      subtitulo: 'Loft Contemporáneo',
      categoria: 'int',
      categoriaLabel: 'Interiorismo',
      año: '2024',
      tamaño: 'medium',
      bg: 'linear-gradient(140deg, #B8C4C2 0%, #8AA0A0 100%)'
    },
    {
      id: 3,
      nombre: 'Norte Corporativo',
      subtitulo: 'Oficinas',
      categoria: 'arq',
      categoriaLabel: 'Arquitectura + Interiorismo',
      año: '2023',
      tamaño: 'wide',
      bg: 'linear-gradient(140deg, #BECABD 0%, #8EA890 100%)'
    },
    {
      id: 4,
      nombre: 'Jardín',
      subtitulo: 'Restaurante',
      categoria: 'int',
      categoriaLabel: 'Interiorismo',
      año: '2023',
      tamaño: 'square',
      bg: 'linear-gradient(140deg, #C4C0B8 0%, #9C9890 100%)'
    },
    {
      id: 5,
      nombre: 'Pedregal',
      subtitulo: 'Residencia',
      categoria: 'arq',
      categoriaLabel: 'Arquitectura',
      año: '2023',
      tamaño: 'large',
      bg: 'linear-gradient(140deg, #C0C4C4 0%, #98A0A4 100%)'
    }
  ];

  const track    = document.getElementById('portfolio-track');
  const progressBar = document.getElementById('portfolio-progress-bar');
  const prevBtn  = document.getElementById('arrow-prev');
  const nextBtn  = document.getElementById('arrow-next');

  if (!track) return;

  /* ── Renderizar tarjetas ─────────────────────────────────────────────────── */
  function renderCards (filtro = 'all') {
    const lista = filtro === 'all'
      ? proyectos
      : proyectos.filter(p => p.categoria === filtro);

    track.innerHTML = lista.map(p => `
      <article class="project-card project-card--${p.tamaño}" role="listitem" data-cat="${p.categoria}">
        <div class="project-card__image">
          <div class="project-card__placeholder" style="background:${p.bg}"></div>
        </div>

        <!-- Tag de categoría (estilo Floema) -->
        <div class="project-card__category-tag">
          <span class="tag tag--sage">${p.categoriaLabel}</span>
        </div>

        <!-- Caption siempre visible -->
        <div class="project-card__caption">
          <div>
            <div class="project-card__name">${p.subtitulo}<br><span style="font-weight:700">${p.nombre}</span></div>
          </div>
          <span class="project-card__year">${p.año}</span>
        </div>
      </article>
    `).join('');

    updateProgress();
    bindCursorHover();
  }

  /* ── Barra de progreso ───────────────────────────────────────────────────── */
  function updateProgress () {
    if (!progressBar) return;
    const max = track.scrollWidth - track.clientWidth;
    const pct = max > 0 ? (track.scrollLeft / max) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  }

  track.addEventListener('scroll', updateProgress, { passive: true });

  /* ── Flechas de navegación ───────────────────────────────────────────────── */
  function scrollBy (dir) {
    const step = track.clientWidth * 0.72;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  }

  prevBtn?.addEventListener('click', () => scrollBy(-1));
  nextBtn?.addEventListener('click', () => scrollBy(1));

  /* ── Drag to scroll (ratón) ─────────────────────────────────────────────── */
  let isDragging = false, startX = 0, startScroll = 0;

  track.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.pageX - track.offsetLeft;
    startScroll = track.scrollLeft;
    track.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    track.style.cursor = 'grab';
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = startScroll - (x - startX);
  });

  /* ── Cursor hover en tarjetas ────────────────────────────────────────────── */
  function bindCursorHover () {
    const cursor   = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    track.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        cursor?.classList.add('cursor--hover');
        follower?.classList.add('cursor-follower--hover');
      });
      card.addEventListener('mouseleave', () => {
        cursor?.classList.remove('cursor--hover');
        follower?.classList.remove('cursor-follower--hover');
      });
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

  /* ── Init ────────────────────────────────────────────────────────────────── */
  renderCards();

})();
