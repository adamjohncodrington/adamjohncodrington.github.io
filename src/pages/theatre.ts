import { EVENT_CARD_TYPES, PAGE_SECTIONS } from "CONSTANTS";
import { DATA_RAW_THEATRE } from "data";
import { mapToEventCardData, mapYearsToEventCardPageSections } from "factories";
import { ICONS } from "resources";

const eventCardType = EVENT_CARD_TYPES.THEATRE;
const mapTheatreVisitToEventCards = (parms: any) =>
  mapToEventCardData({ ...parms, eventCardType });

const { ALL_GROUPED_BY_YEAR, UPCOMING } = DATA_RAW_THEATRE;

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.ACTOR,
    icon: ICONS.ARTIST,
    data: DATA_RAW_THEATRE.ACTORS
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    data: DATA_RAW_THEATRE.FRIENDS
  },
  {
    details: PAGE_SECTIONS.PLAY,
    icon: ICONS.BOOK,
    data: DATA_RAW_THEATRE.PLAYS,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.THEATRE_VENUES,
    icon: ICONS.THEATRE,
    data: DATA_RAW_THEATRE.VENUES,
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

export const DATA_PAGE_THEATRE: IPageData = { sections };
