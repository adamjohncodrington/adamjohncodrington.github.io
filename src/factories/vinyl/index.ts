import { VINYL as DATA } from "data";
import { formatCountedListItems, formatVinyls } from "utils";

import { ARTISTS } from "./artists";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

export const VINYL = {
  ARTISTS: formatCountedListItems(ARTISTS),
  COLLECTION: formatVinyls(DATA.COLLECTION),
  SIGNED,
  WISH_LIST: DATA.WISH_LIST,
  YEARS
};
