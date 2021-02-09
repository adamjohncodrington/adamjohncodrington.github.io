import { COUNTRIES } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const generateCities = (): { [city: string]: City } => {
  let cities = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities) cities = { ...cities, ...country.cities };
  });
  return cities;
};

export const cities = generateCities();

export const CITIES: MiniCardProps[] = Object.values(cities).map(
  (city: City): MiniCardProps => {
    const { name, capital, insignificant } = city;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({ item: { city }, data: { tripLegs: DATA } });
    return {
      primaryText: name,
      star: capital,
      sort: [name],
      primaryCount,
      secondaryCount,
      countInfoIrrelevant: insignificant
    };
  }
);
