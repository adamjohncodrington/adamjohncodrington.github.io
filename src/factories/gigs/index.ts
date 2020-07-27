import { formatMiniCards, formatVideoCards } from "utils";

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
  BUCKET_LIST: formatMiniCards(BUCKET_LIST),
  FAVOURITES,
  FESTIVALS: formatMiniCards(FESTIVALS),
  FRIENDS: formatMiniCards(FRIENDS, { isLeaderboard: true }),
  MUSICIANS: formatMiniCards(MUSICIANS),
  SOLO,
  UP_NEXT,
  VENUES: formatMiniCards(VENUES),
  VIDEOS: formatVideoCards(VIDEOS),
  YEARS,

  pageCount
};
