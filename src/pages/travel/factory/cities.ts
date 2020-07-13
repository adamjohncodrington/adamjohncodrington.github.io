import { COUNTRIES } from "@constants";
import { getItemCounts, cityMatchExists, isInFuture } from "utils";

import { DATA } from "../data";

const generateCities = (): { [city: string]: ICity } => {
  let cities = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities) cities = { ...cities, ...country.cities };
  });
  return cities;
};

export const CITIES = generateCities();

const getTripsMatchingCity = (city: ICity): Array<ITrip> => {
  const tripsMatchingCity: Array<ITrip> = [];
  const trips: Array<ITrip> = DATA.ALL;
  trips.forEach((trip: ITrip): void => {
    if (cityMatchExists(city, trip)) tripsMatchingCity.push(trip);
  });
  return tripsMatchingCity;
};

const getCityDetails = (city: ICity): Array<ICountedListItemDetail> => {
  const tripsMatchingCity: Array<ITrip> = getTripsMatchingCity(city);
  return tripsMatchingCity.map(
    (trip: ITrip, index: number): ICountedListItemDetail => {
      const { dates } = trip;
      return {
        index: tripsMatchingCity.length > 1 ? index + 1 : undefined,
        mainText: "COUNTRY GOES HERE",
        dateText: "DATE GOES HERE",
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

export const CITIES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  CITIES
).map(
  (city: ICity): ICountedListItem => {
    const { name, capital, insignificant } = city;
    return {
      text: name,
      star: capital,
      countInfoIrrelevant: insignificant,
      ...getItemCounts({ item: { city }, data: { trips: DATA.ALL } }),
      details: getCityDetails(city)
    };
  }
);
