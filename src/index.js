import readlineSync from 'readline-sync';

export const getRandom = (max) => Math.round(Math.random() * max);

export const getRandomindex = (min, max) => Math.round(Math.random() * (max - min) + min);

export const basicOfGames = (purposeOfGame, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(purposeOfGame);

  for (let i = 0; i < 3; i += 1) {
    const questionAndResult = task();

    console.log(`Question: ${questionAndResult[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = questionAndResult[1];
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};