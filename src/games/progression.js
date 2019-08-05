import getGame from '..';
import getRandomIntegerValue from '../utils';

const description = 'What number is missing in the progression?';

const randomMin = 1;
const randomMax = 5;

const getQuestionAndAnswer = () => {
  const progressionStep = getRandomIntegerValue(randomMax, randomMin);
  const progressionStart = getRandomIntegerValue(randomMax, randomMin);
  const progressionLength = 10;
  const progressionNumbers = [];

  const loopCondition = progressionLength * progressionStep + progressionStart;

  for (let i = progressionStart; i < loopCondition; i += progressionStep) {
    progressionNumbers.push(i);
  }

  const progressionNumbersRandomIndex = Math.floor(Math.random() * progressionNumbers.length);
  const correctAnswer = String(progressionNumbers[progressionNumbersRandomIndex]);

  const progressionString = progressionNumbers.join(' ');
  const question = progressionString.replace(correctAnswer, '..');

  return [question, correctAnswer];
};

export default () => getGame(description, getQuestionAndAnswer);
