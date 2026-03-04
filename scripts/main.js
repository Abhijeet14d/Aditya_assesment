document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initHeroCarousel();
  initImageZoom();
  initFAQAccordion();
  initManufacturingTabs();
  initTestimonialsCarousel();
  initIndustriesCarousel();
  initMobileNav();
  initForms();
});

function initForms() {
  document.querySelectorAll('.catalogue-form, .quote-form').forEach(form => {
    form.addEventListener('submit', (e) => e.preventDefault());
  });
}
