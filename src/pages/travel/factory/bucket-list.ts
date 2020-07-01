import { citiesCounted } from "./cities";
import { countriesCounted } from "./countries";

const countriesNotVisited: Array<ICountryCounted> = countriesCounted.filter(
  ({ pastCount, futureCount }: ICountryCounted): boolean =>
    pastCount === 0 && futureCount === 0
);

const citiesNotVisited: Array<ICityCounted> = citiesCounted.filter(
  ({ pastCount, futureCount }: ICityCounted): boolean =>
    pastCount === 0 && futureCount === 0
);

const countriesForBucketList: Array<ICountryCounted> = countriesNotVisited.filter(
  ({ excludeFromBucketList }: ICountryCounted): boolean =>
    !excludeFromBucketList
);

const citiesForBucketList: Array<ICityCounted> = citiesNotVisited.filter(
  ({ excludeFromBucketList, insignificant }: ICityCounted): boolean =>
    !excludeFromBucketList && !insignificant
);

const BUCKET_LIST_COUNTRIES: Array<ICountedListItem> = countriesForBucketList.map(
  ({ name, pastCount, futureCount }: ICountryCounted): ICountedListItem => ({
    text: name,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
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

export const BUCKET_LIST_ITEMS: Array<ICountedListItem> = [
  ...BUCKET_LIST_COUNTRIES,
  ...BUCKET_LIST_CITIES
];
