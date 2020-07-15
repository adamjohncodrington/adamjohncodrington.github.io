import { isInFuture, formatCountedListItems } from "utils";

import { DATA } from "../data";

import { HIGHLIGHTS_LIST_ITEMS, THEME_PARKS_LIST_ITEMS } from "./attractions";
import { BUCKET_LIST_ITEMS } from "./bucket-list";
import { CITIES_LIST_ITEMS } from "./cities";
import { COUNTRIES_LIST_ITEMS } from "./countries";
import { FRIENDS_LIST_ITEMS } from "./friends";
import { ISLANDS_LIST_ITEMS } from "./islands";

const UP_NEXT: Array<ITrip> = DATA.ALL.filter(({ dates }: ITrip): boolean =>
  isInFuture(dates[0])
);

interface ITravelFactory {
  BUCKET_LIST: Array<ICountedListItem>;
  CITIES: Array<ICountedListItem>;
  COUNTRIES: Array<ICountedListItem>;
  FRIENDS: Array<ICountedListItem>;
  HIGHLIGHTS: Array<ICountedListItem>;
  ISLANDS: Array<ICountedListItem>;
  THEME_PARKS: Array<ICountedListItem>;
  UP_NEXT: Array<ITrip>;
}

export const FACTORY: ITravelFactory = {
  BUCKET_LIST: formatCountedListItems({ countedListItems: BUCKET_LIST_ITEMS }),
  CITIES: formatCountedListItems({ countedListItems: CITIES_LIST_ITEMS }),
  COUNTRIES: formatCountedListItems({ countedListItems: COUNTRIES_LIST_ITEMS }),
  FRIENDS: formatCountedListItems({
    countedListItems: FRIENDS_LIST_ITEMS,
    isLeaderboard: true
  }),
  HIGHLIGHTS: formatCountedListItems({
    countedListItems: HIGHLIGHTS_LIST_ITEMS
  }),
  ISLANDS: formatCountedListItems({ countedListItems: ISLANDS_LIST_ITEMS }),
  THEME_PARKS: formatCountedListItems({
    countedListItems: THEME_PARKS_LIST_ITEMS
  }),
  UP_NEXT
};
