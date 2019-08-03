import readlineSync from 'readline-sync';

const getEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    const answerCorrect = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === answerCorrect) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'. \nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export default getEven;
