import { getRandom, basicOfGames } from '../index.js';

export const gcdGame = () => {
    const purposeOfGCDGame = 'Find the greatest common divisor of given numbers.';
    const taskForGCDGame = () => {
        const randomNumber1 = getRandom(90);
        const randomNumber2 = getRandom(90);
        const answer1 = [];
        const answer2 = [];
        const dividers = [];
        const finalDividers = [];
        const question = `${randomNumber1} ${randomNumber2}`;
        let result1 = 0;
        let result2 = 0;
        const minNumber = Math.min(randomNumber1, randomNumber2);
        const arrayDiv = [];
        
        // взять числа от 1 до минимального
        for (let index = 1; index <= randomNumber1; index++) {
            // берем только те числа, которые дают нам остаток 0
            if (randomNumber1 % index === 0) {
                // эти числа добавляем в массив
                dividers.push(index);
            }
        }
        for (let index = 0; index < dividers.length; index++) {
            const element = dividers[index];

            if (randomNumber2 % element === 0) {
                finalDividers.push(element);
            }
        }
    return [question,Math.max(...finalDividers).toString()];
    }
basicOfGames(purposeOfGCDGame, taskForGCDGame);
};