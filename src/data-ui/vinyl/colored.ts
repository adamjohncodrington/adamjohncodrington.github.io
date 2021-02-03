import { VINYL_COLLECTION as DATA } from "data-raw";
import { vinylColorIsSpecial } from "utils";

export const COLORED: Vinyl[] = DATA.filter(({ colors }: Vinyl): boolean =>
  vinylColorIsSpecial(colors)
);
