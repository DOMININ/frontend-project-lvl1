import startGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const randomMin = 1;
const randomMax = 20;

const randomOperatorMin = 0;
const randomOperatorMax = operators.length;

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomIntegerValue(randomMax, randomMin);
  const secondNumber = getRandomIntegerValue(randomMax, randomMin);
  const indexOfOperator = getRandomIntegerValue(randomOperatorMax, randomOperatorMin);
  const operator = operators[indexOfOperator];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      correctAnswer = 'programm not working';
  }

  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

export default () => startGame(description, getQuestionAndAnswer);
