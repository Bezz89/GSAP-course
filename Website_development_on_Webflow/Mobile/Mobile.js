MatchSetup.add("(max-width: 799px)", () => {
    console.log("Mobile setup");
    // mobile setup code here...
    console.log('Проигрываем МОБ анимацию');
  
//Section Hero

  // Определяем длительность и easing
  const duration = 1.2;
  const easing = 'power3.inOut';
  
  // Мобильная анимация для тегов
  const mobileTagsAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.header-menu',  // Указываем правильный триггер
    }
  });
  
  mobileTagsAnimation
    .from('.header-menu>.row-8>.nav-link', {
      autoAlpha: 0,
      yPercent: 15,
      stagger: 0.2,  // Плавное появление элементов с задержкой
      duration: duration,
      ease: easing
    })
    .from('.content-hero', {
      yPercent: 15,
      autoAlpha: 0,
      duration: duration,
      ease: easing
    }, 1.5);  // Время задержки перед анимацией
  
  // Мобильные изображения
  gsap.from('#hero-image', {
    scrollTrigger: {
      trigger: '#hero-image',  // Указываем правильный триггер
      start: 'top 50%',  // Начало анимации на 15% прокрутки
      //markers: true,  // Для отладки
    },
    yPercent: 15,
    autoAlpha: 0, // Начальная прозрачность
    duration: duration,
  });

//Section What-We_Do

    gsap.from("#step-by-step", { // Убедитесь, что используется правильный класс ".service"
    scrollTrigger: {
      trigger: "#step-by-step", // Элемент, который запускает анимацию
      scrub: true, // Плавная привязка анимации к прокрутке
      start: 'top 50%', // Анимация начнется, когда верх элемента достигнет середины экрана (50% высоты окна)
      //markers: true, // Добавляет маркеры для отладки
    },
    yPercent: 15, // Смещение элемента по вертикали на 15%
    autoAlpha: 0, // Начальная прозрачность (скрыт элемент)
    stagger: 0.3, // Задержка между началом анимации для каждого элемента
  });
  
//Section About
  
  // Для текста
  // Устанавливаем начальные стили через gsap.set() (элементы скрыты и сдвинуты вверх)
  gsap.set("#text-about", { autoAlpha: 0, yPercent: 15 });
  
  ScrollTrigger.batch("#text-about", {
    onEnter: batch => {
      console.log("Animating text batch:", batch);
      // Анимация: элементы становятся видимыми и двигаются вниз
      gsap.to(batch, {
        autoAlpha: 1,  // Переводим элементы в видимость (анимируем от 0 к 1)
        yPercent: 0,   // Переводим элементы в начальное положение (анимируем от 15 к 0)
        duration: 1,  // Длительность анимации
        ease: "power3.out",  // Тип easing для анимации
        stagger: 0.3,  // Элементы анимируются по очереди
        //markers: true, // Включаем маркеры для отладки
      });
    },
  });
  
  // Для элементов с классом .space-between
  gsap.set(".space_between", { autoAlpha: 0, y: '1rem' });
  
  ScrollTrigger.batch(".space_between", {
    onEnter: batch => {
      console.log("Animating space-between batch:", batch);
      gsap.to(batch, {
        autoAlpha: 1,  // Переводим элементы в видимость
        y: '0',        // Перемещаем элементы в их нормальное положение
        stagger: 0.3,  // Анимация по очереди
        duration: 1,
        ease: "power3.out",
        //markers: true,
      });
    },
  });
  
  // Настроим начальные стили для #aboutImagesContainer и его изображений
  gsap.set("#aboutImagesContainer", { autoAlpha: 0, width: '0%' });
  
  // Анимация для #aboutImagesContainer с использованием batch
  ScrollTrigger.batch("#aboutImagesContainer", {
    onEnter: batch => {
      console.log("Animating images batch:", batch);
      batch.forEach((item, index) => {
        const widthValue = item.getAttribute('data-width');  // Получаем ширину из data-атрибута
        gsap.to(item, {
          autoAlpha: 1,          // Элементы становятся видимыми
          width: widthValue,     // Устанавливаем ширину из data-атрибута
          delay: index * 0.3,    // Элементы анимируются по очереди
          duration: 1.5,         // Длительность анимации
          ease: "power3.out",    // Плавность анимации
          //markers: true,         // Для отладки
        });
      });
    },
    start: "top bottom", // Когда элемент входит в область видимости
    //markers: true,       // Включаем маркеры для отладки
  });

//Section Aproach (dropdown)
  
  gsap.set('.dropdown-list', { autoAlpha: 0, height: 0 });
  const dropdowns = document.querySelectorAll('.dropdown');
  const primaryDarkColor = '#51B613'; // Установим HEX цвет
  dropdowns.forEach((dropdown, index) => {
      const dropdownContent = dropdown.querySelector('.dropdown-list');
      const heading3 = dropdown.querySelectorAll('.heading3'); 
      const heading4 = dropdown.querySelectorAll('.heading4');
      if (!dropdownContent) {
        console.error(`Не удалось найти '.dropdown-list' в dropdown №${index + 1}`);
          return;
      }
      let dropdownAnimation = gsap.timeline({ paused: true })
          .to(dropdownContent, {
              height: 'auto',
              duration: 0.6,
              ease: 'power3.inOut',
              autoAlpha: 1
          });
      dropdownAnimation.reverse();
      dropdown.addEventListener('click', () => {
          if (dropdownAnimation.progress() === 0 || dropdownAnimation.reversed()) {
              dropdownAnimation.play();
              heading3.forEach(h3 => {
                  h3.style.color = primaryDarkColor;
              });
              heading4.forEach(h4 => {
                  h4.style.color = primaryDarkColor;
              });
          } else {
              dropdownAnimation.reverse();
              heading3.forEach(h3 => {
                  h3.style.color = ''; 
              });
              heading4.forEach(h4 => {
                  h4.style.color = ''; 
              });
          }
      });
  });
  dropdowns.forEach((dropdownItem, dropdownIndex) => {
      const headingDropdownNumber = dropdownItem.querySelectorAll('h4');
      headingDropdownNumber.forEach((headingItem) => {
          const formatNumberDropdown = (dropdownIndex + 1) < 10 ? `0${dropdownIndex + 1}` : `${dropdownIndex + 1}`;
          headingItem.textContent = formatNumberDropdown;
      });
  });
  
//Section Projects 

  // Скрываем элементы по умолчанию
  gsap.set("#approach-discript, #img-gallery, .img-awards, #awwards, #footer-link, #footer-content, #social", {
    autoAlpha: 0,
    yPercent: 35 // Предполагаем, что элементы изначально сдвинуты вниз
  });
  
  // Устанавливаем начальное состояние только для #img-gallery
  gsap.set("#img-gallery", {
    scale: 1.2 // Начальное состояние масштабирования для галереи
  });
  
  // Анимация для #approach-discript
  gsap.to("#approach-discript", {
    scrollTrigger: {
      trigger: "#approach-discript",
      once: true, // Анимация срабатывает только один раз
    },
    yPercent: 0,
    autoAlpha: 1,
    ease: easing,
    duration: duration,
  });
  
  // Анимация для #img-gallery
  ScrollTrigger.batch("#img-gallery", {
    onEnter: batch => {
      gsap.to(batch, {
        autoAlpha: 1,
        yPercent: 0,
        ease: easing,
        duration: duration,
      });
  
      gsap.to(batch, {
        scale: 1, // Возвращаем масштаб к 1
        ease: easing,
        duration: duration,
        delay: 0.5,
      });
    },
    once: true, // Анимация срабатывает только один раз
  });
  

//Section Awwards

  // Анимация для .img-awards
  ScrollTrigger.batch(".img-awards", {
    onEnter: batch => {
      gsap.to(batch, {
        scale: 1,
        ease: easing,
        duration: duration,
        autoAlpha: 1,
      });
    },
    once: true, // Анимация срабатывает только один раз
  });
  
  // Анимация для #awwards
  gsap.to("#awwards", {
    scrollTrigger: {
      trigger: "#awwards",
      start: "top bottom",
      end: "bottom top",
      once: true, // Анимация срабатывает только один раз
    },
    autoAlpha: 1,
    yPercent: 0,
    duration: duration,
    ease: easing,
    stagger: 0.2,
  });

//Section Footer
  
  // Анимация для #footer-link
  ScrollTrigger.batch("#footer-link", {
    onEnter: batch => {
      gsap.to(batch, {
        ease: easing,
        duration: duration,
        stagger: 0.3,
        yPercent: 0,
        autoAlpha: 1,
      });
    },
    once: true, // Анимация срабатывает только один раз
  });
  
  // Анимация для #footer-content
  ScrollTrigger.batch("#footer-content", {
    onEnter: batch => {
      gsap.to(batch, {
        ease: easing,
        duration: duration,
        stagger: 0.3,
        yPercent: 0,
        autoAlpha: 1,
      });
    },
    once: true, // Анимация срабатывает только один раз
  });
  
  // Анимация для #social
  ScrollTrigger.batch("#social", {
    onEnter: batch => {
      gsap.to(batch, {
        ease: easing,
        duration: duration,
        stagger: 0.3,
        autoAlpha: 1,
      });
    },
    once: true, // Анимация срабатывает только один раз
  });
  
//Menu (dropdown)  
  
  const menuLinks = document.querySelectorAll('#link-menu'); 
  const getMenuAnimation = gsap.timeline({ paused: true });
  
  getMenuAnimation
    .from('.menu', {
      yPercent: -100, 
      duration: 0.5, 
      ease: 'power3.out', 
    })
    .from('#link-menu', {
      autoAlpha: 0, 
      stagger: 0.3, 
      y: '-3rem', 
      duration: 0.5,
      ease: 'power3.out',
    })
    .from('.copyright', {
      autoAlpha: 0, 
      duration: 0.5,
      ease: 'power3.out',
    });
  
  
  const menuButton = document.querySelector('.vectors_wrapper-2'); 
  let isMenuOpen = false; 
  
  menuButton.addEventListener('click', () => {
    if (isMenuOpen) {
      getMenuAnimation.reverse(); 
    } else {
      getMenuAnimation.play(); 
    }
    isMenuOpen = !isMenuOpen;
  });
  
  
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        getMenuAnimation.reverse(); 
        isMenuOpen = false;
      }
    });
  });
  
  //mobile end
  });