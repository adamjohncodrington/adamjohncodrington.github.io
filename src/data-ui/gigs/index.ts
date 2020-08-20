import { mapMusicEventsToCards } from "./utils";
import { filterMiniCards } from "utils";

import { BUCKET_LIST } from "./bucket-list";
import { FAVOURITES } from "./favourites";
import { FESTIVALS } from "./festivals";
import { WITH } from "./with";
import { MUSICIANS } from "./musicians";
import { SOLO } from "./solo";
import { pageCount } from "./page-count";
import { PHOTOS } from "./photos";
import { UP_NEXT } from "./up-next";
import { VENUES } from "./venues";
import { VIDEOS } from "./videos";
import { YEARS } from "./years";

export const GIGS = {
  FAVOURITES,
  SOLO,
  VIDEOS,
  BUCKET_LIST,
  PHOTOS,
  FESTIVALS: filterMiniCards(FESTIVALS),
  WITH: filterMiniCards(WITH),
  MUSICIANS: filterMiniCards(MUSICIANS),
  UP_NEXT: mapMusicEventsToCards(UP_NEXT),
  VENUES: filterMiniCards(VENUES),
  YEARS,
  pageCount
};
