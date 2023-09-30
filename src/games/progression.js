import launchBasicOfGames from '../index.js';
import getRandomNumber from '../utils.js';

const getProgressionGame = () => {
  const purposeOfREGGame = 'What number is missing in the progression?';
  const createProgression = (length, step, number) => {
    const array = [];
    for (let index = 0; index < length; index += 1) {
      for (let num = number; array.length < length; num += step) {
        array.push(num);
      }
    }
    return array;
  };

  const generateQuestionAndAnswerForREGGame = () => {
    const arrayLength = getRandomNumber(5, 10);
    const increase = getRandomNumber();
    const firstNumber = getRandomNumber();
    const funcResult = createProgression(arrayLength, increase, firstNumber);
    const removeIndex = getRandomNumber(0, funcResult.length - 1);
    const finalArr = [...funcResult];
    finalArr.splice(removeIndex, 1, '..');
    const question = finalArr.join(' ');

    return [question, funcResult[removeIndex].toString()];
  };
  launchBasicOfGames(purposeOfREGGame, generateQuestionAndAnswerForREGGame);
};
export default getProgressionGame;
