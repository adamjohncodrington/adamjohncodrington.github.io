import {
  ACTORS,
  EVENT_CARD_TYPES,
  FRIENDS,
  PLAYS,
  PAGE_SECTIONS,
  THEATRE_VENUES
} from "CONSTANTS";
import { DATA_THEATRE } from "data";
import {
  mapToEventCardData,
  mapYearsToEventCardPageSections,
  mapToCountedList
} from "factories";
import { ICONS } from "resources";
import { isInFuture } from "utils";

const { ALL, ALL_GROUPED_BY_YEAR } = DATA_THEATRE;

const eventCardType = EVENT_CARD_TYPES.THEATRE;
const mapTheatreVisitToEventCards = (parms: any) =>
  mapToEventCardData({ ...parms, eventCardType });

const FAVOURITES: Array<ITheatreData> = ALL.filter(item => item.favourite);
const UPCOMING = ALL.filter(theatreTrip => isInFuture(theatreTrip.dates));

const mapToCountedListWrapper = (parms: any) =>
  mapToCountedList({
    ...parms,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const actors: any = mapToCountedListWrapper({
  items: ACTORS,
  pageSectionTitle: PAGE_SECTIONS.ACTOR
});
const friends: any = mapToCountedListWrapper({
  items: FRIENDS,
  pageSectionTitle: PAGE_SECTIONS.FRIEND,
  filter: "theatre"
});
const plays: any = mapToCountedListWrapper({
  items: PLAYS,
  pageSectionTitle: PAGE_SECTIONS.PLAY
});
const venues: any = mapToCountedListWrapper({
  items: THEATRE_VENUES,
  pageSectionTitle: PAGE_SECTIONS.THEATRE_VENUES
});

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.ACTOR,
    icon: ICONS.ARTIST,
    data: actors
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    data: friends
  },
  {
    details: PAGE_SECTIONS.PLAY,
    icon: ICONS.BOOK,
    data: plays,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.THEATRE_VENUES,
    icon: ICONS.THEATRE,
    data: venues,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.UP_NEXT,
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
