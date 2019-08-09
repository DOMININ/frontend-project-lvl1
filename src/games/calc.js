import startGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const min = 0;
const max = 20;

const operatorsLength = operators.length;

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomIntegerValue(max, min);
  const secondNumber = getRandomIntegerValue(max, min);
  const indexOfOperator = getRandomIntegerValue(operatorsLength, min);
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
