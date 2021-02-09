import { COLORS } from "styles";
import { VinylColor } from "types";

export const vinylColorIsSpecial = (color: VinylColor): boolean =>
  color !== COLORS.BLACK;
