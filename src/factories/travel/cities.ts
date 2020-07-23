import { COUNTRIES } from "@constants";
import { TRAVEL as DATA } from "data";
import { getItemCounts } from "utils";

const generateCities = (): { [city: string]: ICity } => {
  let cities = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities) cities = { ...cities, ...country.cities };
  });
  return cities;
};

export const cities = generateCities();

export const CITIES: Array<ICountedListItem> = Object.values(cities).map(
  (city: ICity): ICountedListItem => {
    const { name, capital, insignificant } = city;
    return {
      text: name,
      star: capital,
      countInfoIrrelevant: insignificant,
      ...getItemCounts({ item: { city }, data: { trips: DATA.TRIP_LEGS } })
    };
  }
);
