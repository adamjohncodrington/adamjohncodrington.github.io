import { formatBasicListItems, formatVideoCards } from "utils";

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
  BUCKET_LIST: formatBasicListItems(BUCKET_LIST),
  CITIES: formatBasicListItems(CITIES),
  COUNTRIES: formatBasicListItems(COUNTRIES),
  FRIENDS: formatBasicListItems(FRIENDS, { isLeaderboard: true }),
  HIGHLIGHTS: formatBasicListItems(HIGHLIGHTS),
  ISLANDS: formatBasicListItems(ISLANDS),
  PHOTOS,
  THEME_PARKS: formatBasicListItems(THEME_PARKS),
  UP_NEXT,
  VIDEOS: formatVideoCards(VIDEOS)
};
