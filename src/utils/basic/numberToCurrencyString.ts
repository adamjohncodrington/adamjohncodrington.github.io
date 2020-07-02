export const numberToCurrencyString = (
  number: number,
  decimalPrecision: number = 2
): string => {
  if (decimalPrecision === 1)
    return `£${(Math.round(number * 10) / 10).toFixed(2)}`;

  return `£${(Math.round(number * 100) / 100).toFixed(2)}`;
};
