import {
  EVENT_CARD_TYPES,
  FRIENDS,
  LOCATIONS,
  PAGE_SECTION_IDS
} from "@constants";
import { DATA_TRAVEL } from "data";
import { ICONS } from "resources";
import { isInFuture } from "utils";

import {
  mapToCountedList,
  generatePropertyArrayFromObject,
  mapToEventCard,
  mapYearsToEventCardPageSections
} from "../factory";

const eventCardType = EVENT_CARD_TYPES.TRIP;
const mapTripToEventCards = (params: any) =>
  mapToEventCard({ ...params, eventCardType });

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

const mapToCountedListWrapper = (params: any): Array<ICountedListItem> =>
  mapToCountedList({
    ...params,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const BUCKET_LIST: Array<ICountedListItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: DATA_TRAVEL.BUCKET_LIST
});
const CITIES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: cities,
  id: PAGE_SECTION_IDS.CITY
});
const TOWNS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: towns,
  id: PAGE_SECTION_IDS.TOWN
});
// const ATTRACTIONS: any = mapToCountedListWrapper({
//   items: attractions.filter(item => !item.themePark && !item.highlight),
//   id: PAGE_SECTION_IDS.ATTRACTION
// });
const THEME_PARKS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: themeParks,
  id: PAGE_SECTION_IDS.ATTRACTION
});
const HIGHLIGHTS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: highlights,
  id: PAGE_SECTION_IDS.ATTRACTION
});
const ISLANDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: islands,
  id: PAGE_SECTION_IDS.ISLAND
});
const COUNTRIES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: countries,
  id: PAGE_SECTION_IDS.COUNTRY
});
const friends: Array<ICountedListItem> = mapToCountedListWrapper({
  items: FRIENDS,
  id: PAGE_SECTION_IDS.FRIEND,
  filter: "travel"
});

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTION_IDS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: BUCKET_LIST
  },
  {
    details: PAGE_SECTION_IDS.CITY,
    icon: ICONS.CITY,
    showSectionLength: true,
    data: CITIES
  },
  {
    details: PAGE_SECTION_IDS.COUNTRY,
    icon: ICONS.FLAG,
    data: COUNTRIES,
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_IDS.FRIEND,
    icon: ICONS.PEOPLE,
    data: friends
  },
  {
    details: PAGE_SECTION_IDS.HIGHLIGHT,
    icon: ICONS.MAP_PIN,
    data: HIGHLIGHTS
  },
  {
    details: PAGE_SECTION_IDS.ISLAND,
    showSectionLength: true,
    icon: ICONS.PALM_TREE,
    data: ISLANDS
  },
  {
    details: PAGE_SECTION_IDS.THEME_PARK,
    showSectionLength: true,
    icon: ICONS.ROLLER_COASTER,
    data: THEME_PARKS
  },
  {
    details: PAGE_SECTION_IDS.TOWN,
    icon: ICONS.TOWN_HALL,
    data: TOWNS
  },
  {
    details: PAGE_SECTION_IDS.UP_NEXT,
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
