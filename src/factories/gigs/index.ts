import { formatCountedListItems } from "utils";

import { BUCKET_LIST } from "./bucket-list";
import { FAVOURITES } from "./favourites";
// import { FESTIVALS } from "./festivals";
import { FRIENDS } from "./friends";
import { MUSICIANS } from "./musicians";
import { SOLO } from "./solo";
import { pageCount } from "./page-count";
import { UP_NEXT } from "./up-next";
import { VENUES } from "./venues";
import { VIDEOS } from "./videos";
import { YEARS } from "./years";

export const GIGS = {
  BUCKET_LIST: formatCountedListItems(BUCKET_LIST),
  FAVOURITES,
  // FESTIVALS: formatCountedListItems(FESTIVALS),
  FRIENDS: formatCountedListItems(FRIENDS, { isLeaderboard: true }),
  MUSICIANS: formatCountedListItems(MUSICIANS),
  SOLO,
  UP_NEXT,
  VENUES: formatCountedListItems(VENUES),
  VIDEOS,
  YEARS,

  pageCount
};
