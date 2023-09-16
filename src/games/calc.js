import { getRandom, basicOfGames } from '../index.js';

const calcGame = () => {
  const purposeOfCalcGame = 'What is the result of the expression?';

  const taskForCalcGame = () => {
    const randomNumber1 = getRandom(90);
    const randomNumber2 = getRandom(10);
    const signs = ['+', '-', '*'];
    const randomSign = signs[getRandom(2)];

    const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;

    let result = 0;
    if (randomSign === signs[0]) {
      result = randomNumber1 + randomNumber2;
    } else if (randomSign === signs[1]) {
      result = randomNumber1 - randomNumber2;
    } else {
      result = randomNumber1 * randomNumber2;
    }
    result = result.toString();

    return [question, result];
  };
  basicOfGames(purposeOfCalcGame, taskForCalcGame);
};
export default calcGame;
