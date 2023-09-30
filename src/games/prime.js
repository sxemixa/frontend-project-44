import launchBasicOfGames from '../index.js';
import getRandomNumber from '../utils.js';

const getPrimeGame = () => {
  const purposeOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const calculatePrime = (number) => {
    let divider = 1;
    for (let num = 1; num < number; num += 1) {
      if (number % num === 0) {
        divider += 1;
      }
    }
    if (divider === 2) {
      return true;
    } return false;
  };

  const generateQuestionAndAnswerForPrimeGame = () => {
    const randomNumber = getRandomNumber();
    const question = randomNumber;
    const answer = calculatePrime(randomNumber) ? 'yes' : 'no';
    return [question, answer];
  };
  launchBasicOfGames(purposeOfPrimeGame, generateQuestionAndAnswerForPrimeGame);
};
export default getPrimeGame;
