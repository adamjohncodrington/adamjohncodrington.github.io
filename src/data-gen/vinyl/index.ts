import { VINYL as DATA } from "data";
import { formatMiniCards, formatVinyls } from "utils";

import { MUSICIANS } from "./musicians";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

console.log(formatMiniCards(MUSICIANS));

export const VINYL = {
  MUSICIANS: formatMiniCards(MUSICIANS),
  COLLECTION: formatVinyls(DATA.COLLECTION),
  SIGNED,
  WISH_LIST: DATA.WISH_LIST,
  YEARS
};
