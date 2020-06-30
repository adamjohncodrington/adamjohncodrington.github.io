export const isInFuture = (date: Date): boolean => {
  const yesterday = (): number => {
    const today: Date = new Date();
    return today.setDate(today.getDate() - 1);
  };

  const dateToCompare: number = date.valueOf();

  return dateToCompare > yesterday();
};
