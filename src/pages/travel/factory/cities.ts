import { COUNTRIES } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

const generateCities = (): { [city: string]: ICity } => {
  let cities = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities) cities = { ...cities, ...country.cities };
  });
  return cities;
};

export const CITIES = generateCities();

export const CITIES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  CITIES
).map(
  (city: ICity): ICountedListItem => {
    const { name, capital, insignificant } = city;
    return {
      text: name,
      star: capital,
      countInfoIrrelevant: insignificant,
      ...getItemCounts({ item: { city }, data: { trips: DATA.ALL } })
    };
  }
);
