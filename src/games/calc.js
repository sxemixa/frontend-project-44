import { getRandom, genBasicOfGames } from '../index.js';

const initCalc = (randomNumber1, randomNumber2, randomSign, signs) => {
  let result = 0;
  if (randomSign === signs[0]) {
    result = randomNumber1 + randomNumber2;
  } else if (randomSign === signs[1]) {
    result = randomNumber1 - randomNumber2;
  } else {
    result = randomNumber1 * randomNumber2;
  }
  result = result.toString();
  return result;
};
const purposeOfCalcGame = 'What is the result of the expression?';
const getCalcGame = () => {
  const taskForCalcGame = () => {
    const randomNumber1 = getRandom();
    const randomNumber2 = getRandom();
    const signs = ['+', '-', '*'];
    const randomSign = signs[getRandom(0, 2)];
    const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
    return [question, initCalc(randomNumber1, randomNumber2, randomSign, signs)];
  };
  genBasicOfGames(purposeOfCalcGame, taskForCalcGame);
};
export default getCalcGame;
