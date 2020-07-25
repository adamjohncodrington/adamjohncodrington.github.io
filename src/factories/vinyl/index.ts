import { VINYL as DATA } from "data";
import { formatCountedListItems, formatVinyls } from "utils";

import { MUSICIANS } from "./musicians";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

console.log(formatCountedListItems(MUSICIANS));

export const VINYL = {
  MUSICIANS: formatCountedListItems(MUSICIANS),
  COLLECTION: formatVinyls(DATA.COLLECTION),
  SIGNED,
  WISH_LIST: DATA.WISH_LIST,
  YEARS
};
