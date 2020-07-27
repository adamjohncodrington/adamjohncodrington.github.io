import { VINYL_COLLECTION, VINYL_WISH_LIST } from "data-raw";
import { formatMiniCards, formatVinyls } from "utils";

import { MUSICIANS } from "./musicians";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

export const VINYL = {
  MUSICIANS: formatMiniCards(MUSICIANS),
  COLLECTION: formatVinyls(VINYL_COLLECTION),
  SIGNED,
  WISH_LIST: VINYL_WISH_LIST,
  YEARS
};
