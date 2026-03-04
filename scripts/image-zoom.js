function initImageZoom() {
  const container = document.getElementById('zoomContainer');
  const mainImage = document.getElementById('mainImage');
  const zoomPreview = document.getElementById('zoomPreview');
  const zoomPreviewImg = document.getElementById('zoomPreviewImg');

  if (!container || !mainImage || !zoomPreview || !zoomPreviewImg) return;

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;

  const lens = document.createElement('div');
  lens.className = 'zoom-lens';
  container.appendChild(lens);

  container.addEventListener('mouseenter', () => {
    zoomPreview.classList.add('active');
  });

  container.addEventListener('mouseleave', () => {
    zoomPreview.classList.remove('active');
    lens.style.opacity = '0';
  });

  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const xRatio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const yRatio = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

    const lensW = 120;
    const lensH = 120;
    const lensX = event.clientX - rect.left - lensW / 2;
    const lensY = event.clientY - rect.top - lensH / 2;
    lens.style.left = `${Math.max(0, Math.min(rect.width - lensW, lensX))}px`;
    lens.style.top = `${Math.max(0, Math.min(rect.height - lensH, lensY))}px`;

    const previewW = zoomPreview.offsetWidth;
    const previewH = zoomPreview.offsetHeight;
    const imgW = zoomPreviewImg.offsetWidth;
    const imgH = zoomPreviewImg.offsetHeight;

    const offsetX = -(xRatio * (imgW - previewW));
    const offsetY = -(yRatio * (imgH - previewH));

    zoomPreviewImg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
}

