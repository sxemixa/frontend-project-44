import launchBasicOfGames from '../index.js';
import getRandomNumber from '../utils.js';

const isEvenNumber = (num) => num % 2 === 0;

const getEvenGame = () => {
  const purposeOfEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateQuestionAndAnswerForEvenGame = () => {
    const randomNumber = getRandomNumber();
    const question = randomNumber;
    const result = isEvenNumber(randomNumber) ? 'yes' : 'no';

    return [question, result];
  };
  launchBasicOfGames(purposeOfEvenGame, generateQuestionAndAnswerForEvenGame);
};
export default getEvenGame;
