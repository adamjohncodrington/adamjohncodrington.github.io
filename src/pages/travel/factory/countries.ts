import { COUNTRIES } from "@constants";
import {
  getItemCounts,
  countryMatchExists,
  getTripTitle,
  getDatesText,
  isInFuture
} from "utils";

import { DATA } from "../data";

const getTripsMatchingCountry = (country: ICountryTemplate): Array<ITrip> => {
  const tripsMatchingCountry: Array<ITrip> = [];
  const trips: Array<ITrip> = DATA.ALL;
  trips.forEach((trip: ITrip): void => {
    if (countryMatchExists(country, trip)) tripsMatchingCountry.push(trip);
  });
  return tripsMatchingCountry;
};

const getCountryDetails = (
  country: ICountryTemplate
): Array<ICountedListItemDetail> => {
  const tripsMatchingCountry: Array<ITrip> = getTripsMatchingCountry(country);
  return tripsMatchingCountry.map(
    (trip: ITrip, index: number): ICountedListItemDetail => {
      const { dates } = trip;
      return {
        index: tripsMatchingCountry.length > 1 ? index + 1 : undefined,
        mainText: getTripTitle(trip),
        dateText: getDatesText(dates),
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

export const COUNTRIES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  COUNTRIES
).map(
  (country: ICountryTemplate): ICountedListItem => ({
    text: country.name,
    ...getItemCounts({ item: { country }, data: { trips: DATA.ALL } }),
    details: getCountryDetails(country)
  })
);
