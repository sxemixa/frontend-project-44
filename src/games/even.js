import launchBasicOfGames from '../index.js';
import getRandom from '../utils.js';

const getEvenGame = () => {
  const purposeOfEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateQuestionAndAnswerForEvenGame = () => {
    const randomNumber = getRandom();

    const isEven = (num) => num % 2 === 0;

    const question = randomNumber;
    const result = isEven(randomNumber) ? 'yes' : 'no';

    return [question, result];
  };
  launchBasicOfGames(purposeOfEvenGame, generateQuestionAndAnswerForEvenGame);
};
export default getEvenGame;
