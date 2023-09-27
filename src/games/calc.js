import { launchBasicOfGames } from '../index.js';
import { getRandom } from '../utils.js';

const calculate = (Number1, Number2, sign) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = Number1 + Number2;
      break;
    case '-':
      result = Number1 - Number2;
      break;
    case '*':
      result = Number1 * Number2;
      break;
    case '/':
      result = Number1 / Number2;
      break;
    default:
      break;
  }
  return result;
};
const purposeOfCalcGame = 'What is the result of the expression?';
const getCalcGame = () => {
  const generateQuestionAndAnswerForCalcGame = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const signs = ['+', '-', '*'];
    const randomSign = signs[getRandom(0, 2)];
    const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
    return [question, (calculate(randomNumber1, randomNumber2, randomSign).toString())];
  };
  launchBasicOfGames(purposeOfCalcGame, generateQuestionAndAnswerForCalcGame);
};
export default getCalcGame;
