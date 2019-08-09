import startGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const min = 1;
const max = 20;

const isEven = number => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerValue(max, min);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGame(description, getQuestionAndAnswer);
