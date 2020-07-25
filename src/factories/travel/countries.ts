import { COUNTRIES as countries } from "@constants";
import { TRAVEL as DATA } from "data";
import {
  getItemCounts,
  countryMatchExists,
  getTripTitle,
  getTripSubtitle,
  detailsContainsFavourite
} from "utils";

const getCountryMatches = (country: ICountryTemplate): Array<ITripLeg> => {
  const countryMatches: Array<ITripLeg> = [];
  const trips: Array<ITripLeg> = DATA.TRIP_LEGS;
  trips.forEach((trip: ITripLeg): void => {
    if (countryMatchExists(country, trip)) countryMatches.push(trip);
  });
  return countryMatches;
};

const getCountryDetails = (
  country: ICountryTemplate
): Array<IBasicListItemDetail> => {
  const countryMatches: Array<ITripLeg> = getCountryMatches(country);
  return countryMatches.map(
    (trip: ITripLeg, index: number): IBasicListItemDetail => {
      const { dates, favourite, video } = trip;
      const tripTitle: string = getTripTitle(trip);
      const tripSubtitle: string | undefined = getTripSubtitle(trip);
      return {
        mainText: !tripTitle.includes(country.name)
          ? [tripTitle]
          : tripSubtitle
          ? [tripSubtitle]
          : undefined,
        favourite,
        video,
        dates
      };
    }
  );
};

export const COUNTRIES: Array<IBasicListItem> = Object.values(countries).map(
  (country: ICountryTemplate): IBasicListItem => {
    const details: Array<IBasicListItemDetail> = getCountryDetails(country);
    return {
      text: country.name,
      favourite: detailsContainsFavourite(details),
      ...getItemCounts({ item: { country }, data: { trips: DATA.TRIP_LEGS } }),
      details
    };
  }
);
