const yesterday = (): number => {
  const today: Date = new Date();
  return today.setDate(today.getDate() - 1);
};

export const isInFuture = (dates: Array<Date>): boolean => {
  const dateToCompare: number = dates[0].valueOf();
  return dateToCompare > yesterday();
};
