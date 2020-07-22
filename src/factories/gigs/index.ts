import { formatCountedListItems } from "utils";

import { BUCKET_LIST } from "./bucket-list";
// import { FESTIVALS } from "./festivals";
import { FRIENDS } from "./friends";
import { MUSICIANS } from "./musicians";
import { pageCount } from "./page-count";
import { UP_NEXT } from "./up-next";
import { VENUES } from "./venues";
import { VIDEOS } from "./videos";
import { YEARS } from "./years";

export const GIGS = {
  BUCKET_LIST: formatCountedListItems(BUCKET_LIST),
  // FESTIVALS: formatCountedListItems(FESTIVALS),
  FRIENDS: formatCountedListItems(FRIENDS),
  MUSICIANS: formatCountedListItems(MUSICIANS),
  UP_NEXT,
  VENUES: formatCountedListItems(VENUES),
  VIDEOS,
  YEARS,

  pageCount
};
