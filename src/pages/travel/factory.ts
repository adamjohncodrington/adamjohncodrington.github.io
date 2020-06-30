import { FRIENDS, LOCATIONS } from "@constants";
import {
  isInFuture,
  formatCountedListItems,
  getPageSectionItemCounts,
  getFriendTravelCounts
} from "@utils";

import { DATA } from "./data";

const UP_NEXT: Array<ITravelCard> = DATA.ALL.filter(
  ({ dates }: ITravelCard): boolean => isInFuture(dates[0])
);

const totalTripsAbroadEver: number = DATA.ALL.filter(item => !item.notAbroad)
  .length;
const tripsInTheFuture: number = UP_NEXT.length;
const totalAbroadTripsSoFar: number = totalTripsAbroadEver - tripsInTheFuture;

const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(FRIENDS)
  .filter(({ travel }: IFriend): boolean => !!travel)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getFriendTravelCounts({ friend, travelCards: DATA.ALL })
    })
  );

const countries: Array<ICountry> = Object.values(LOCATIONS);

const countriesCounted: Array<ICountryCounted> = countries.map(
  (country: ICountry): ICountryCounted => ({
    ...country,
    ...getPageSectionItemCounts({
      itemToCount: country,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

const COUNTRIES_LIST_ITEMS: Array<ICountedListItem> = countriesCounted.map(
  ({ name, pastCount, futureCount }: ICountryCounted): ICountedListItem => ({
    text: name,
    pastCount,
    futureCount
  })
);

const countriesNotVisited: Array<ICountryCounted> = countriesCounted.filter(
  ({ pastCount, futureCount }: ICountryCounted): boolean =>
    pastCount === 0 && futureCount === 0
);

const countriesForBucketList: Array<ICountryCounted> = countriesNotVisited.filter(
  ({ excludeFromBucketList }: ICountryCounted): boolean =>
    !excludeFromBucketList
);

const BUCKET_LIST_COUNTRIES: Array<ICountedListItem> = countriesForBucketList.map(
  ({ name, pastCount, futureCount }: ICountryCounted): ICountedListItem => ({
    text: name,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);

//@ts-ignore
const cities: Array<ICity> = [].concat.apply(
  [],
  //@ts-ignore
  countries
    .filter(({ cities }: ICountry): boolean => !!cities)
    //@ts-ignore
    .map(({ cities }: ICountry): ICity => Object.values(cities))
);

const citiesCounted: Array<ICityCounted> = cities.map(
  (city: ICity): ICityCounted => ({
    ...city,
    ...getPageSectionItemCounts({
      itemToCount: city,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

const CITIES_LIST_ITEMS: Array<ICountedListItem> = citiesCounted.map(
  ({
    name,
    capital,
    pastCount,
    insignificant,
    futureCount
  }: ICityCounted): ICountedListItem => ({
    text: name,
    star: capital,
    countInfoIrrelevant: insignificant,
    pastCount,
    futureCount
  })
);

const citiesNotVisited: Array<ICityCounted> = citiesCounted.filter(
  ({ pastCount, futureCount }: ICityCounted): boolean =>
    pastCount === 0 && futureCount === 0
);

const citiesForBucketList: Array<ICityCounted> = citiesNotVisited.filter(
  ({ excludeFromBucketList, insignificant }: ICityCounted): boolean =>
    !excludeFromBucketList && !insignificant
);

const BUCKET_LIST_CITIES: Array<ICountedListItem> = citiesForBucketList.map(
  ({
    name,
    capital,
    pastCount,
    futureCount
  }: ICityCounted): ICountedListItem => ({
    text: name,
    star: capital,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);

const BUCKET_LIST_ITEMS: Array<ICountedListItem> = [
  ...BUCKET_LIST_COUNTRIES,
  ...BUCKET_LIST_CITIES
];

//@ts-ignore
const attractions: Array<IAttraction> = [].concat.apply(
  [],
  //@ts-ignore
  countries
    .filter(({ attractions }: ICountry): boolean => !!attractions)
    //@ts-ignore
    .map(({ attractions }: ICountry): ICity => Object.values(attractions))
);

const themeParks: Array<IAttraction> = attractions.filter(
  ({ themePark }: IAttraction): boolean => !!themePark
);

const highlights: Array<IAttraction> = attractions.filter(
  ({ highlight }: IAttraction): boolean => !!highlight
);

const HIGHLIGHTS_LIST_ITEMS: Array<ICountedListItem> = highlights.map(
  (highlight: IAttraction): ICountedListItem => ({
    text: highlight.name,
    ...getPageSectionItemCounts({
      itemToCount: highlight,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

const THEME_PARKS_LIST_ITEMS: Array<ICountedListItem> = themeParks.map(
  (themePark: IAttraction): ICountedListItem => ({
    text: themePark.name,
    ...getPageSectionItemCounts({
      itemToCount: themePark,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

const islandsThatAreCountries: Array<ICountry> = countries.filter(
  ({ island }: ICountry): boolean => !!island
);
//@ts-ignore
const islandsThatAreNotCountries: Array<IIsland> = [].concat.apply(
  [],
  //@ts-ignore
  countries
    .filter(({ islands }: ICountry): boolean => !!islands)
    //@ts-ignore
    .map(({ islands }: ICountry): IIsland => Object.values(islands))
);
const islandsAll: Array<IIsland> = [
  ...islandsThatAreCountries,
  ...islandsThatAreNotCountries
];

const ISLANDS_LIST_ITEMS: Array<ICountedListItem> = islandsAll.map(
  (island: IIsland): ICountedListItem => ({
    text: island.name,
    countInfoIrrelevant: island.insignificant,
    ...getPageSectionItemCounts({
      itemToCount: island,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

//TODO: strongly-type this export
export const FACTORY = {
  pageCount: totalAbroadTripsSoFar,

  BUCKET_LIST: formatCountedListItems({
    countedListItems: BUCKET_LIST_ITEMS,
    isBucketList: true
  }),
  HIGHLIGHTS: formatCountedListItems({
    countedListItems: HIGHLIGHTS_LIST_ITEMS
  }),
  ISLANDS: formatCountedListItems({ countedListItems: ISLANDS_LIST_ITEMS }),
  COUNTRIES: formatCountedListItems({ countedListItems: COUNTRIES_LIST_ITEMS }),
  FRIENDS: formatCountedListItems({
    countedListItems: FRIENDS_LIST_ITEMS,
    isLeaderboard: true
  }),
  UP_NEXT,
  THEME_PARKS: formatCountedListItems({
    countedListItems: THEME_PARKS_LIST_ITEMS
  }),
  CITIES: formatCountedListItems({ countedListItems: CITIES_LIST_ITEMS })
};
