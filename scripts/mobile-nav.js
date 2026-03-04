function initMobileNav() {
  const hamburgers = document.querySelectorAll('.hamburger');
  const overlay = document.getElementById('mobileNavOverlay');
  if (hamburgers.length === 0 || !overlay) return;

  function closeMenu() {
    overlay.classList.remove('open');
    hamburgers.forEach((hamburger) => {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  }

  function toggleMenu() {
    const isOpen = overlay.classList.contains('open');
    if (isOpen) {
      closeMenu();
      return;
    }

    overlay.classList.add('open');
    hamburgers.forEach((hamburger) => {
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
    });
  }

  hamburgers.forEach((hamburger) => {
    hamburger.addEventListener('click', toggleMenu);
  });

  overlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const isHamburgerClicked = Array.from(hamburgers).some((hamburger) => hamburger.contains(event.target));
    if (!overlay.contains(event.target) && !isHamburgerClicked) {
      closeMenu();
    }
  });
}

