export const drawLetters = () => {
  // Implement this method for wave 1
  const letterQuantities = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1
  };

  let letterPool = [];

  for (const [letter, qty] of Object.entries(letterQuantities)) {
    letterPool.push(...Array(qty).fill(letter));
  };

  let letterHand = []; 
  const handSize = 10;

  while (letterHand.length < handSize) {
    const randomNum = Math.floor(Math.random() * letterPool.length);

    const randletter = letterPool[randomNum];

    if (letterQuantities[randletter] >= 1) {
      letterHand.push(randletter);
      //   console.log(letterHand);
      letterQuantities[randletter] -= 1
    }
  };

  return letterHand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const upperInput = input.toUpperCase();

  const lettersCount = {};

  for (let letter of lettersInHand) {
    if (!(letter in lettersCount)) {
      lettersCount[letter] = 1
    } else {
      lettersCount[letter] += 1
    }
  };

  for (let i = 0; i < upperInput.length; i++) {
    if (!(upperInput[i] in lettersCount) || lettersCount[upperInput[i]] < 1){
      return false;
    } else if (lettersCount[upperInput[i]] >= 1) {
      lettersCount[upperInput[i]] -= 1;
    }
  };
  
  return true
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (!word) {
    return 0;
  };

  const scoreCharts = {
    A: 1, E: 1, I: 1, O: 1, U: 1,
    L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  };

  let points = 0;
  for (const letter of word.toUpperCase()) {
    points += scoreCharts[letter];
  };

  if (7 <= word.length && word.length <= 10) {
    points += 8;
  };

  return points;
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let maxWord = '';
  let maxScore = -Infinity;
  let score = 0;

  if (!words) {
    return {'word': maxWord, 'score': maxScore}; 
  };

  for (let word of words) {
    score = scoreWord(word)
    if (score > maxScore) {
      maxWord = word;
      maxScore = score;
    } else if (score === maxScore) {
      if (maxWord.length === 10) {
        continue;
      } else if (maxWord.length !== 10 && word.length == 10){
        maxWord= word;
        maxScore = score;         
      } else if (maxWord.length !== 10 && word.length != 10 && word.length < maxWord.length){
        maxWord = word;
        maxScore = score;         
      }
    }
  };

  return {'word': maxWord, 'score': maxScore};
};
