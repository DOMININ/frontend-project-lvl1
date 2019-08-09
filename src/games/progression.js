import startGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const min = 0;
const max = 5;

const getQuestionAndAnswer = () => {
  const step = getRandomIntegerValue(max, min);
  const start = getRandomIntegerValue(max, min);
  const numbers = [];

  const hiddenElementIndex = getRandomIntegerValue(progressionLength, min);
  for (let i = 0; i < progressionLength; i += 1) {
    numbers.push(i === hiddenElementIndex ? '..' : i * step + start);
  }

  const correctAnswer = String(hiddenElementIndex * step + start);
  const question = numbers.join(' ');

  return [question, correctAnswer];
};

export default () => startGame(description, getQuestionAndAnswer);
