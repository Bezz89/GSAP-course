// let x =;

// if (x > 10) {
//     console. log("Условие верно" );
// } else {
//     console. log('Условие не верно');
// }



// let a = 5;
// let b = "10"
// let results = a + +b

// console. log(results)

// console.log(typeof a);
// console.log(typeof b);

// console. log(a+b);

// alert("привет")

// let age = prompt("Укажите свой возраст")
// let a = 10;
// let results = +age + a

// console. log(results);




let titleProject = prompt("Название проекта?");
console. log(titleProject);


let screensValue = prompt("Типы экранов? (шаблонные, с уникальным дизайном, с анимациями)");
console. log(screensValue);


let responsive = confirm("Нужен ли респонсивный сайт? (Ок = true, Отмена = false)");
console. log(responsive);

let service1 = prompt("Какой сервис нужен?");
console. log(service1);


let servicePrice1 = prompt("Сколько будет стоить сервис?")
let a = 0;
let res_servicePrice1 = +servicePrice1 + a
console. log(res_servicePrice1);



let service2 = prompt("Какой еще сервис тебе нужен?");
console. log(service2);



let servicePrice2 = prompt("Сколько будет стоить этот сервис?")
let b = 0;
let res_servicePrice2 = +servicePrice2 + b
console. log(res_servicePrice2)



let screenPrice = prompt("Сколько стоит реализация одного экрана?"); 
console. log(screenPrice)



let fullPrice = +screenPrice + res_servicePrice1 + res_servicePrice2;
console. log(fullPrice)


let percentage = 15
let servicePercentPrice = fullPrice - (fullPrice * (percentage / 100));

servicePercentPrice = Math.round(servicePercentPrice);
console.log(servicePercentPrice);






if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%");

} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("Сделаем скидку 5%");

} else if (fullPrice === 50000) {
    console.log("Цена равна 50000, сделаем скидку 10%");

} else if (fullPrice === 20000) {
    console.log("Цена равна 20000, скидка 5%");

} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");

} else if (fullPrice === 0) {
    console.log("Цена равна 0, возможно ошибка");

} else if (fullPrice < 0) {
    console.log("Что-то пошло не так, цена не может быть отрицательной");
    
} else {
    console.log("Некорректное значение");
}