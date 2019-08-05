import getGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomMin = 3;
const randomMax = 13;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerValue(randomMax, randomMin);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => getGame(description, getQuestionAndAnswer);