import {
  ACTORS,
  EVENT_CARD_TYPES,
  FRIENDS,
  PLAYS,
  PAGE_SECTION_TEMPLATES,
  THEATRE_VENUES
} from "@constants";
import { DATA_THEATRE } from "data";
import { ICONS } from "resources";
import { isInFuture } from "utils";

import {
  mapToCountedList,
  mapYearsToEventCardPageSections,
  mapToEventCard
} from "../factory";

const { ALL, ALL_GROUPED_BY_YEAR } = DATA_THEATRE;

const eventCardType = EVENT_CARD_TYPES.THEATRE;
const mapTheatreVisitToEventCards = (params: any) =>
  mapToEventCard({ ...params, eventCardType });

const FAVOURITES: Array<ITheatreData> = ALL.filter(item => item.favourite);
const UPCOMING = ALL.filter(theatreTrip => isInFuture(theatreTrip.dates));

const mapToCountedListWrapper = (params: any) =>
  mapToCountedList({
    ...params,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const actors: any = mapToCountedListWrapper({
  items: ACTORS,
  id: PAGE_SECTION_TEMPLATES.ACTOR
});
const friends: any = mapToCountedListWrapper({
  items: FRIENDS,
  id: PAGE_SECTION_TEMPLATES.FRIEND,
  filter: "theatre"
});
const plays: any = mapToCountedListWrapper({
  items: PLAYS,
  id: PAGE_SECTION_TEMPLATES.PLAY
});
const venues: any = mapToCountedListWrapper({
  items: THEATRE_VENUES,
  id: PAGE_SECTION_TEMPLATES.THEATRE_VENUES
});

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTION_TEMPLATES.ACTOR,
    icon: ICONS.ARTIST,
    data: actors
  },
  {
    details: PAGE_SECTION_TEMPLATES.FRIEND,
    icon: ICONS.PEOPLE,
    data: friends
  },
  {
    details: PAGE_SECTION_TEMPLATES.PLAY,
    icon: ICONS.BOOK,
    data: plays,
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_TEMPLATES.THEATRE_VENUES,
    icon: ICONS.THEATRE,
    data: venues,
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_TEMPLATES.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: mapTheatreVisitToEventCards({ data: UPCOMING }),
    showSectionLength: true
  }
];

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: ALL_GROUPED_BY_YEAR,
  eventCardType
});

const sections: Array<IPageSection> = [...SECTIONS_STATS, ...SECTIONS_YEARS];

export const PAGE_THEATRE: IPageData = { sections };
