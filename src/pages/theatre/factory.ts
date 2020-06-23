import {
  ACTORS as actors,
  FRIENDS as friends,
  PLAYS as plays,
  PAGE_SECTION_TEMPLATES,
  THEATRE_VENUES,
  EVENT_CARD_TYPES
} from "@constants";
import { isInFuture } from "utils";

import { mapToCountedList, mapToEventCard } from "../factory";
import { DATA_ALL } from "./data";

const DATA_FAVOURITES: Array<ITheatreData> = DATA_ALL.filter(
  item => item.favourite
);
const UPCOMING = DATA_ALL.filter(theatreTrip => isInFuture(theatreTrip.dates));

const mapToCountedListWrapper = (params: any) =>
  mapToCountedList({
    ...params,
    allData: DATA_ALL,
    favouritedData: DATA_FAVOURITES
  });

const ACTORS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: actors,
  template: PAGE_SECTION_TEMPLATES.ACTOR
});

const FRIENDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: friends,
  template: PAGE_SECTION_TEMPLATES.FRIEND,
  filter: "theatre"
});

const PLAYS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: plays,
  template: PAGE_SECTION_TEMPLATES.PLAY
});

const VENUES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: THEATRE_VENUES,
  template: PAGE_SECTION_TEMPLATES.THEATRE_VENUES
});

const UP_NEXT: Array<IEventCard> = mapToEventCard({
  data: UPCOMING,
  eventCardType: EVENT_CARD_TYPES.THEATRE
});

export const FACTORY = { ACTORS, FRIENDS, PLAYS, VENUES, UP_NEXT };
