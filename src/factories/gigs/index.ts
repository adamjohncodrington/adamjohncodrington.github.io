import { formatBasicListItems, formatVideoCards } from "utils";

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
  BUCKET_LIST: formatBasicListItems(BUCKET_LIST),
  FAVOURITES,
  FESTIVALS: formatBasicListItems(FESTIVALS),
  FRIENDS: formatBasicListItems(FRIENDS, { isLeaderboard: true }),
  MUSICIANS: formatBasicListItems(MUSICIANS),
  SOLO,
  UP_NEXT,
  VENUES: formatBasicListItems(VENUES),
  VIDEOS: formatVideoCards(VIDEOS),
  YEARS,

  pageCount
};
