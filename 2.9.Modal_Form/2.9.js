const modalWrap = document.querySelector('.modal_wrap');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close_btn');
const textBlock2 = document.querySelector('.text-block-2');
const openModalButton = document.querySelector('.form_btn');

document.addEventListener('DOMContentLoaded', function() {
openModalButton.addEventListener('click', () => {
    modalWrap.style.display = 'flex'; 
});


modalWrap.addEventListener('click', (event) => {
    // Закрываем, если клик не внутри модального окна
    if (event.target === modalWrap) {
        modalWrap.style.display = 'none';
    }
});


closeButton.addEventListener('click', () => {
    modalWrap.style.display = 'none'; // Скрываем модалку
});


textBlock2.addEventListener('click', () => {
    modalWrap.style.display = 'none'; // Скрываем модалку
});
});