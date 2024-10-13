// 'use strict'

// console. log (document);

// const heading = document.querySelector ('h1')

// heading.addEventListener('click', ()=>{
//     console. log('cliked');
//      heading.classList.add('is-active')
//     // // heading.classList.toggle('is-active')
//     console. log('h1') ; 
   

// })


// {/* <script>
//   document.addEventListener('DOMContentLoaded', () => {
//     const heading = document.getElementById('my-heading');
//     if (heading) {
//       heading.addEventListener('mouseenter', () => {
//         heading.style.color = 'red';
//         heading.style.fontSize = '55px';
//       });
//       heading.addEventListener('mouseleave', () => {
//         heading.style.color = '';
//         heading.style.fontSize = '32px';
//       });
//     }
//   });
// </script> */}




<script>
    document.addEventListener('DOMContentLoaded', function() {
        const heading = document.querySelector('.h-1'); // Замените .h-1 на ваш класс заголовка

        heading.addEventListener('click', () => {
            console.log('clicked');
            // Меняем цвет и размер заголовка
            if (heading.classList.contains('active')) {
                heading.classList.remove('active'); // Убираем класс
            } else {
                heading.classList.add('active'); // Добавляем класс
            }
        });

        // Добавляем CSS для изменения стиля
        const style = document.createElement('style');
        style.innerHTML = `
            .active {
                color: red;
                font-size: 55px;
            }
        `;
        document.head.appendChild(style);
        
 
    });
</script>