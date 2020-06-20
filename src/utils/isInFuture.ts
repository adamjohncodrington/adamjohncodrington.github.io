export const isInFuture = (dates: Array<Date>): boolean => {
  const yesterday = (): number => {
    const today: Date = new Date();
    return today.setDate(today.getDate() - 1);
  };

  const dateToCompare: number = dates[0].valueOf();

  return dateToCompare > yesterday();
};
