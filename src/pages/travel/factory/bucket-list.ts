import { COUNTRIES, CITIES } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

const bucketListCountries: Array<ICountryCounted> = Object.values(COUNTRIES)
  .map(
    (country: ICountryTemplate): ICountryCounted => ({
      ...country,
      ...getItemCounts({ item: { country }, data: { trips: DATA.ALL } })
    })
  )
  .filter(
    ({
      pastCount,
      futureCount,
      excludeFromBucketList
    }: ICountryCounted): boolean =>
      pastCount === 0 && futureCount === 0 && !excludeFromBucketList
  );

const BUCKET_LIST_COUNTRIES: Array<ICountedListItem> = bucketListCountries.map(
  ({ name, pastCount, futureCount }: ICountryCounted): ICountedListItem => ({
    text: name,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);

const bucketListCities: Array<ICityCounted> = Object.values(CITIES)
  .map(
    (city: ICity): ICityCounted => ({
      ...city,
      ...getItemCounts({ item: { city }, data: { trips: DATA.ALL } })
    })
  )
  .filter(
    ({
      pastCount,
      futureCount,
      excludeFromBucketList,
      insignificant
    }: ICityCounted): boolean =>
      pastCount === 0 &&
      futureCount === 0 &&
      !excludeFromBucketList &&
      !insignificant
  );

const BUCKET_LIST_CITIES: Array<ICountedListItem> = bucketListCities.map(
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
