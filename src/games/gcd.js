import startGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const randomMin = 10;
const randomMax = 50;

const findGcd = (firstNumber, secondNumber) => {
  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);

  let gcd;
  for (let i = minNumber; i > 0; i -= 1) {
    if (minNumber % i === 0 && maxNumber % i === 0) {
      gcd = i;
      break;
    }
  }

  return gcd;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomIntegerValue(randomMax, randomMin);
  const secondNumber = getRandomIntegerValue(randomMax, randomMin);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(findGcd(firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => startGame(description, getQuestionAndAnswer);
