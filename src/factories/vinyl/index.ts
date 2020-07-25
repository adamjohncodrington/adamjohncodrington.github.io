import { VINYL as DATA } from "data";
import { formatBasicListItems, formatVinyls } from "utils";

import { MUSICIANS } from "./musicians";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

console.log(formatBasicListItems(MUSICIANS));

export const VINYL = {
  MUSICIANS: formatBasicListItems(MUSICIANS),
  COLLECTION: formatVinyls(DATA.COLLECTION),
  SIGNED,
  WISH_LIST: DATA.WISH_LIST,
  YEARS
};
