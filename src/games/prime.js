import launchBasicOfGames from '../index.js';
import getRandom from '../utils.js';

const getPrimeGame = () => {
  const purposeOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const calculatePrime = (number) => {
    let divider = 1;
    let result = '';
    for (let num = 1; num < number; num += 1) {
      if (number % num === 0) {
        divider += 1;
      }
    }
    if (divider === 2) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };

  const generateQuestionAndAnswerForPrimeGame = () => {
    const randomNumber = getRandom();
    const question = randomNumber;
    return [question, calculatePrime(randomNumber)];
  };
  launchBasicOfGames(purposeOfPrimeGame, generateQuestionAndAnswerForPrimeGame);
};
export default getPrimeGame;
