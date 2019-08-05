import getGame from '../index';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const randomMin = 1;
  const randomMax = 5;

  const progressionStep = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;
  const progressionStart = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;
  const progressionLength = 10;
  const progressionArray = [];

  const loopCondition = progressionLength * progressionStep + progressionStart;

  for (let i = progressionStart; i < loopCondition; i += progressionStep) {
    progressionArray.push(i);
  }

  const progressionArrayRandomIndex = Math.floor(Math.random() * progressionArray.length);
  const answerCorrect = String(progressionArray[progressionArrayRandomIndex]);

  const progressionString = progressionArray.join(' ');
  const question = progressionString.replace(answerCorrect, '..');

  return [question, answerCorrect];
};

export default () => getGame(description, getProgression);
