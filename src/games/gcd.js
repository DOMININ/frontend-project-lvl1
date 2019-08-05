import getGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const randomMin = 10;
const randomMax = 50;

const findGcd = (firstNumber, secondNumber) => {
  let maxNumber = firstNumber;
  let minNumber = secondNumber;
  if (firstNumber < secondNumber) {
    maxNumber = secondNumber;
    minNumber = firstNumber;
  }

  let gcd;
  for (let i = 0; i <= minNumber; i += 1) {
    if (minNumber % i === 0 && maxNumber % i === 0) {
      gcd = String(i);
    }
  }

  return gcd;
};

const getQuestionAndAnswer = () => {
  const randomFirstNumber = getRandomIntegerValue(randomMax, randomMin);
  const randomSecondNumber = getRandomIntegerValue(randomMax, randomMin);

  const question = `${randomFirstNumber} ${randomSecondNumber}`;
  const correctAnswer = findGcd(randomFirstNumber, randomSecondNumber);

  return [question, correctAnswer];
};

export default () => getGame(description, getQuestionAndAnswer);
