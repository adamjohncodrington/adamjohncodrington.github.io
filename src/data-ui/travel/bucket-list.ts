import { COUNTRIES as countries } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import { getItemCounts } from "utils";

import { cities } from "./cities";

const bucketListCountries: Array<ICountryCounted> = Object.values(countries)
  .map(
    (country: ICountryTemplate): ICountryCounted => ({
      ...country,
      ...getItemCounts({ item: { country }, data: { tripLegs: DATA } })
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

const BUCKET_LIST_COUNTRIES: Array<IMiniCard> = bucketListCountries.map(
  ({ name, pastCount, futureCount }: ICountryCounted): IMiniCard => ({
    text: name,
    sort: [name],
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);

const bucketListCities: Array<ICityCounted> = Object.values(cities)
  .map(
    (city: ICity): ICityCounted => ({
      ...city,
      ...getItemCounts({ item: { city }, data: { tripLegs: DATA } })
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

const BUCKET_LIST_CITIES: Array<IMiniCard> = bucketListCities.map(
  ({ name, capital, pastCount, futureCount }: ICityCounted): IMiniCard => ({
    text: name,
    sort: [name],
    star: capital,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);

export const BUCKET_LIST: Array<IMiniCard> = [
  ...BUCKET_LIST_COUNTRIES,
  ...BUCKET_LIST_CITIES
];
