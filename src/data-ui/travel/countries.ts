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
): Array<IMiniCardPanelDetail> => {
  const countryMatches: Array<ITripLeg> = getCountryMatches(country);
  return countryMatches.map(
    (trip: ITripLeg): IMiniCardPanelDetail => {
      const { dates, favourite, video } = trip;
      const tripTitle: string = getTripTitle(trip);
      const tripSubtitle: string | undefined = getTripSubtitle(trip);
      return {
        mainText: !tripTitle.includes(country.name)
          ? [tripTitle]
          : tripSubtitle
          ? [tripSubtitle]
          : [],
        favourite,
        sort: [dates[0]],
        video,
        dates
      };
    }
  );
};

export const COUNTRIES: Array<IMiniCard> = Object.values(countries).map(
  (country: ICountryTemplate): IMiniCard => {
    const details: Array<IMiniCardPanelDetail> = getCountryDetails(country);
    const { name } = country;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({ item: { country }, data: { tripLegs: DATA } });
    return {
      primaryText: name,
      sort: [name],
      favourite: detailsContainsFavourite(details),
      primaryCount,
      secondaryCount,
      details
    };
  }
);
