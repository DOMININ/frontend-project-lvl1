import getGame from '../index';

const description = 'What is the result of the expression?';

const getCalc = () => {
  const operators = ['+', '-', '*'];

  const randomMin = 1;
  const randomMax = 20;

  const randomNumberFirst = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;
  const randomNumberSecond = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;
  const randomOperatorIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomOperatorIndex];

  const question = `${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`;
  let answerCorrect = 0;

  switch (randomOperator) {
    case '+':
      answerCorrect = randomNumberFirst + randomNumberSecond;
      break;
    case '-':
      answerCorrect = randomNumberFirst - randomNumberSecond;
      break;
    case '*':
      answerCorrect = randomNumberFirst * randomNumberSecond;
      break;
    default:
      answerCorrect = 'programm not working';
  }

  answerCorrect = String(answerCorrect);

  return [question, answerCorrect];
};

export default () => getGame(description, getCalc);
