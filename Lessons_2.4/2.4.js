const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};

let servicePrice1 = 5000;
let servicePrice2 = 3000;
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
console.log("Стоимость всех дополнительных услуг:", allServicePrices);

function getFullPrice() {
    return screenPrice + allServicePrices;
}
let screenPrice = 15000;
let fullPrice = getFullPrice(screenPrice, allServicePrices);
console.log("Полная стоимость проекта:", fullPrice);

function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
let titleProject = "ОценКа Стоимости";
let TitleProject = getTitle(titleProject);
console.log("Отформатированное название проекта:", TitleProject);

function getServicePercentPrices() {
    let servicePercentPrice = fullPrice - (fullPrice * percentage / 100);
    return Math.round(servicePercentPrice); // Округляем результат
}
let percentage = 15;
let servicePercentPrice = getServicePercentPrices(fullPrice, percentage);
console.log("Стоимость после вычета процента подрядчику:", servicePercentPrice);

function getRollbackMessage() {
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
