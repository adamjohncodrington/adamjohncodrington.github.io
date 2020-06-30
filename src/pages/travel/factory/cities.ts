import { getItemCounts } from "@utils";

import { DATA } from "../data";

import { countries } from "./countries";

const countriesContainingCities: Array<ICountryTemplate> = countries.filter(
  ({ cities }: ICountryTemplate): boolean => !!cities
);

const citiesGroupedByCountry: Array<
  Array<ICity> | undefined
> = countriesContainingCities.map(
  ({ cities }: ICountryTemplate) => cities && Object.values(cities)
);

//@ts-ignore
const cities = [].concat.apply([], citiesGroupedByCountry);

export const citiesCounted: Array<ICityCounted> = cities.map(
  (city: ICity): ICityCounted => ({
    ...city,
    ...getItemCounts({ item: { city }, data: { travelCards: DATA.ALL } })
  })
);

export const CITIES_LIST_ITEMS: Array<ICountedListItem> = citiesCounted.map(
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
