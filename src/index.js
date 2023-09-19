import readlineSync from 'readline-sync';

export const getRandom = (min = 0, max = 100) => Math.round(Math.random() * (max - min) + min);

export const genBasicOfGames = (purposeOfGame, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(purposeOfGame);
  // задаем число итераций повторения запуска кода
  const iterations = 3;

  for (let i = 0; i < iterations; i += 1) {
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
