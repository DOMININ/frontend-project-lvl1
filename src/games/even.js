import getGame from '../index';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getEven = () => {
  const number = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  const answerCorrect = number % 2 === 0 ? 'yes' : 'no';

  return [number, answerCorrect];
};

export default () => getGame(description, getEven);
