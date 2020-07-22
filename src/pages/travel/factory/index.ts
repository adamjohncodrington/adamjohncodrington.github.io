import { formatCountedListItems } from "utils";

import { HIGHLIGHTS_LIST_ITEMS, THEME_PARKS_LIST_ITEMS } from "./attractions";
import { BUCKET_LIST_ITEMS } from "./bucket-list";
import { CITIES_LIST_ITEMS } from "./cities";
import { COUNTRIES_LIST_ITEMS } from "./countries";
import { FRIENDS_LIST_ITEMS } from "./friends";
import { ISLANDS_LIST_ITEMS } from "./islands";
import { UP_NEXT } from "./up-next";

interface ITravelFactory {
  BUCKET_LIST: Array<ICountedListItem>;
  CITIES: Array<ICountedListItem>;
  COUNTRIES: Array<ICountedListItem>;
  FRIENDS: Array<ICountedListItem>;
  HIGHLIGHTS: Array<ICountedListItem>;
  ISLANDS: Array<ICountedListItem>;
  THEME_PARKS: Array<ICountedListItem>;
  UP_NEXT: Array<ITripLeg>;
}

export const FACTORY: ITravelFactory = {
  BUCKET_LIST: formatCountedListItems(BUCKET_LIST_ITEMS),
  CITIES: formatCountedListItems(CITIES_LIST_ITEMS),
  COUNTRIES: formatCountedListItems(COUNTRIES_LIST_ITEMS),
  FRIENDS: formatCountedListItems(FRIENDS_LIST_ITEMS, { isLeaderboard: true }),
  HIGHLIGHTS: formatCountedListItems(HIGHLIGHTS_LIST_ITEMS),
  ISLANDS: formatCountedListItems(ISLANDS_LIST_ITEMS),
  THEME_PARKS: formatCountedListItems(THEME_PARKS_LIST_ITEMS),
  UP_NEXT
};
