    // Выборка элементов
    const textElement = document.querySelector('.text_1'); // исправляем выборку на .text_1
    const textChangeButton = document.querySelector('.text-change'); // предположим, что это кнопка
    
    // Создаем анимацию для изменения текста
    const textAnimation = gsap.to(textElement, {
       duration: 2,
       text: "This is the new text",
       ease: "none",
       paused: true,
    });
    
    // Добавляем событие для запуска анимации при клике на элемент с классом .text-change
    textChangeButton.addEventListener('click', () => {
        textAnimation.play();
    });



const textElement = document.querySelector('.text_1'); // Текст, который нужно анимировать
const textChangeButton = document.querySelector('.text-change'); // Кнопка для смены текста

// Переключение текста кнопки и запуск анимации при клике
textChangeButton.addEventListener('click', () => {
  // Изменение текста кнопки
  gsap.to(textChangeButton, {
    duration: 0.5,
    text: textChangeButton.textContent === "Открыть модальное окно" ? "Закрыть модальное окно" : "Открыть модальное окно",
    ease: "none"
  });

  // Запуск анимации текста
  gsap.to(textElement, {
    duration: 2,
    text: "This is the new text",
    ease: "none",
    paused: false // Убедитесь, что анимация запускается при клике
  });
});