export const shuffleArray = (array: Array<any>): Array<any> => {
  let currentIndex: number = array.length;
  let temporaryValue: any, randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const shuffleArrayIf = (
  array: Array<any>,
  shuffle: boolean
): Array<any> => (shuffle ? shuffleArray(array) : array);
