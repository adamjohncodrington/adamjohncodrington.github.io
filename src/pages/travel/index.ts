import { EVENT_CARD_TYPES, FRIENDS, LOCATIONS, PAGE_SECTIONS } from "CONSTANTS";
import { DATA_TRAVEL } from "data";
import {
  generatePropertyArrayFromObject,
  mapToEventCard,
  mapYearsToEventCardPageSections
} from "factories";
import { ICONS } from "resources";
import { isInFuture } from "utils";

import { mapToCountedList } from "../factory";

const eventCardType = EVENT_CARD_TYPES.TRIP;
const mapTripToEventCards = (parms: any) =>
  mapToEventCard({ ...parms, eventCardType });

const { ALL, ALL_GROUPED_BY_YEAR } = DATA_TRAVEL;

const FAVOURITES: Array<ITravelData> = ALL.filter(item => item.favourite);
const UPCOMING: Array<ITravelData> = ALL.filter(item => isInFuture(item.dates));

const pastCount: number =
  ALL.filter(item => !item.notAbroad).length - UPCOMING.length;
const futureCount: number = UPCOMING.length;

const countries: Array<any> = Object.values(LOCATIONS);

const cities: Array<ICity> = generatePropertyArrayFromObject({
  object: LOCATIONS,
  childLevelProperty: "cities"
});

const towns: Array<ITown> = generatePropertyArrayFromObject({
  object: LOCATIONS,
  childLevelProperty: "towns"
});

const islands: Array<IIsland> = generatePropertyArrayFromObject({
  object: LOCATIONS,
  childLevelProperty: "islands",
  topLevelProperty: "island"
});

const attractions: Array<IAttraction> = generatePropertyArrayFromObject({
  object: LOCATIONS,
  childLevelProperty: "attractions"
});

const themeParks: Array<IAttraction> = attractions.filter(
  item => item.themePark
);
const highlights: Array<IAttraction> = attractions.filter(
  item => item.highlight
);

const mapToCountedListWrapper = (parms: any): Array<ICountedListItem> =>
  mapToCountedList({
    ...parms,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const BUCKET_LIST: Array<ICountedListItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: DATA_TRAVEL.BUCKET_LIST
});
const CITIES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: cities,
  pageSectionTitle: PAGE_SECTIONS.CITY
});
const TOWNS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: towns,
  pageSectionTitle: PAGE_SECTIONS.TOWN
});
// const ATTRACTIONS: any = mapToCountedListWrapper({
//   items: attractions.filter(item => !item.themePark && !item.highlight),
//   pageSectionTitle: PAGE_SECTIONS.ATTRACTION
// });
const THEME_PARKS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: themeParks,
  pageSectionTitle: PAGE_SECTIONS.ATTRACTION
});
const HIGHLIGHTS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: highlights,
  pageSectionTitle: PAGE_SECTIONS.ATTRACTION
});
const ISLANDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: islands,
  pageSectionTitle: PAGE_SECTIONS.ISLAND
});
const COUNTRIES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: countries,
  pageSectionTitle: PAGE_SECTIONS.COUNTRY
});
const friends: Array<ICountedListItem> = mapToCountedListWrapper({
  items: FRIENDS,
  pageSectionTitle: PAGE_SECTIONS.FRIEND,
  filter: "travel"
});

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: BUCKET_LIST
  },
  {
    details: PAGE_SECTIONS.CITY,
    icon: ICONS.CITY,
    showSectionLength: true,
    data: CITIES
  },
  {
    details: PAGE_SECTIONS.COUNTRY,
    icon: ICONS.FLAG,
    data: COUNTRIES,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    data: friends
  },
  {
    details: PAGE_SECTIONS.HIGHLIGHT,
    icon: ICONS.MAP_PIN,
    data: HIGHLIGHTS
  },
  {
    details: PAGE_SECTIONS.ISLAND,
    showSectionLength: true,
    icon: ICONS.PALM_TREE,
    data: ISLANDS
  },
  {
    details: PAGE_SECTIONS.THEME_PARK,
    showSectionLength: true,
    icon: ICONS.ROLLER_COASTER,
    data: THEME_PARKS
  },
  {
    details: PAGE_SECTIONS.TOWN,
    icon: ICONS.TOWN_HALL,
    data: TOWNS
  },
  {
    details: PAGE_SECTIONS.UP_NEXT,
    icon: ICONS.NOTEPAD,
    showSectionLength: true,
    data: mapTripToEventCards({ data: UPCOMING })
  }
];

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: ALL_GROUPED_BY_YEAR,
  eventCardType
});

const sections: Array<IPageSection> = [...SECTIONS_STATS, ...SECTIONS_YEARS];

export const PAGE_TRAVEL: IPageData = { pastCount, futureCount, sections };
