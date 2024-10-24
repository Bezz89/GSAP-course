const callbacksRow = document.querySelector('.callbacks-row'); // Контейнер
const rectangles = document.querySelectorAll('.rectangle');    // Все элементы .rectangle

// Предполагаем, что .callbacks-row и .rectangle всегда существуют
const rowWidth = callbacksRow.offsetWidth; // Ширина контейнера
const rectWidth = rectangles[0].offsetWidth; // Ширина одного прямоугольника (они одинаковые)
const xValue = rowWidth - rectWidth; // Вычисляем смещение

console.log("Расстояние по оси X:", xValue);

// GSAP анимация для всех прямоугольников
let blackRectangles = gsap.to(".rectangle", {
  x: xValue,        // Двигаем все элементы в пределах ширины контейнера минус ширина прямоугольника
  rotation: 360,    // Поворот на 360 градусов
  ease: "power2.out", // Тип анимации
  paused: true,     // Анимация начинается в паузе
  stagger: 0.5,     // Задержка между анимациями каждого прямоугольника
  duration: 1.5     // Длительность анимации
});

let section_red = gsap.to(".section-red", {
  backgroundColor: "purple",  // Изменяем цвет на фиолетовый
  duration: 1.5,              // Длительность анимации
  paused: true                 // Анимация начинается в паузе
});

// Кнопки для управления анимацией
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const resume = document.getElementById('resume');

// Запуск анимации при клике на кнопку play
play.addEventListener('click', () => {
  blackRectangles.play();
  section_red.play();
});

// Пауза анимации при клике на кнопку pause
pause.addEventListener('click', () => {
  blackRectangles.pause();
  section_red.pause();
});

// Реверс анимации при клике на кнопку reverse (с увеличением скорости в 2 раза)
reverse.addEventListener('click', () => {
  blackRectangles.timeScale(2).reverse();
  section_red.timeScale(2).reverse();
});

// Возобновление анимации при клике на кнопку resume
resume.addEventListener('click', () => {
  blackRectangles.resume();
  section_red.resume();
});

// Запуск requestAnimationFrame для прокрутки с использованием Lenis
requestAnimationFrame(raf);

 