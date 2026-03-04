function initManufacturingTabs() {
  const tabs = document.querySelectorAll('.mfg-tab');
  const panels = document.querySelectorAll('.mfg-panel');
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetPanel = tab.dataset.tab;

      tabs.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach((panel) => panel.classList.remove('active'));
      const activePanel = document.querySelector(`.mfg-panel[data-panel="${targetPanel}"]`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

