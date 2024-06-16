// Бегущая строка
document.addEventListener("DOMContentLoaded", function() {
  const tickerContainer = document.querySelector('.ticker__container');
  const tickerTexts = document.querySelectorAll('.ticker__text');
  let totalWidth = 0;

  tickerTexts.forEach(text => {
    totalWidth += text.offsetWidth;
  });

  // Добавляем немного дополнительного пространства, чтобы избежать скачков
  totalWidth += 44 * (tickerTexts.length - 1);

  tickerContainer.style.width = `${totalWidth}px`;

  // Клонируем тексты для бесконечной прокрутки
  tickerTexts.forEach(text => {
    const clone = text.cloneNode(true);
    tickerContainer.appendChild(clone);
  });
});
