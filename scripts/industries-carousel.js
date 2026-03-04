function initIndustriesCarousel() {
  const track = document.getElementById('industriesTrack');
  const prevBtn = document.getElementById('indPrev');
  const nextBtn = document.getElementById('indNext');
  if (!track || !prevBtn || !nextBtn) return;

  const scrollAmount = 436;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

