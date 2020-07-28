import { formatMiniCards, formatCards } from "utils";

import { HIGHLIGHTS, THEME_PARKS } from "./attractions";
import { BUCKET_LIST } from "./bucket-list";
import { CITIES } from "./cities";
import { COUNTRIES } from "./countries";
import { FRIENDS } from "./friends";
import { ISLANDS } from "./islands";
import { PHOTOS } from "./photos";
import { UP_NEXT } from "./up-next";
import { VIDEOS } from "./videos";
import { YEARS } from "./years";

export const TRAVEL = {
  BUCKET_LIST: formatMiniCards(BUCKET_LIST),
  CITIES: formatMiniCards(CITIES),
  COUNTRIES: formatMiniCards(COUNTRIES),
  FRIENDS: formatMiniCards(FRIENDS, { isLeaderboard: true }),
  HIGHLIGHTS: formatMiniCards(HIGHLIGHTS),
  ISLANDS: formatMiniCards(ISLANDS),
  PHOTOS,
  THEME_PARKS: formatMiniCards(THEME_PARKS),
  UP_NEXT,
  VIDEOS,
  YEARS
};
