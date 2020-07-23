import { formatCountedListItems } from "utils";

import { HIGHLIGHTS, THEME_PARKS } from "./attractions";
import { BUCKET_LIST } from "./bucket-list";
import { CITIES } from "./cities";
import { COUNTRIES } from "./countries";
import { FRIENDS } from "./friends";
import { ISLANDS } from "./islands";
import { UP_NEXT } from "./up-next";

export const TRAVEL = {
  BUCKET_LIST: formatCountedListItems(BUCKET_LIST),
  CITIES: formatCountedListItems(CITIES),
  COUNTRIES: formatCountedListItems(COUNTRIES),
  FRIENDS: formatCountedListItems(FRIENDS, { isLeaderboard: true }),
  HIGHLIGHTS: formatCountedListItems(HIGHLIGHTS),
  ISLANDS: formatCountedListItems(ISLANDS),
  THEME_PARKS: formatCountedListItems(THEME_PARKS),
  UP_NEXT
};
