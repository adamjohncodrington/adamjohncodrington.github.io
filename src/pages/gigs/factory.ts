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

export const pastCount: number = ALL.length - UP_NEXT.length;

const mapToCountedListWrapper = (params: any) =>
  mapToCountedList({
    ...params,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const BUCKET_LIST: Array<ICountedItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: musicians
});

const FESTIVALS: Array<ICountedItem> = mapToCountedListWrapper({
  items: festivals,
  filter: "festival"
});

const FRIENDS: Array<ICountedItem> = mapToCountedListWrapper({
  items: friends,
  filter: "gigs",
  sortByPastAndFutureCount: true
});

const MUSICIANS: Array<ICountedItem> = mapToCountedListWrapper({
  items: musicians
});

const VENUES: Array<ICountedItem> = mapToCountedListWrapper({
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
