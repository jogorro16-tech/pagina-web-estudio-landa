/* ─── PORTAFOLIO — filtros y datos ───────────────────────────────────────── */

(function () {
  /* Datos de proyectos — editar aquí para agregar nuevos */
  const proyectos = [
    {
      id: 1,
      nombre: 'Casa Habitación<br><em>Los Encinos</em>',
      categoria: 'arq',
      categoriaLabel: 'Arquitectura',
      año: '2024',
      tamaño: 'large',
      color: 'linear-gradient(135deg, #D4C9BB 0%, #B8A99A 100%)'
    },
    {
      id: 2,
      nombre: 'Loft<br><em>Santa Fe</em>',
      categoria: 'int',
      categoriaLabel: 'Interiorismo',
      año: '2024',
      tamaño: 'medium',
      color: 'linear-gradient(135deg, #C2CBCC 0%, #8FA3A8 100%)'
    },
    {
      id: 3,
      nombre: 'Oficinas<br><em>Corporativo Norte</em>',
      categoria: 'arq',
      categoriaLabel: 'Arquitectura + Interiorismo',
      año: '2023',
      tamaño: 'half',
      color: 'linear-gradient(135deg, #BFC8B8 0%, #8FA089 100%)'
    },
    {
      id: 4,
      nombre: 'Restaurante<br><em>Jardín</em>',
      categoria: 'int',
      categoriaLabel: 'Interiorismo',
      año: '2023',
      tamaño: 'half',
      color: 'linear-gradient(135deg, #C8C2B8 0%, #A89A8F 100%)'
    },
    {
      id: 5,
      nombre: 'Residencia<br><em>Pedregal</em>',
      categoria: 'arq',
      categoriaLabel: 'Arquitectura',
      año: '2023',
      tamaño: 'wide',
      color: 'linear-gradient(135deg, #C9C2BB 0%, #9A9090 100%)'
    }
  ];

  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  /* Renderizar tarjetas */
  function renderCards(filtro = 'all') {
    const filtrados = filtro === 'all'
      ? proyectos
      : proyectos.filter(p => p.categoria === filtro);

    grid.innerHTML = filtrados.map(p => `
      <article class="project-card project-card--${p.tamaño}" data-cat="${p.categoria}">
        <div class="project-card__image">
          <div class="project-card__placeholder"
               style="background: ${p.color}; color: transparent;">
            ${p.nombre.replace(/<[^>]+>/g, '')}
          </div>
        </div>
        <div class="project-card__overlay">
          <span class="project-card__category">${p.categoriaLabel}</span>
          <h3 class="project-card__name">${p.nombre}</h3>
          <span class="project-card__year">${p.año}</span>
        </div>
      </article>
    `).join('');

    /* Re-inicializar hover del cursor */
    grid.querySelectorAll('.project-card').forEach(card => {
      const cursor   = document.getElementById('cursor');
      const follower = document.getElementById('cursor-follower');
      card.addEventListener('mouseenter', () => {
        cursor?.classList.add('cursor--hover');
        follower?.classList.add('cursor-follower--hover');
      });
      card.addEventListener('mouseleave', () => {
        cursor?.classList.remove('cursor--hover');
        follower?.classList.remove('cursor-follower--hover');
      });
    });

    /* Re-disparar animaciones si GSAP está disponible */
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
      grid.querySelectorAll('.project-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: i * 0.08 }
        );
      });
    }
  }

  renderCards();

  /* Filtros */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      renderCards(btn.dataset.filter);
    });
  });

})();
