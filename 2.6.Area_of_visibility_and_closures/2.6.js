const gameBotFunction = function () {
    // Генерация случайного числа от 1 до 100
    let mysteryNumber = randomGenerate(1, 100);
    let attempts = 5; // Количество попыток

    // Функция для генерации случайного числа
    function randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Функция проверки, является ли ввод числом
    function checkIsNumber(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    // Функция с рекурсией для угадывания числа
    const guessNumber = function (attemptsLeft) {
        if (attemptsLeft === 0) {
            alert("У вас закончились попытки. Вы проиграли!");
            return;
        }

        let userAnswer = prompt(`Угадайте число от 1 до 100. Осталось попыток: ${attemptsLeft}`);

        if (userAnswer === null) {
            alert("Вы завершили игру");
            return;
        }

        userAnswer = userAnswer.trim();

        if (!checkIsNumber(userAnswer)) {
            alert("Введите корректное число.");
            return guessNumber(attemptsLeft); // Рекурсия
        }

        let answerNum = parseFloat(userAnswer);

        if (answerNum === mysteryNumber) {
            alert("Поздравляем! Вы угадали число!");
        } else if (answerNum > mysteryNumber) {
            alert("Загаданное число меньше.");
            guessNumber(attemptsLeft - 1);
        } else {
            alert("Загаданное число больше.");
            guessNumber(attemptsLeft - 1);
        }
    };

    // Начало игры
    guessNumber(attempts);
};

// Запуск игры
gameBotFunction();
