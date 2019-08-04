import getGame from '../index';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getEven = () => {
  const randomMin = 1;
  const randomMax = 20;

  const number = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;
  const answerCorrect = number % 2 === 0 ? 'yes' : 'no';

  return [number, answerCorrect];
};

export default () => getGame(description, getEven);
