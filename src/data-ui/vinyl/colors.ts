import { VINYL_COLLECTION as DATA } from "data-raw";
import { vinylColorIsSpecial } from "utils";

export const COLORS: Array<IVinyl> = DATA.filter(
  ({ colors }: IVinyl): boolean => vinylColorIsSpecial(colors)
);
