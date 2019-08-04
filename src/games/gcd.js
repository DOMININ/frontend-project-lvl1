import getGame from '../index';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = () => {
  const numberFirst = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  const numberSecond = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
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
