import readlineSync from 'readline-sync';

export const launchBasicOfGames = (purposeOfGame, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(purposeOfGame);
  // задаем число итераций повторения запуска кода
  const countofiterations = 3;

  for (let i = 0; i < countofiterations; i += 1) {
    const questionAndResult = task();

    console.log(`Question: ${questionAndResult[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = questionAndResult[1];
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. 
        Correct answer was '${rightAnswer}'. \nLet's try again, 
        ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
