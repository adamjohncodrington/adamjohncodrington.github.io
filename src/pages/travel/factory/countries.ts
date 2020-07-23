import { COUNTRIES } from "@constants";
import {
  getItemCounts,
  countryMatchExists,
  getTripTitle,
  getDatesText,
  isInFuture,
  getTripSubtitle,
  detailsContainsFavourite
} from "utils";

import { TRAVEL as DATA } from "data";

const getTripsMatchingCountry = (
  country: ICountryTemplate
): Array<ITripLeg> => {
  const tripsMatchingCountry: Array<ITripLeg> = [];
  const trips: Array<ITripLeg> = DATA.TRIP_LEGS;
  trips.forEach((trip: ITripLeg): void => {
    if (countryMatchExists(country, trip)) tripsMatchingCountry.push(trip);
  });
  return tripsMatchingCountry;
};

const getCountryDetails = (
  country: ICountryTemplate
): Array<ICountedListItemDetail> => {
  const tripsMatchingCountry: Array<ITripLeg> = getTripsMatchingCountry(
    country
  );
  return tripsMatchingCountry.map(
    (trip: ITripLeg, index: number): ICountedListItemDetail => {
      const { dates, favourite, video } = trip;
      const tripTitle: string = getTripTitle(trip);
      const tripSubtitle: string | undefined = getTripSubtitle(trip);
      return {
        index: tripsMatchingCountry.length > 1 ? index + 1 : undefined,
        mainText: !tripTitle.includes(country.name)
          ? [tripTitle]
          : tripSubtitle
          ? [tripSubtitle]
          : undefined,
        favourite,
        video,
        dateText: getDatesText(dates),
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

export const COUNTRIES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  COUNTRIES
).map(
  (country: ICountryTemplate): ICountedListItem => {
    const details: Array<ICountedListItemDetail> = getCountryDetails(country);
    return {
      text: country.name,
      favourite: detailsContainsFavourite(details),
      ...getItemCounts({ item: { country }, data: { trips: DATA.TRIP_LEGS } }),
      details
    };
  }
);
