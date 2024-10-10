
// Функция для получения стоимости всех дополнительных услуг
const getAllServicePrices = function(servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
};

// Получаем значения от пользователя через prompt
let servicePrice1 = +prompt("Сколько стоит первая услуга?");
let servicePrice2 = +prompt("Сколько стоит вторая услуга?");

// Проверяем, чтобы введенные данные были числами
while (isNaN(servicePrice1) || isNaN(servicePrice2)) {
    alert("Введите корректную стоимость для услуг (только числа).");
    servicePrice1 = +prompt("Сколько стоит первая услуга?");
    servicePrice2 = +prompt("Сколько стоит вторая услуга?");
}

// Вызываем функцию для получения стоимости всех услуг
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
console.log("Стоимость всех дополнительных услуг:", allServicePrices);

// Функция для получения полной стоимости проекта
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

// Получаем стоимость верстки от пользователя
let screenPrice = +prompt("Сколько стоит верстка одного экрана?");

// Проверяем, чтобы введенные данные были числами
while (isNaN(screenPrice)) {
    alert("Введите корректную стоимость для экрана (только число).");
    screenPrice = +prompt("Сколько стоит верстка одного экрана?");
}

// Вызываем функцию для расчета полной стоимости проекта
let fullPrice = getFullPrice(screenPrice, allServicePrices);
console.log("Полная стоимость проекта:", fullPrice);

// Функция для форматирования названия проекта
function getTitle(titleProject) {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

// Получаем название проекта от пользователя
let titleProject = prompt("Введите название проекта:");

// Вызываем функцию для получения отформатированного названия проекта
let formattedTitleProject = getTitle(titleProject);
console.log("Отформатированное название проекта:", formattedTitleProject);

// Функция для расчета стоимости проекта после вычета процента подрядчику
function getServicePercentPrices(fullPrice, percentage) {
    let servicePercentPrice = fullPrice - (fullPrice * percentage / 100);
    return Math.round(servicePercentPrice); // Округляем результат
}

// Получаем процент для подрядчика от пользователя
let percentage = +prompt("Какой процент отдать подрядчику?");

// Проверяем, чтобы введенные данные были числами
while (isNaN(percentage)) {
    alert("Введите корректный процент (только число).");
    percentage = +prompt("Какой процент отдать подрядчику?");
}

// Вызываем функцию для расчета стоимости после вычета процента
let servicePercentPrice = getServicePercentPrices(fullPrice, percentage);
console.log("Стоимость после вычета процента подрядчику:", servicePercentPrice);

// Функция для вывода сообщения о скидке
function getRollbackMessage(fullPrice) {
    if (fullPrice > 50000) {
        console.log("Сделаем скидку 10%");
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
        console.log("Сделаем скидку 5%");
    } else if (fullPrice > 0 && fullPrice <= 20000) {
        console.log("Скидка не предусмотрена");
    } else if (fullPrice === 0) {
        console.log("Стоимость проекта равна 0");
    } else {
        console.log("Что-то пошло не так");
    }
}

// Вызываем функцию для вывода сообщения о скидке
getRollbackMessage(fullPrice);
