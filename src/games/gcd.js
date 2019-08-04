import getGame from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = () => {
  const randomMin = 10;
  const randomMax = 50;

  const numberFirst = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;
  const numberSecond = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;

  const question = `${numberFirst} ${numberSecond}`;

  let numberMax = numberFirst;
  let numberMin = numberSecond;
  if (numberFirst < numberSecond) {
    numberMax = numberSecond;
    numberMin = numberFirst;
  }

  let answerCorrect = 'programm not working';
  for (let i = 0; i <= numberMin; i += 1) {
    if (numberMin % i === 0 && numberMax % i === 0) {
      answerCorrect = String(i);
    }
  }

  return [question, answerCorrect];
};

export default () => getGame(description, getGcd);
