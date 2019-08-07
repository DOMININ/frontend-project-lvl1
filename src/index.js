import readlineSync from 'readline-sync';

const quesionsCount = 3;

const startGame = (description, getGameBody) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);

  for (let i = 0; i < quesionsCount; i += 1) {
    const [number, answerCorrect] = getGameBody();

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answerCorrect === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};

export default startGame;
