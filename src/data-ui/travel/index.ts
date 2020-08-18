import { filterMiniCards } from "utils";

import { HIGHLIGHTS, THEME_PARKS } from "./attractions";
import { BUCKET_LIST } from "./bucket-list";
import { CITIES } from "./cities";
import { COUNTRIES } from "./countries";
import { FRIENDS } from "./friends";
import { ISLANDS } from "./islands";
import { PHOTOS } from "./photos";
import { UP_NEXT } from "./up-next";
import { mapTravelVideosToCards, mapTripLegsToCards } from "./utils";
import { VIDEOS } from "./videos";
import { YEARS } from "./years";

export const TRAVEL = {
  BUCKET_LIST: filterMiniCards(BUCKET_LIST),
  CITIES: filterMiniCards(CITIES),
  COUNTRIES: filterMiniCards(COUNTRIES),
  FRIENDS: filterMiniCards(FRIENDS),
  HIGHLIGHTS: filterMiniCards(HIGHLIGHTS),
  ISLANDS: filterMiniCards(ISLANDS),
  PHOTOS,
  THEME_PARKS: filterMiniCards(THEME_PARKS),
  UP_NEXT: mapTripLegsToCards(UP_NEXT),
  VIDEOS: mapTravelVideosToCards(VIDEOS),
  YEARS
};
