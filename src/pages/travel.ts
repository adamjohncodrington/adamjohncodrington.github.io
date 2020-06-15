import { EVENT_CARD_TYPES, PAGE_SECTION_TYPES } from "../constants";
import { DATA_TRAVEL } from "../data";
import { ICONS } from "../resources";
import { mapDataToEventCards, mapYearGroupsToSections } from "../utils/global";

const eventType = EVENT_CARD_TYPES.TRIP;
//@ts-ignore
const mapTripToEventCards = parms =>
  mapDataToEventCards({ ...parms, eventType });

const { pastCount, futureCount } = DATA_TRAVEL;

const statsSections: Array<IPageSection> = [
  {
    type: PAGE_SECTION_TYPES.BUCKET_LIST,
    icon: ICONS.STARS,
    data: DATA_TRAVEL.BUCKET_LIST
  },
  {
    type: PAGE_SECTION_TYPES.CITY,
    icon: ICONS.CITY,
    showSectionLength: true,
    data: DATA_TRAVEL.CITIES
  },
  {
    type: PAGE_SECTION_TYPES.COUNTRY,
    icon: ICONS.FLAG,
    data: DATA_TRAVEL.COUNTRIES,
    showSectionLength: true
  },
  {
    type: PAGE_SECTION_TYPES.FRIEND,
    icon: ICONS.PEOPLE,
    data: DATA_TRAVEL.FRIENDS,
    leaderboard: true
  },
  {
    type: PAGE_SECTION_TYPES.HIGHLIGHT,
    icon: ICONS.MAP_PIN,
    data: DATA_TRAVEL.HIGLIGHTS
  },
  {
    type: PAGE_SECTION_TYPES.ISLAND,
    showSectionLength: true,
    icon: ICONS.PALM_TREE,
    data: DATA_TRAVEL.ISLANDS
  },
  {
    type: PAGE_SECTION_TYPES.THEME_PARK,
    showSectionLength: true,
    icon: ICONS.ROLLER_COASTER,
    data: DATA_TRAVEL.THEME_PARKS
  },
  {
    type: PAGE_SECTION_TYPES.TOWN,
    icon: ICONS.TOWN_HALL,
    data: DATA_TRAVEL.TOWNS
  },
  {
    type: PAGE_SECTION_TYPES.UP_NEXT,
    icon: ICONS.NOTEPAD,
    showSectionLength: true,
    listOfEventCards: true,
    data: mapTripToEventCards({ data: DATA_TRAVEL.UPCOMING })
  }
];

const yearSections: Array<IPageSection> = mapYearGroupsToSections({
  years: DATA_TRAVEL.ALL_GROUPED_BY_YEAR,
  eventType
});

const sections: Array<IPageSection> = [...statsSections, ...yearSections];

export const PAGE_DATA_TRAVEL: IPageData = {
  pastCount,
  futureCount,
  sections
};
