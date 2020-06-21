import { EVENT_CARD_TYPES, PAGE_SECTIONS } from "../constants";
import { DATA_TRAVEL } from "../data";
import { ICONS } from "../resources";
import { mapDataToEventCards, mapYearGroupsToSections } from "../factories";

const eventCardType = EVENT_CARD_TYPES.TRIP;
//@ts-ignore
const mapTripToEventCards = parms =>
  mapDataToEventCards({ ...parms, eventCardType });

const { pastCount, futureCount } = DATA_TRAVEL;

const statsSections: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: DATA_TRAVEL.BUCKET_LIST
  },
  {
    details: PAGE_SECTIONS.CITY,
    icon: ICONS.CITY,
    showSectionLength: true,
    data: DATA_TRAVEL.CITIES
  },
  {
    details: PAGE_SECTIONS.COUNTRY,
    icon: ICONS.FLAG,
    data: DATA_TRAVEL.COUNTRIES,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    data: DATA_TRAVEL.FRIENDS
  },
  {
    details: PAGE_SECTIONS.HIGHLIGHT,
    icon: ICONS.MAP_PIN,
    data: DATA_TRAVEL.HIGLIGHTS
  },
  {
    details: PAGE_SECTIONS.ISLAND,
    showSectionLength: true,
    icon: ICONS.PALM_TREE,
    data: DATA_TRAVEL.ISLANDS
  },
  {
    details: PAGE_SECTIONS.THEME_PARK,
    showSectionLength: true,
    icon: ICONS.ROLLER_COASTER,
    data: DATA_TRAVEL.THEME_PARKS
  },
  {
    details: PAGE_SECTIONS.TOWN,
    icon: ICONS.TOWN_HALL,
    data: DATA_TRAVEL.TOWNS
  },
  {
    details: PAGE_SECTIONS.UP_NEXT,
    icon: ICONS.NOTEPAD,
    showSectionLength: true,
    data: mapTripToEventCards({ data: DATA_TRAVEL.UPCOMING })
  }
];

const yearSections: Array<IPageSection> = mapYearGroupsToSections({
  years: DATA_TRAVEL.ALL_GROUPED_BY_YEAR,
  eventCardType
});

const sections: Array<IPageSection> = [...statsSections, ...yearSections];

export const PAGE_DATA_TRAVEL: IPageData = {
  pastCount,
  futureCount,
  sections
};
