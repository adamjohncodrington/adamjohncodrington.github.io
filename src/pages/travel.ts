import { EVENT_CARD_TYPES, PAGE_SECTIONS } from "CONSTANTS";
import { DATA_RAW_TRAVEL } from "data";
import { mapToEventCardData, mapYearsToEventCardPageSections } from "factories";
import { ICONS } from "resources";

const eventCardType = EVENT_CARD_TYPES.TRIP;
const mapTripToEventCards = (parms: any) =>
  mapToEventCardData({ ...parms, eventCardType });

const { ALL, UPCOMING, ALL_GROUPED_BY_YEAR } = DATA_RAW_TRAVEL;

const pastCount: number =
  ALL.filter(item => !item.notAbroad).length - UPCOMING.length;
const futureCount: number = UPCOMING.length;

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: DATA_RAW_TRAVEL.BUCKET_LIST
  },
  {
    details: PAGE_SECTIONS.CITY,
    icon: ICONS.CITY,
    showSectionLength: true,
    data: DATA_RAW_TRAVEL.CITIES
  },
  {
    details: PAGE_SECTIONS.COUNTRY,
    icon: ICONS.FLAG,
    data: DATA_RAW_TRAVEL.COUNTRIES,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    data: DATA_RAW_TRAVEL.FRIENDS
  },
  {
    details: PAGE_SECTIONS.HIGHLIGHT,
    icon: ICONS.MAP_PIN,
    data: DATA_RAW_TRAVEL.HIGHLIGHTS
  },
  {
    details: PAGE_SECTIONS.ISLAND,
    showSectionLength: true,
    icon: ICONS.PALM_TREE,
    data: DATA_RAW_TRAVEL.ISLANDS
  },
  {
    details: PAGE_SECTIONS.THEME_PARK,
    showSectionLength: true,
    icon: ICONS.ROLLER_COASTER,
    data: DATA_RAW_TRAVEL.THEME_PARKS
  },
  {
    details: PAGE_SECTIONS.TOWN,
    icon: ICONS.TOWN_HALL,
    data: DATA_RAW_TRAVEL.TOWNS
  },
  {
    details: PAGE_SECTIONS.UP_NEXT,
    icon: ICONS.NOTEPAD,
    showSectionLength: true,
    data: mapTripToEventCards({ data: DATA_RAW_TRAVEL.UPCOMING })
  }
];

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: ALL_GROUPED_BY_YEAR,
  eventCardType
});

const sections: Array<IPageSection> = [...SECTIONS_STATS, ...SECTIONS_YEARS];

export const DATA_PAGE_TRAVEL: IPageData = { pastCount, futureCount, sections };
