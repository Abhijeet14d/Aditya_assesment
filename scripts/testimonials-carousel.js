function initTestimonialsCarousel() {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('#testimonialsDots .dot');
  if (!track || !dots.length) return;

  let currentSlide = 0;

  function goToSlide(index) {
    const cards = track.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    currentSlide = index;

    const card = cards[0];
    const gap = 24;
    const scrollAmount = index * (card.offsetWidth + gap);
    track.style.transform = `translateX(-${scrollAmount}px)`;

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.slide, 10));
    });
  });

  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener('touchend', (event) => {
    if (!isDragging) return;
    isDragging = false;

    const endX = event.changedTouches[0].clientX;
    const diff = startX - endX;
    const threshold = 50;

    if (Math.abs(diff) <= threshold) return;
    if (diff > 0 && currentSlide < dots.length - 1) {
      goToSlide(currentSlide + 1);
      return;
    }

    if (diff < 0 && currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, { passive: true });
}

