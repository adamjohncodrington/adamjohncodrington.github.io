import {
  ACTORS as actors,
  FRIENDS as friends,
  PLAYS as plays,
  THEATRE_VENUES
} from "@constants";
import { isInFuture } from "@utils";

import { mapToCountedList } from "../factory";
import { DATA } from "./data";

const { ALL } = DATA;

const DATA_FAVOURITES: Array<ITheatreCard> = ALL.filter(item => item.favourite);
const UP_NEXT: Array<ITheatreCard> = ALL.filter(theatreTrip =>
  isInFuture(theatreTrip.dates)
);

const mapToCountedListWrapper = (params: any) =>
  mapToCountedList({
    ...params,
    allData: ALL,
    favouritedData: DATA_FAVOURITES
  });

const ACTORS: Array<ICountedItem> = mapToCountedListWrapper({
  items: actors
});

const FRIENDS: Array<ICountedItem> = mapToCountedListWrapper({
  items: friends,
  filter: "theatre",
  sortByPastAndFutureCount: true
});

const PLAYS: Array<ICountedItem> = mapToCountedListWrapper({
  items: plays
});

const VENUES: Array<ICountedItem> = mapToCountedListWrapper({
  items: THEATRE_VENUES
});

export const FACTORY = { ACTORS, FRIENDS, PLAYS, VENUES, UP_NEXT };
