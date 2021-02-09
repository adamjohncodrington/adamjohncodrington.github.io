import { VINYL_COLLECTION as DATA } from "data-raw";
import { Vinyl } from "types";

export const SIGNED: Vinyl[] = DATA.filter(
  ({ signed }: Vinyl): boolean => signed
);
