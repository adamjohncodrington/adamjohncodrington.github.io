import { UNICODE } from "@constants";

const { QUARTER, HALF, THREE_QUARTERS } = UNICODE;

export const decimalToFractionString = (decimal: number): string => {
  const floor: number = Math.floor(decimal);
  const decimalPoints: number = decimal - floor;

  if (decimalPoints === 0.25) return floor > 0 ? floor + QUARTER : QUARTER;
  if (decimalPoints === 0.5) return floor > 0 ? floor + HALF : HALF;
  if (decimalPoints === 0.75)
    return floor > 0 ? floor + THREE_QUARTERS : THREE_QUARTERS;

  return decimal.toString();
};
