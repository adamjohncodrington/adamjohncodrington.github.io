import {
  MUSIC_VENUES,
  FRIENDS as friends,
  MUSICIANS as musicians,
  FESTIVALS as festivals
} from "@constants";
import { isInFuture } from "@utils";

import { mapToCountedList } from "../factory";
import { DATA } from "./data";

const { ALL } = DATA;

const FAVOURITES: Array<IGigCard> = ALL.filter(item => item.favourite);
const UP_NEXT: Array<IGigCard> = ALL.filter((gig: IGigCard) =>
  isInFuture(gig.dates)
);

export const totalGigsSoFar: number = ALL.length - UP_NEXT.length;

const mapToCountedListWrapper = (params: any) =>
  mapToCountedList({
    ...params,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const BUCKET_LIST: Array<ICountedListItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: musicians
});

const FESTIVALS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: festivals,
  filter: "festival"
});

const FRIENDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: friends,
  filter: "gigs",
  sortByPastAndFutureCount: true
});

const MUSICIANS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: musicians
});

const VENUES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: MUSIC_VENUES
});

export const FACTORY = {
  BUCKET_LIST,
  MUSICIANS,
  FESTIVALS,
  FRIENDS,
  UP_NEXT,
  VENUES
};
