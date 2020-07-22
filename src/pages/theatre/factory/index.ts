import { formatCountedListItems, splitTheatreIntoYears } from "utils";

import * as DATA from "../data";

import { ACTORS_LIST_ITEMS } from "./actors";
import { FRIENDS_LIST_ITEMS } from "./friends";
import { PLAYS_LIST_ITEMS } from "./plays";
import { THEATRE_VENUES_LIST_ITEMS } from "./theatres";
import { UP_NEXT } from "./up-next";

export const FACTORY = {
  ACTORS: formatCountedListItems({ countedListItems: ACTORS_LIST_ITEMS }),
  FRIENDS: formatCountedListItems({
    countedListItems: FRIENDS_LIST_ITEMS,
    isLeaderboard: true
  }),
  PLAYS: formatCountedListItems({ countedListItems: PLAYS_LIST_ITEMS }),
  VENUES: formatCountedListItems({
    countedListItems: THEATRE_VENUES_LIST_ITEMS
  }),
  SPLIT_BY_YEAR: splitTheatreIntoYears(DATA.ARRAY),
  UP_NEXT
};
