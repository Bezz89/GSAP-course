const nav = document.querySelectorAll('.nav');

nav.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Выполняем анимацию прокрутки к соответствующему разделу
        gsap.to(window, {
            duration: 1,  // Длительность анимации в секундах
            scrollTo: {
                y: "#section" + (index + 1),  // Прокрутка к нужной секции
                offsetY: 100,  // Можно задать смещение, если у вас фиксированный хедер
                ease: "power2.out"  // Тип easing для плавности
            }
        });
    });
});
