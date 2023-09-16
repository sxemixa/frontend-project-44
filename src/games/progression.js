import { getRandom, basicOfGames, getRandomindex } from '../index.js';

export const progressionGame = () => {
    const purposeOfREGGame = 'What number is missing in the progression?';
    const taskForREGGame = () => {
        // задаем размер массива
        const arrayLength = getRandomindex(5, 10);
        const array = [];
        // создаем стартовую точку и число на которое
        // оно будет увеличиваться
        const firstNumber = getRandom(14);
        const increase = getRandom(10);
        // формируем массив размером от 5, до 10
        for (let index = 0; index < arrayLength; index++) {
            // пушим в массив числа, начиная с firstNumber и увеличивая
            // следующее число на insrease
            for (let num = firstNumber; array.length < arrayLength; num += increase) {
                array.push(num);
            }
        };
        // теперь берем массив и заменяем рандомное число в нем на '..'
        const removeIndex = getRandomindex(0, array.length - 1);
        const finalArr = [...array];
        finalArr.splice(removeIndex, 1, '..');
        const question = finalArr.join(' ');



    return [question, array[removeIndex].toString()];
    }
basicOfGames(purposeOfREGGame, taskForREGGame);
};