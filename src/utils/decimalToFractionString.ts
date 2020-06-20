import { UNICODE } from "../constants";

export const decimalToFractionString = (decimal: number): string => {
  switch (decimal) {
    case 0.25:
      return UNICODE.QUARTER;
    case 0.5:
      return UNICODE.HALF;
    case 1.5:
      return 1 + UNICODE.HALF;
    case 2.5:
      return 2 + UNICODE.HALF;
    case 3.5:
      return 3 + UNICODE.HALF;
    default:
      return decimal.toString();
  }
};
