import startGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 3;
const max = 13;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < Math.round(Math.sqrt(number)) + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerValue(max, min);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGame(description, getQuestionAndAnswer);
