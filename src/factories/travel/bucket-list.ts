import { COUNTRIES as countries } from "@constants";
import { TRAVEL as DATA } from "data";
import { getItemCounts } from "utils";

import { cities } from "./cities";

const bucketListCountries: Array<ICountryCounted> = Object.values(countries)
  .map(
    (country: ICountryTemplate): ICountryCounted => ({
      ...country,
      ...getItemCounts({
        item: { country },
        data: { tripLegs: DATA.TRIP_LEGS }
      })
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

const BUCKET_LIST_COUNTRIES: Array<IBasicListItem> = bucketListCountries.map(
  ({ name, pastCount, futureCount }: ICountryCounted): IBasicListItem => ({
    text: name,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);

const bucketListCities: Array<ICityCounted> = Object.values(cities)
  .map(
    (city: ICity): ICityCounted => ({
      ...city,
      ...getItemCounts({ item: { city }, data: { tripLegs: DATA.TRIP_LEGS } })
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

const BUCKET_LIST_CITIES: Array<IBasicListItem> = bucketListCities.map(
  ({
    name,
    capital,
    pastCount,
    futureCount
  }: ICityCounted): IBasicListItem => ({
    text: name,
    star: capital,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);

export const BUCKET_LIST: Array<IBasicListItem> = [
  ...BUCKET_LIST_COUNTRIES,
  ...BUCKET_LIST_CITIES
];
