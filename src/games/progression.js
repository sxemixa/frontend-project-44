import { getRandom, genBasicOfGames } from '../index.js';

const getProgressionGame = () => {
  const purposeOfREGGame = 'What number is missing in the progression?';
  const taskForREGGame = () => {
    // задаем размер массива
    const arrayLength = getRandom(5, 10);
    const array = [];
    // создаем стартовую точку и число на которое
    // оно будет увеличиваться
    const firstNumber = getRandom();
    const increase = getRandom();
    // формируем массив размером от 5, до 10
    for (let index = 0; index < arrayLength; index += 1) {
      // пушим в массив числа, начиная с firstNumber и увеличивая
      // следующее число на insrease
      for (let num = firstNumber; array.length < arrayLength; num += increase) {
        array.push(num);
      }
    }
    // теперь берем массив и заменяем рандомное число в нем на '..'
    const removeIndex = getRandom(0, array.length - 1);
    const finalArr = [...array];
    finalArr.splice(removeIndex, 1, '..');
    const question = finalArr.join(' ');

    return [question, array[removeIndex].toString()];
  };
  genBasicOfGames(purposeOfREGGame, taskForREGGame);
};
export default getProgressionGame;
