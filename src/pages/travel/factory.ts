import {
  FRIENDS as friends,
  LOCATIONS,
  PAGE_SECTION_TEMPLATES,
  EVENT_CARD_TYPES
} from "@constants";
import { isInFuture } from "utils";

import {
  mapToCountedList,
  generatePropertyArrayFromObject,
  mapToEventCard
} from "../factory";
import { DATA_ALL, DATA_BUCKET_LIST } from "./data";

const FAVOURITES: Array<ITravelData> = DATA_ALL.filter(item => item.favourite);
const UPCOMING: Array<ITravelData> = DATA_ALL.filter(item =>
  isInFuture(item.dates)
);

export const pastCount: number =
  DATA_ALL.filter(item => !item.notAbroad).length - UPCOMING.length;
export const futureCount: number = UPCOMING.length;

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
    allData: DATA_ALL,
    favouritedData: FAVOURITES
  });

const BUCKET_LIST: Array<ICountedListItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: DATA_BUCKET_LIST
});

const CITIES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: cities,
  template: PAGE_SECTION_TEMPLATES.CITY
});

const TOWNS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: towns,
  template: PAGE_SECTION_TEMPLATES.TOWN
});

const THEME_PARKS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: themeParks,
  template: PAGE_SECTION_TEMPLATES.ATTRACTION
});

const HIGHLIGHTS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: highlights,
  template: PAGE_SECTION_TEMPLATES.ATTRACTION
});

const ISLANDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: islands,
  template: PAGE_SECTION_TEMPLATES.ISLAND
});

const COUNTRIES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: countries,
  template: PAGE_SECTION_TEMPLATES.COUNTRY
});

const FRIENDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: friends,
  template: PAGE_SECTION_TEMPLATES.FRIEND,
  filter: "travel"
});

const UP_NEXT: Array<IEventCard> = mapToEventCard({
  data: UPCOMING,
  eventCardType: EVENT_CARD_TYPES.TRIP
});

export const FACTORY = {
  BUCKET_LIST,
  HIGHLIGHTS,
  ISLANDS,
  COUNTRIES,
  FRIENDS,
  UP_NEXT,
  THEME_PARKS,
  TOWNS,
  CITIES
};
