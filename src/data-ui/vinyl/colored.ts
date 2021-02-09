import { VINYL_COLLECTION as DATA } from "data-raw";
import { Vinyl } from "types";
import { vinylColorIsSpecial } from "utils";

export const COLORED: Vinyl[] = DATA.filter(({ color }: Vinyl): boolean =>
  vinylColorIsSpecial(color)
);
