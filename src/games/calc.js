import getGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const randomMin = 1;
const randomMax = 20;

const getQuestionAndAnswer = () => {
  const randomFirstNumber = getRandomIntegerValue(randomMax, randomMin);
  const randomSecondNumber = getRandomIntegerValue(randomMax, randomMin);
  const randomIndexOfOperator = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndexOfOperator];

  const question = `${randomFirstNumber} ${randomOperator} ${randomSecondNumber}`;
  let correctAnswer;

  switch (randomOperator) {
    case '+':
      correctAnswer = randomFirstNumber + randomSecondNumber;
      break;
    case '-':
      correctAnswer = randomFirstNumber - randomSecondNumber;
      break;
    case '*':
      correctAnswer = randomFirstNumber * randomSecondNumber;
      break;
    default:
      correctAnswer = 'programm not working';
  }

  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

export default () => getGame(description, getQuestionAndAnswer);
