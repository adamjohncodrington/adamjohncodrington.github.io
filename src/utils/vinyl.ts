import { COLORS } from "styles";

export const vinylColorIsSpecial = (colors: string[]): boolean =>
  colors[0] !== COLORS.BLACK || colors.length > 1;
