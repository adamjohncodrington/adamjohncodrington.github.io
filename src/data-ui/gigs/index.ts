import { mapMusicEventsToCards, mapGigVideosToCards } from "data-factories";
import { filterMiniCards } from "utils";

import { BUCKET_LIST } from "./bucket-list";
import { FAVOURITES } from "./favourites";
import { FESTIVALS } from "./festivals";
import { FRIENDS } from "./friends";
import { MUSICIANS } from "./musicians";
import { SOLO } from "./solo";
import { pageCount } from "./page-count";
import { UP_NEXT } from "./up-next";
import { VENUES } from "./venues";
import { VIDEOS } from "./videos";
import { YEARS } from "./years";

export const GIGS = {
  BUCKET_LIST: filterMiniCards(BUCKET_LIST),
  FAVOURITES: mapMusicEventsToCards(FAVOURITES),
  FESTIVALS: filterMiniCards(FESTIVALS),
  FRIENDS: filterMiniCards(FRIENDS),
  MUSICIANS: filterMiniCards(MUSICIANS),
  SOLO: mapMusicEventsToCards(SOLO),
  UP_NEXT: mapMusicEventsToCards(UP_NEXT),
  VENUES: filterMiniCards(VENUES),
  VIDEOS: mapGigVideosToCards(VIDEOS),
  YEARS: YEARS.map(
    (year: Array<IMusicEvent>): Array<ICard> => mapMusicEventsToCards(year)
  ),

  pageCount
};
