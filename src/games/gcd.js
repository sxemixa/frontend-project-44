import { getRandom, genBasicOfGames } from '../index.js';

const getGcdGame = () => {
  const purposeOfGCDGame = 'Find the greatest common divisor of given numbers.';
  const taskForGCDGame = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const dividers = [];
    const finalDividers = [];
    const question = `${randomNumber1} ${randomNumber2}`;
    // взять числа от 1 до минимального
    for (let index = 1; index <= randomNumber1; index += 1) {
      // берем только те числа, которые дают нам остаток 0
      if (randomNumber1 % index === 0) {
        // эти числа добавляем в массив
        dividers.push(index);
      }
    }
    for (let index = 0; index < dividers.length; index += 1) {
      const element = dividers[index];

      if (randomNumber2 % element === 0) {
        finalDividers.push(element);
      }
    }
    return [question, Math.max(...finalDividers).toString()];
  };
  genBasicOfGames(purposeOfGCDGame, taskForGCDGame);
};
export default getGcdGame;
