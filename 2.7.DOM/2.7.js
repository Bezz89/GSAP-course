'use strict'

console. log(document)

    document.addEventListener('DOMContentLoaded', function() {
        const heading = document.querySelector('.h-1'); 

        heading.addEventListener('click', () => {
            console.log('clicked');
        
            if (heading.classList.contains('active')) {
                heading.classList.remove('active'); 
            } else {
                heading.classList.add('active'); 
            }
        });

    });
    


    document.addEventListener('DOMContentLoaded', function() {
        const image = document.querySelector('.hover-image');

        image.addEventListener('mouseover', () => {
            image.style.opacity = '0'; // Прозрачность 0 при наведении
        });

        image.addEventListener('mouseout', () => {
            image.style.opacity = '1'; // Возвращаем прозрачность при уходе курсора
        });
        
         });


        document.addEventListener('DOMContentLoaded', function() {
            const hoverText = document.querySelector('.hover-text');
            if (hoverText) {
                hoverText.addEventListener('mouseenter', () => {
                    console.log('hovered');
                    hoverText.classList.add('activ'); // Добавляем класс 'activ' при наведении
                });
                hoverText.addEventListener('mouseleave', () => {
                    hoverText.classList.remove('activ'); // Убираем класс 'activ' при уходе курсора
                });
            }
        });





