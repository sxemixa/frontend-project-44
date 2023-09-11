import { getRandom, basicOfGames } from '../index.js';

const evenGame = () => {
  const purposeOfEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskForEvenGame = () => {
    const randomNumber = getRandom(90);

    const isEven = (num) => num % 2 === 0;

    const question = randomNumber;
    const result = isEven(randomNumber) ? 'yes' : 'no';

    return [question, result];
  };
  basicOfGames(purposeOfEvenGame, taskForEvenGame);
};
export default evenGame;