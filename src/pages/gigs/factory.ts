import {
  PAGE_SECTION_TEMPLATES,
  MUSIC_VENUES,
  FRIENDS as friends,
  MUSICIANS as musicians,
  FESTIVALS as festivals,
  EVENT_CARD_TYPES
} from "@constants";
import { isInFuture } from "utils";

import { mapToCountedList, mapToEventCard } from "../factory";
import { DATA_ALL } from "./data";

const FAVOURITES: Array<IGigData> = DATA_ALL.filter(item => item.favourite);
const UPCOMING: Array<IGigData> = DATA_ALL.filter((gig: IGigData) =>
  isInFuture(gig.dates)
);

export const pastCount: number = DATA_ALL.length - UPCOMING.length;
export const futureCount: number = UPCOMING.length;

const mapToCountedListWrapper = (params: any) =>
  mapToCountedList({
    ...params,
    allData: DATA_ALL,
    favouritedData: FAVOURITES
  });

const BUCKET_LIST: Array<ICountedListItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: musicians,
  template: PAGE_SECTION_TEMPLATES.MUSICIAN
});

const FESTIVALS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: festivals,
  template: PAGE_SECTION_TEMPLATES.FESTIVAL,
  filter: "festival"
});

const FRIENDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: friends,
  template: PAGE_SECTION_TEMPLATES.FRIEND,
  filter: "gigs"
});

const MUSICIANS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: musicians,
  template: PAGE_SECTION_TEMPLATES.MUSICIAN
});

const VENUES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: MUSIC_VENUES,
  template: PAGE_SECTION_TEMPLATES.MUSIC_VENUES
});

const UP_NEXT: Array<IEventCard> = mapToEventCard({
  data: UPCOMING,
  eventCardType: EVENT_CARD_TYPES.GIG
});

export const FACTORY = {
  BUCKET_LIST,
  MUSICIANS,
  FESTIVALS,
  FRIENDS,
  UP_NEXT,
  VENUES
};
