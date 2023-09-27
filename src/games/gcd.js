import launchBasicOfGames from '../index.js';
import getRandom from '../utils.js';

const getGcdGame = () => {
  const purposeOfGCDGame = 'Find the greatest common divisor of given numbers.';
  const countGCD = (number1, number2) => {
    const dividers = [];
    const finalDividers = [];
    for (let index = 1; index <= number1; index += 1) {
      // берем только те числа, которые дают нам остаток 0
      if (number1 % index === 0) {
        // эти числа добавляем в массив
        dividers.push(index);
      }
    }
    for (let index = 0; index < dividers.length; index += 1) {
      const element = dividers[index];

      if (number2 % element === 0) {
        finalDividers.push(element);
      }
    }
    return Math.max(...finalDividers);
  };

  const generateQuestionAndAnswerForGCDGame = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const question = `${randomNumber1} ${randomNumber2}`;
    return [question, (countGCD(randomNumber1, randomNumber2)).toString()];
  };
  launchBasicOfGames(purposeOfGCDGame, generateQuestionAndAnswerForGCDGame);
};
export default getGcdGame;
