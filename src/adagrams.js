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

  const letterPool = [];

  for (const [letter, qty] of Object.entries(letterQuantities)) {
      // console.log(`${letter} appears ${qty} times`);
      // Array(4) creates an array with 4 empty slots.
      // .fill('A') fills all of them with 'A' → ['A', 'A', 'A', 'A']
      // ... (spread operator) unpacks the array so that .push() adds each element individually.
    letterPool.push(...Array(qty).fill(letter));
  };

  // console.log(letterPool)

  const letterHand = [] // 10 letters

  // create a random number between 0 to letterPool length - 1 inclusive
  // check if the value of letterPool[rand] in letter quantities, 
      // if quantities > 1
          // add the letter to letterHand
          // decrement the value in letterQuantities
  const handSize = 10;

  while (letterHand.length < handSize) {
      // Math.random() → generates a number between 0 (inclusive) and 1 (exclusive).
      // * letterPool.length → scales it to the size of the array.
      // Math.floor() → rounds down to the nearest whole number, giving you an index from 0 to letterPool.length - 1.
      // if letterPool.length is 5, this will give 0 - 4
      const randomNum = Math.floor(Math.random() * letterPool.length);
      // console.log(randomNum)
      
      const randletter = letterPool[randomNum]

      if (letterQuantities[randletter] > 1) {
          letterHand.push(randletter);
          console.log(letterHand);
          letterQuantities[randletter] -= 1
      }
  };
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  
  // make input all uppercase
  const upperInput = input.toUpperCase();

  // create a ditionary - letter: count from lettersInHand
  const lettersCount = {}
  for (let letter of lettersInHand) {
    if (!(letter in lettersCount)) {
        lettersCount[letter] = 1
    } else {
        lettersCount[letter] += 1
    }
  }

  console.log(lettersCount)
  // if the letter in letters_count, check if the value in letters_count > 1, decrement letter_count
  //  if the letter in letters_count, if the value in letters_count < 1, return False
  // if the letter not in letters_count, return false
  for (let i = 0; i < upperInput.length; i++) {
      if (!(upperInput[i] in lettersCount)){
          console.log('false')
          return false;
      } else if (lettersCount[upperInput[i]] < 1) {
          console.log('false')
          return false;
      } else if (lettersCount[upperInput[i]] >= 1) {
          lettersCount[upperInput[i]] -= 1;
      }
  }
  return true

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
