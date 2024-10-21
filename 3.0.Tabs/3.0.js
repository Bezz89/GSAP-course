

const tabMenu = document.querySelectorAll('.tab-link')
const tabContent = document.querySelectorAll('.tab-pane')
const textNumb = document.querySelectorAll('.text-numb' )

console. log(tabMenu);
console. log(tabContent);

tabMenu.forEach((tabLink, index) => {
    tabLink.addEventListener('click', () => {
        tabContent.forEach(tabItem => {
            tabItem.classList.remove('active')
         
        })
          
        tabContent[index].classList.add('active')
       
        
    })
})

textNumb.forEach((item, index) => {
    item.textContent = index +1
})




    document.addEventListener('DOMContentLoaded', function() {
        const tabLinks = document.querySelectorAll('.tab-link');
        const tabItems = document.querySelectorAll('.tab-item');

        tabLinks.forEach((tabLink, index) => {
            tabLink.addEventListener('click', () => {
                // Удаляем класс is-active у всех кнопок
                tabLinks.forEach(link => {
                    link.classList.remove('is-active');
                });

                // Удаляем класс is-active у всех элементов контента
                tabItems.forEach(item => {
                    item.classList.remove('is-active');
                });

                // Добавляем класс is-active к текущей кнопке и соответствующему контенту
                tabLink.classList.add('is-active');
                tabItems[index].classList.add('is-active');
            });
        });
    });
