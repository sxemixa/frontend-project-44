import launchBasicOfGames from '../index.js';
import getRandomNumber from '../utils.js';

const calculate = (number1, number2, sign) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = number1 + number2;
      return result;
    case '-':
      result = number1 - number2;
      return result;
    case '*':
      result = number1 * number2;
      return result;
    case '/':
      result = number1 / number2;
      return result;
    default:
      throw new Error(`Неизвестный знак: '${sign}'!`);
  }
};
const purposeOfCalcGame = 'What is the result of the expression?';
const getCalcGame = () => {
  const generateQuestionAndAnswerForCalcGame = () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const signs = ['+', '-', '*'];
    const randomSign = signs[getRandomNumber(0, 2)];
    const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
    return [question, (calculate(randomNumber1, randomNumber2, randomSign).toString())];
  };
  launchBasicOfGames(purposeOfCalcGame, generateQuestionAndAnswerForCalcGame);
};
export default getCalcGame;
