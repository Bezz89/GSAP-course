{/* <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>

<script src="/3.2.gsap.from_+_Lenis/3.2.js"></script> */}



    // Получаем все элементы с классом .boxes
let boxes = document.querySelectorAll('.boxes');

// Настраиваем анимацию с GSAP для всех элементов boxes
gsap.to(boxes, {
  scrollTrigger: {
    trigger: '.section_blue',  // Элемент, который активирует анимацию при его появлении в зоне видимости
    scrub: true,               // Синхронизация анимации с прокруткой. Чем дальше прокрутка, тем больше прогресс анимации.
    pin: true,                 // Закрепляет элемент '.section_blue', чтобы он оставался на месте во время анимации.
    start: "top top",          // Анимация начинается, когда верхняя часть '.section_blue' касается верхней части окна.
    end: "+=100%",             // Анимация продолжается, пока не будет проскроллено 100% высоты экрана.
    markers: true              // Включает визуальные маркеры для отладки (показывает начало и конец анимации).
  },
  x: '70vh',                   // Элементы сдвигаются по оси X на 70vh (высота вьюпорта).
  stagger: 0.5,                // Каждый элемент анимируется с задержкой в 0.5 секунд относительно предыдущего.
  backgroundColor: 'purple',   // Фон каждого элемента изменяется на фиолетовый.
  ease: "none"                 // Анимация идет линейно, без замедления или ускорения.
});
