import { getRandom, basicOfGames } from '../index.js';

export const primeGame = () => {
    const purposeOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'
    const taskForPrimeGame = () => {
        // простое число это число которое делится только на 1 и само себя
        // создаем рандомное число
        const randomNumber = getRandom(100);
        // сделаем счетчик чисел, при котором будет всего 2 варинта
        // получения 0 при делении без остатка
        let divider = 1;
        let result = '';
        const question = randomNumber;
        for (let num = 1; num < randomNumber; num++) {
            if (randomNumber % num === 0) {
              divider += 1;
            }
          };
          if (divider === 2) {
            result = 'yes';
          } else {
            result = 'no';
          };
        return [question, result];
    };
    basicOfGames(purposeOfPrimeGame, taskForPrimeGame);
};