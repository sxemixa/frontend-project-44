import readlineSync from 'readline-sync';

const launchBasicOfGames = (purposeOfGame, generateGamesTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(purposeOfGame);
  // задаем число итераций повторения запуска кода
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, result] = generateGamesTask();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = result;
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. \
Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default launchBasicOfGames;
