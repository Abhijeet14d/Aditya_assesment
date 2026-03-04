function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      faqItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherButton && otherAnswer && otherItem !== item) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = '0';
        }
      });

      if (isOpen) {
        button.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
      } else {
        button.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

