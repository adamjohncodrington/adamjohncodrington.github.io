export const getCountdownText = (daysToGo: number): string => {
  if (daysToGo === 0) return "TODAY";
  if (daysToGo === 1) return daysToGo + " DAY TO GO";
  return daysToGo + " DAYS TO GO";
};
