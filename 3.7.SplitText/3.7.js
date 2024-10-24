let split = new SplitText("#split", {type: "chars"});

// Создайте анимацию и приостановите ее.
const startAnimation = gsap.from(split.chars, {
  duration: 0.5,
  y: 100,
  autoAlpha: 0,
  stagger: 0.05,
  paused: true // Приостанавливаем анимацию
});

// Получаем элемент с классом "play" (без if/else)
const play = document.querySelector(".play");

// Запуск анимации при клике на кнопку
play.addEventListener('click', () => {
  startAnimation.play();
});
