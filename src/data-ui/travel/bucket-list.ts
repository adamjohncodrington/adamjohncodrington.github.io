import { COUNTRIES as countries } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import { getItemCounts } from "utils";

import { cities } from "./cities";

const bucketListCountries: ICountryCounted[] = Object.values(countries)
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

const BUCKET_LIST_COUNTRIES: MiniCardProps[] = bucketListCountries.map(
  ({ name, pastCount, futureCount }: ICountryCounted): MiniCardProps => ({
    primaryText: name,
    sort: [name],
    primaryCount: pastCount,
    secondaryCount: futureCount,
    countInfoIrrelevant: true
  })
);

const bucketListCities: ICityCounted[] = Object.values(cities)
  .map(
    (city: City): ICityCounted => ({
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

const BUCKET_LIST_CITIES: MiniCardProps[] = bucketListCities.map(
  ({ name, capital, pastCount, futureCount }: ICityCounted): MiniCardProps => ({
    primaryText: name,
    sort: [name],
    star: capital,
    primaryCount: pastCount,
    secondaryCount: futureCount,
    countInfoIrrelevant: true
  })
);

export const BUCKET_LIST: MiniCardProps[] = [
  ...BUCKET_LIST_COUNTRIES,
  ...BUCKET_LIST_CITIES
];
