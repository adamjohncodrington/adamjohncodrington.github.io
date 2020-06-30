import { isInFuture, formatCountedListItems } from "@utils";

import { DATA } from "../data";

import { BUCKET_LIST_ITEMS } from "./bucket-list";
import { FRIENDS_LIST_ITEMS } from "./friends";
import { FESTIVALS_LIST_ITEMS } from "./festivals";
import { MUSICIANS_LIST_ITEMS } from "./musicians";
import { VENUES_LIST_ITEMS } from "./venues";

const UP_NEXT: Array<IGigCard> = DATA.ALL.filter(({ dates }: IGigCard) =>
  isInFuture(dates[0])
);

const totalGigsPastAndPresent: number = DATA.ALL.length;
const totalFutureGigs: number = UP_NEXT.length;
const totalGigsSoFar: number = totalGigsPastAndPresent - totalFutureGigs;

interface IGigsFactory {
  BUCKET_LIST: Array<ICountedListItem>;
  MUSICIANS: Array<ICountedListItem>;
  FESTIVALS: Array<ICountedListItem>;
  FRIENDS: Array<ICountedListItem>;
  VENUES: Array<ICountedListItem>;
  UP_NEXT: Array<IGigCard>;
  pageCount: number;
}

export const FACTORY: IGigsFactory = {
  BUCKET_LIST: formatCountedListItems({ countedListItems: BUCKET_LIST_ITEMS }),
  FESTIVALS: formatCountedListItems({ countedListItems: FESTIVALS_LIST_ITEMS }),
  FRIENDS: formatCountedListItems({
    countedListItems: FRIENDS_LIST_ITEMS,
    isLeaderboard: true
  }),
  MUSICIANS: formatCountedListItems({ countedListItems: MUSICIANS_LIST_ITEMS }),
  UP_NEXT,
  VENUES: formatCountedListItems({ countedListItems: VENUES_LIST_ITEMS }),

  pageCount: totalGigsSoFar
};
