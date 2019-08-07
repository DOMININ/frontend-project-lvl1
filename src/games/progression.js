import startGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const randomMin = 1;
const randomMax = 5;

const randomIndexMin = 0;
const randomIndexMax = progressionLength;

const getQuestionAndAnswer = () => {
  const step = getRandomIntegerValue(randomMax, randomMin);
  const start = getRandomIntegerValue(randomMax, randomMin);
  const numbers = [];

  const hiddenElementIndex = getRandomIntegerValue(randomIndexMax, randomIndexMin);
  for (let i = 0; i < progressionLength; i += 1) {
    numbers.push(i === hiddenElementIndex ? '..' : i * step + start);
  }

  const correctAnswer = String(hiddenElementIndex * step + start);
  const question = numbers.join(' ');

  return [question, correctAnswer];
};

export default () => startGame(description, getQuestionAndAnswer);
