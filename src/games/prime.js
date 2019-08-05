import getGame from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getEven = () => {
  const randomMin = 3;
  const randomMax = 13;

  const number = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;

  let answerCorrect = 'programm not working';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      answerCorrect = 'no';
      break;
    } else {
      answerCorrect = 'yes';
    }
  }

  return [number, answerCorrect];
};

export default () => getGame(description, getEven);
