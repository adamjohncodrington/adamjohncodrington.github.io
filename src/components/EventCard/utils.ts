export const getCountdownText = (daysToGo: number): string => {
  if (daysToGo === 0) return "TODAY";
  if (daysToGo === 1) return daysToGo + " DAY TO GO";
  return daysToGo + " DAYS TO GO";
};

export const daysToGo = (dates: Array<Date>): number => {
  const secondsInADay: number = 24 * 60 * 60;
  const dateDifference: number = dates[0].valueOf() - new Date().valueOf();

  return Math.ceil(dateDifference / (secondsInADay * 1000));
};
