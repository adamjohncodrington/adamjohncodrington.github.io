import { COUNTRIES } from "@constants";
import { TRIP_LEGS as DATA } from "data";
import { getItemCounts } from "utils";

const generateCities = (): { [city: string]: ICity } => {
  let cities = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities) cities = { ...cities, ...country.cities };
  });
  return cities;
};

export const cities = generateCities();

export const CITIES: Array<IBasicListItem> = Object.values(cities).map(
  (city: ICity): IBasicListItem => {
    const { name, capital, insignificant } = city;
    return {
      text: name,
      star: capital,
      countInfoIrrelevant: insignificant,
      ...getItemCounts({ item: { city }, data: { tripLegs: DATA } })
    };
  }
);
