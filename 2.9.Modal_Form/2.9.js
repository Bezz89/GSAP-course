const modalWrap = document.querySelector('.modal_wrap');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close_btn');
const textBlock2 = document.querySelector('.text-block-2');
const openModalButton = document.querySelector('.form_btn');


document.addEventListener('DOMContentLoaded', function() {
openModalButton.addEventListener('click', () => {
    modalWrap.style.display = 'flex'; 
});

// Закрытие модального окна при клике на overlay, close_btn или text-block-2
modalWrap.addEventListener('click', (event) => {
    // Если клик на оверлее или на элементах закрытия (кнопка закрытия или Text Block 2)
    if (event.target === modalWrap || event.target.closest('.close_btn') || event.target.closest('.text-block-2')) {
        modalWrap.style.display = 'none'; // Скрываем модалку
    }
});
});