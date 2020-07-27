import { COUNTRIES as countries } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import {
  getItemCounts,
  countryMatchExists,
  getTripTitle,
  getTripSubtitle,
  detailsContainsFavourite
} from "utils";

const getCountryMatches = (country: ICountryTemplate): Array<ITripLeg> => {
  const countryMatches: Array<ITripLeg> = [];
  DATA.forEach((trip: ITripLeg): void => {
    if (countryMatchExists(country, trip)) countryMatches.push(trip);
  });
  return countryMatches;
};

const getCountryDetails = (
  country: ICountryTemplate
): Array<IMiniCardPanelItem> => {
  const countryMatches: Array<ITripLeg> = getCountryMatches(country);
  return countryMatches.map(
    (trip: ITripLeg): IMiniCardPanelItem => {
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

export const COUNTRIES: Array<IMiniCard> = Object.values(countries).map(
  (country: ICountryTemplate): IMiniCard => {
    const details: Array<IMiniCardPanelItem> = getCountryDetails(country);
    return {
      text: country.name,
      favourite: detailsContainsFavourite(details),
      ...getItemCounts({ item: { country }, data: { tripLegs: DATA } }),
      details
    };
  }
);
