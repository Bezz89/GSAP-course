
const gameBotFunction = function () {
    // Функция для генерации случайного числа
    const randomGenerate = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Загадали число от 1 до 100
    let mysteryNumber = randomGenerate(1, 100);
    let attempts = 5; // Количество попыток

    // Функция для проверки, является ли ввод числом
    const checkIsNumber = function (input) {
        return !isNaN(parseFloat(input)) && isFinite(input);
    };

    // Рекурсивная функция для угадывания числа
    const getResult = function () {
        if (attempts > 0) {
            let answerNum;

            while (true) {
                answerNum = prompt("Угадайте число от 1 до 100:");

                // Если пользователь нажал "Отмена"
                if (answerNum === null) {
                    alert("Вы завершили игру.");
                    return; // Завершаем игру
                }

                answerNum = answerNum.trim(); // Удаляем лишние пробелы

                // Проверка на число
                if (checkIsNumber(answerNum)) {
                    answerNum = Number(answerNum); // Преобразуем в число

                    // Сравнение введенного числа с загаданным
                    if (answerNum === mysteryNumber) {
                        alert("Поздравляем! Вы угадали число!");
                        return; // Завершаем игру
                    } else {
                        attempts--; // Уменьшаем количество попыток
                        if (answerNum < mysteryNumber) {
                            alert("Слишком низко! Осталось попыток: " + attempts);
                        } else {
                            alert("Слишком высоко! Осталось попыток: " + attempts);
                        }

                        // Проверка на окончание попыток
                        if (attempts === 0) {
                            alert("Попытки закончились! Загаданное число было: " + mysteryNumber);
                            // Спрашиваем, хочет ли пользователь попробовать снова
                            if (confirm("Может, хотите попробовать снова?")) {
                                attempts = 5; // Сброс количества попыток
                                mysteryNumber = randomGenerate(1, 100); // Генерируем новое число
                                getResult(); // Запускаем функцию снова
                            } else {
                                alert("Вы завершили игру.");
                                return; // Завершаем действие
                            }
                        }
                    }
                } else {
                    alert("Пожалуйста, введите корректное число!");
                }
            }
        }
    };

    getResult(); // Запускаем основную логику игры
};

// Запускаем игру
gameBotFunction();

