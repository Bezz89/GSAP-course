
gsap.to('.box', {
            delay: 2,   
            duration: 2,       
            x: 200,  
            repeat: -1,
            rotation: 360,     
            ease: "power2.inOut"
            });




// Select the container and the draggable element
const draggable = document.querySelector('.Section.hero'); // Corrected selector to `.s-hero`
const scroll = document.querySelector('.ScrollDown'); // Corrected selector to `.scroll-down-icon`

// Initialize Draggable
Draggable.create(scroll, {
    // type: "y", // Uncomment if you want to restrict movement to the y-axis
    bounds: draggable,
    onRelease: function() {
        console.log("drag ended");
        gsap.to('.drag', { scale: 1 }); // Corrected the syntax of gsap.to and selector
    },
    onPress: function() {
        console.log("onPress");
        gsap.to('.drag', { scale: 0.9 }); // Corrected the syntax of gsap.to and selector
    },
    dragClickables: true // Enables click interaction with draggable elements
});




const draggableElement = document.querySelector('.Section.hero'); // Исправлено на правильный селектор
const scroll = document.querySelector('.scroll-down'); // Исправлено на правильный селектор

// Анимация для '.section-practice'
gsap.from('.section-practice', {
    autoAlpha: 0,
    ease: "power1.out",
    duration: 2,
    delay: 3
});

// Анимация для '.text-anim'
gsap.from('.text-anim', {
    autoAlpha: 0,
    y: '6vw',
    ease: "power1.out",
    duration: 2,
    delay: 3.5,
    stagger: 0.5
});

// Инициализация Draggable для scroll
Draggable.create(scroll, {
    // type: "y", // Раскомментируйте, если нужно ограничить движение по оси Y
    bounds: draggableElement, // Ограничиваем перемещение в пределах элемента draggableElement
    onRelease: function() {
        console.log("Drag ended");
        gsap.to(scroll, { scale: 1 }); // Возвращаем масштаб к 1
    },
    onPress: function() {
        console.log("OnPress");
        gsap.to(scroll, { scale: 0.9 }); // Уменьшаем масштаб при нажатии
    },
    dragClickables: true // Включает возможность клика по перетаскиваемым элементам
});

scroll.addEventListener('click', () => {
  gsap.to(window, {
    duration: 0.8,
    scrollTo: {
      y: "#img", // Целевой элемент для прокрутки
      offsetY: 0 // Смещение, если есть фиксированный хедер
    }
  });
});

// Создание таймлайна GSAP с использованием ScrollTrigger
let imgSection = gsap.timeline({
    scrollTrigger: {
        trigger: "#img", // Элемент, который будет триггером для анимации
        scrub: true,                // Плавный скролл
        pin: true,                  // Закрепление секции во время прокрутки
        start: "top top",           // Начало анимации, когда верх элемента достигает верхней части окна
        end: "+=300%",              // Длина секции, после которой анимация заканчивается
    }
});

// Анимации для элементов
imgSection
    .from("#img", { scale: 1.3, duration: 1 }) // Анимация для изображения (изменение масштаба)
    .from("#left", { x: '-50vw', duration: 1 })     // Анимация для элемента #left (выдвижение с левой стороны)
    .from("#right", { x: '50vw', duration: 1 });    // Анимация для элемента #right (выдвижение с правой стороны)



 60  
  
  // Animation for .line_1 in yellow section (make sure it's a different element from the one in other sections)
  yellowSectionAnimation.from(".line_1", { 
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none" 
  });

  


  44// GSAP Animation for .boxes elements
gsap.to(".boxes", {
    scrollTrigger: {
      trigger: '.section_blue', 
      scrub: true, 
      pin: true,
      start: "top top", 
      end: "+=200%", 
      markers: true
    },
    x: '70vh',
    stagger: 0.5, 
    backgroundColor: 'purple', 
    ease: "none"
  });



// Timeline Animation for yellow section
let yellowSectionAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-yellow",
      scrub: true,
      pin: true,
      markers: true,
      start: "top top",
      end: "+=200%"
    }
  });

  // Animation for .circle
yellowSectionAnimation.to(".circle", { 
    scale: 1.2, 
    autoAlpha: 1, 
    ease: "power2", 
    stagger: 0.5 // delay between circles
  });
  
  // Animation for .text-timeline
  yellowSectionAnimation.from(".text-timeline", { 
    y: "5vw", 
    autoAlpha: 0 
  });


  // Animation for .line_22
yellowSectionAnimation.from(".line_22", { 
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none"
  });
