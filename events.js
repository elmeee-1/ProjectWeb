document.addEventListener('DOMContentLoaded', function () {
  const grid       = document.querySelector('.festival-grid');
  const sliderWrap = document.querySelector('.slider-wrap');
  const prevBtn    = document.querySelector('.slider-btn.prev');
  const nextBtn    = document.querySelector('.slider-btn.next');

  const SLIDE_DURATION = 3000;

  let interval;
  const originals = [...document.querySelectorAll('.fest-card')];
  originals.slice(-2).forEach(c => grid.prepend(c.cloneNode(true)));
  originals.slice(0, 2).forEach(c => grid.appendChild(c.cloneNode(true)));

  const cards = [...document.querySelectorAll('.fest-card')];
  const CLONE  = 2;
  let current  = CLONE; // start on first real card

  function getCardWidth() {
    const gap = parseInt(window.getComputedStyle(grid).gap) || 24;
    return cards[0].offsetWidth + gap;
  }

  function showCard(index, animate = true) {
    current = index;

    const cardWidth      = getCardWidth();
    const containerWidth = sliderWrap.offsetWidth;
    const offset         = index * cardWidth - (containerWidth / 2 - cardWidth / 2);

    grid.style.transition = animate ? 'transform 0.5s ease' : 'none';
    grid.style.transform  = `translateX(-${offset}px)`;

    cards.forEach((card, i) => {
      card.classList.remove('active', 'prev', 'next');
      const d = i - index;
      if (d === 0)  card.classList.add('active');
      if (d === -1) card.classList.add('prev');
      if (d === 1)  card.classList.add('next');
    });
  }

  grid.addEventListener('transitionend', () => {
    const total = cards.length;
    if (current >= total - CLONE) showCard(CLONE, false);
    if (current < CLONE)          showCard(total - CLONE - 1, false);
  });

  function next() { showCard(current + 1); }
  function prev() { showCard(current - 1); }

  function startAutoPlay() { clearInterval(interval); interval = setInterval(next, SLIDE_DURATION); }
  function stopAutoPlay()  { clearInterval(interval); }

  nextBtn?.addEventListener('click', () => { next(); stopAutoPlay(); setTimeout(startAutoPlay, 2000); });
  prevBtn?.addEventListener('click', () => { prev(); stopAutoPlay(); setTimeout(startAutoPlay, 2000); });

  sliderWrap?.addEventListener('mouseenter', stopAutoPlay);
  sliderWrap?.addEventListener('mouseleave', startAutoPlay);

  let touchStartX = 0;
  sliderWrap?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
  sliderWrap?.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); stopAutoPlay(); setTimeout(startAutoPlay, 2000); }
  });

  window.addEventListener('resize', () => showCard(current, false));

  showCard(current, false);
  setTimeout(startAutoPlay, 1000);
});