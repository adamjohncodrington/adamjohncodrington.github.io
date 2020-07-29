import { COUNTRIES } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const generateCities = (): { [city: string]: ICity } => {
  let cities = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities) cities = { ...cities, ...country.cities };
  });
  return cities;
};

export const cities = generateCities();

export const CITIES: Array<IMiniCard> = Object.values(cities).map(
  (city: ICity): IMiniCard => {
    const { name, capital, insignificant } = city;
    return {
      text: name,
      star: capital,
      sort: name,
      countInfoIrrelevant: insignificant,
      ...getItemCounts({ item: { city }, data: { tripLegs: DATA } })
    };
  }
);
