import { getRandom, genBasicOfGames } from '../index.js';

const getEvenGame = () => {
  const purposeOfEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskForEvenGame = () => {
    const randomNumber = getRandom();

    const isEven = (num) => num % 2 === 0;

    const question = randomNumber;
    const result = isEven(randomNumber) ? 'yes' : 'no';

    return [question, result];
  };
  genBasicOfGames(purposeOfEvenGame, taskForEvenGame);
};
export default getEvenGame;
