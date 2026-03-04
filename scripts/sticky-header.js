function initStickyHeader() {
  const stickyHeader = document.getElementById('stickyHeader');
  const hero = document.getElementById('hero');
  if (!stickyHeader || !hero) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollingDown = currentScrollY > lastScrollY;

      if (currentScrollY > heroBottom && scrollingDown) {
        stickyHeader.classList.add('visible');
        stickyHeader.setAttribute('aria-hidden', 'false');
      } else if (!scrollingDown || currentScrollY <= heroBottom) {
        stickyHeader.classList.remove('visible');
        stickyHeader.setAttribute('aria-hidden', 'true');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

