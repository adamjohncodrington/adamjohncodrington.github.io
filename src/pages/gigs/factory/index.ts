import { formatCountedListItems, splitGigsIntoYears } from "utils";

import * as DATA from "../data";

import { BUCKET_LIST_ITEMS } from "./bucket-list";
import { FRIENDS_LIST_ITEMS } from "./friends";
import { FESTIVALS_LIST_ITEMS } from "./festivals";
import { MUSICIANS_LIST_ITEMS } from "./musicians";
import { pageCount } from "./page-count";
import { UP_NEXT } from "./up-next";
import { VENUES_LIST_ITEMS } from "./venues";
import { VIDEOS } from "./videos";

export const FACTORY = {
  SPLIT_BY_YEAR: splitGigsIntoYears(DATA.ARRAY),

  BUCKET_LIST: formatCountedListItems({ countedListItems: BUCKET_LIST_ITEMS }),
  FESTIVALS: formatCountedListItems({ countedListItems: FESTIVALS_LIST_ITEMS }),
  FRIENDS: formatCountedListItems({
    countedListItems: FRIENDS_LIST_ITEMS,
    isLeaderboard: true
  }),
  MUSICIANS: formatCountedListItems({ countedListItems: MUSICIANS_LIST_ITEMS }),
  UP_NEXT,
  VENUES: formatCountedListItems({ countedListItems: VENUES_LIST_ITEMS }),
  VIDEOS,

  pageCount
};
