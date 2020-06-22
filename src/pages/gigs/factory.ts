import {
  PAGE_SECTION_TEMPLATES,
  MUSIC_VENUES,
  FRIENDS,
  MUSICIANS,
  FESTIVALS,
  EVENT_CARD_TYPES
} from "@constants";
import { DATA_GIGS } from "data";
import { isInFuture } from "utils";

import { mapToCountedList, mapToEventCard } from "../factory";

const { ALL } = DATA_GIGS;
const FAVOURITES: Array<IGigData> = ALL.filter(item => item.favourite);
const UPCOMING: Array<IGigData> = ALL.filter((gig: IGigData) =>
  isInFuture(gig.dates)
);

export const pastCount: number = ALL.length - UPCOMING.length;
export const futureCount: number = UPCOMING.length;

export const DATA_UP_NEXT: Array<IEventCard> = mapToEventCard({
  data: UPCOMING,
  eventCardType: EVENT_CARD_TYPES.GIG
});

const mapToCountedListWrapper = (params: any) =>
  mapToCountedList({
    ...params,
    allData: ALL,
    favouritedData: FAVOURITES
  });

export const DATA_BUCKET_LIST: Array<ICountedListItem> = mapToCountedListWrapper(
  {
    bucketListMode: true,
    items: MUSICIANS,
    id: PAGE_SECTION_TEMPLATES.MUSICIAN
  }
);

export const DATA_FESTIVALS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: FESTIVALS,
  id: PAGE_SECTION_TEMPLATES.FESTIVAL,
  filter: "festival"
});

export const DATA_FRIENDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: FRIENDS,
  id: PAGE_SECTION_TEMPLATES.FRIEND,
  filter: "gigs"
});

export const DATA_MUSICIANS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: MUSICIANS,
  id: PAGE_SECTION_TEMPLATES.MUSICIAN
});

export const DATA_VENUES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: MUSIC_VENUES,
  id: PAGE_SECTION_TEMPLATES.MUSIC_VENUES
});
