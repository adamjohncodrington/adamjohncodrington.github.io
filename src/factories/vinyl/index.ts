import { formatCountedListItems, formatVinyls } from "utils";

import { ARTISTS } from "./artists";
import { COLLECTION } from "./collection";
import { WISH_LIST } from "./wish-list";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

export const VINYL = {
  ARTISTS: formatCountedListItems(ARTISTS),
  COLLECTION: formatVinyls(COLLECTION),
  SIGNED,
  WISH_LIST,
  YEARS
};
