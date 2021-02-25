import { VINYL_COLLECTION as DATA } from "data-raw";
import { Vinyl } from "types";

export const SECOND_HAND: Vinyl[] = DATA.filter(
  ({ purchaseCondition }: Vinyl): boolean => purchaseCondition !== "new"
);
