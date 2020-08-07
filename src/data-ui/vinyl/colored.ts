import { VINYL_PURCHASED as DATA } from "data-raw";
import { vinylColorIsSpecial } from "utils";

export const COLORED: Array<IVinyl> = DATA.filter(
  ({ colors }: IVinyl): boolean => vinylColorIsSpecial(colors)
);
