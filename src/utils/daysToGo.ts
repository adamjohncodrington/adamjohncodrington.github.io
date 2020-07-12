export const daysToGo = (date: Date): number => {
  const secondsInADay: number = 24 * 60 * 60;
  const dateDifference: number = date.valueOf() - new Date().valueOf();

  return Math.ceil(dateDifference / (secondsInADay * 1000));
};
