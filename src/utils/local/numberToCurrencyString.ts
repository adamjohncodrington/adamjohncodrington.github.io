export const numberToCurrencyString = (
  number: number,
  decimalPrecision?: number
): string => {
  if (decimalPrecision && decimalPrecision === 1)
    return `£${(Math.round(number * 10) / 10).toFixed(2)}`;

  // Default to 2dp (£1.89)
  return `£${(Math.round(number * 100) / 100).toFixed(2)}`;
};
