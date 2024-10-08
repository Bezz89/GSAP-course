// let num = 0

// for(let i = 10; i >= num; i--) {
// console. log (i)
// }






const checkIsNumber = function(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};


let screenPrice;
do {
    screenPrice = prompt("Сколько это будет стоить?");
} while (!checkIsNumber(screenPrice) && screenPrice !== null && screenPrice.trim() !== '');


const getAllServicePrices = function() {
    let totalServicePrice = 0;
    for (let i = 1; i <= 2; i++) {
        let servicePrice;
        do {
            servicePrice = prompt(`Сколько будет стоить сервис ${i}?`);
        } while (!checkIsNumber(servicePrice) && servicePrice !== null && servicePrice.trim() !== '');
        totalServicePrice += parseFloat(servicePrice);
    }
    return totalServicePrice;
};


const allServicePrices = getAllServicePrices();


function getFullPrice(screenPrice, allServicePrices) {
    return parseFloat(screenPrice) + allServicePrices;
}


const fullPrice = getFullPrice(screenPrice, allServicePrices);


function getTitle(titleProject) {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}


const titleProject = getTitle(prompt("Название проекта?"));
console.log("Название проекта:", titleProject);


function getServicePercentPrices(fullPrice, percentage) {
    return Math.round(fullPrice - (fullPrice * (percentage / 100)));
}


const servicePercentPrice = getServicePercentPrices(fullPrice, 10);
console.log("Стоимость с учетом процента подрядчику:", servicePercentPrice);


function getRollbackMessage(fullPrice) {
    if (fullPrice > 50000) {
        console.log("Сделаем скидку в 10%");
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
        console.log("Сделаем скидку в 5%");
    } else if (fullPrice > 0 && fullPrice <= 20000) {
        console.log("Скидка не предусмотрена");
    } else if (fullPrice <= 0) {
        console.log("Что-то пошло не так");
    } else if (fullPrice === 20000 || fullPrice === 50000) {
        console.log("Цена ровно 20000 или 50000, возможно, стоит пересчитать");
    }
}


getRollbackMessage(fullPrice);