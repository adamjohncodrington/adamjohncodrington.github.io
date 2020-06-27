import { FRIENDS as friends, LOCATIONS } from "@constants";
import { isInFuture } from "@utils";

import { mapToCountedList, generatePropertyArrayFromObject } from "../factory";
import { DATA } from "./data";

const { ALL, BUCKET_LIST } = DATA;

const FAVOURITES: Array<ITravelCard> = ALL.filter(item => item.favourite);
const UP_NEXT: Array<ITravelCard> = ALL.filter(item => isInFuture(item.dates));

export const totalAbroadTripsSoFar: number =
  ALL.filter(item => !item.notAbroad).length - UP_NEXT.length;

const countries: Array<any> = Object.values(LOCATIONS);

const cities: Array<ICity> = generatePropertyArrayFromObject({
  object: LOCATIONS,
  childLevelProperty: "cities"
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

const mapToCountedListWrapper = (params: any): Array<ICountedItem> =>
  mapToCountedList({
    ...params,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const bucketList: Array<ICountedItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: BUCKET_LIST
});

const CITIES: Array<ICountedItem> = mapToCountedListWrapper({
  items: cities
});

const THEME_PARKS: Array<ICountedItem> = mapToCountedListWrapper({
  items: themeParks
});

const HIGHLIGHTS: Array<ICountedItem> = mapToCountedListWrapper({
  items: highlights
});

const ISLANDS: Array<ICountedItem> = mapToCountedListWrapper({
  items: islands
});

const COUNTRIES: Array<ICountedItem> = mapToCountedListWrapper({
  items: countries
});

const FRIENDS: Array<ICountedItem> = mapToCountedListWrapper({
  items: friends,
  sortByPastAndFutureCount: true,
  filter: "travel"
});

export const FACTORY = {
  BUCKET_LIST: bucketList,
  HIGHLIGHTS,
  ISLANDS,
  COUNTRIES,
  FRIENDS,
  UP_NEXT,
  THEME_PARKS,
  CITIES
};
