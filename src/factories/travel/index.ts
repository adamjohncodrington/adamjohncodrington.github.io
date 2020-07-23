import { formatCountedListItems, formatVideoCards } from "utils";

import { HIGHLIGHTS, THEME_PARKS } from "./attractions";
import { BUCKET_LIST } from "./bucket-list";
import { CITIES } from "./cities";
import { COUNTRIES } from "./countries";
import { FRIENDS } from "./friends";
import { ISLANDS } from "./islands";
import { PHOTOS } from "./photos";
import { UP_NEXT } from "./up-next";
import { VIDEOS } from "./videos";

export const TRAVEL = {
  BUCKET_LIST: formatCountedListItems(BUCKET_LIST),
  CITIES: formatCountedListItems(CITIES),
  COUNTRIES: formatCountedListItems(COUNTRIES),
  FRIENDS: formatCountedListItems(FRIENDS, { isLeaderboard: true }),
  HIGHLIGHTS: formatCountedListItems(HIGHLIGHTS),
  ISLANDS: formatCountedListItems(ISLANDS),
  PHOTOS,
  THEME_PARKS: formatCountedListItems(THEME_PARKS),
  UP_NEXT,
  VIDEOS: formatVideoCards(VIDEOS)
};
