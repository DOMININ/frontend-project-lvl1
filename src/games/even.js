import getGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const randomMin = 1;
const randomMax = 20;

const isEven = number => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerValue(randomMax, randomMin);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => getGame(description, getQuestionAndAnswer);
