import { COUNTRIES as countries } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import {
  getItemCounts,
  countryMatchExists,
  getTripTitle,
  getTripSubtitle,
  detailsContainsFavourite
} from "utils";

const getCountryMatches = (country: ICountryTemplate): TripLeg[] => {
  const countryMatches: TripLeg[] = [];
  DATA.forEach((trip: TripLeg): void => {
    if (countryMatchExists(country, trip)) countryMatches.push(trip);
  });
  return countryMatches;
};

const getCountryDetails = (
  country: ICountryTemplate
): MiniCardPanelDetailProps[] => {
  const countryMatches: TripLeg[] = getCountryMatches(country);
  return countryMatches.map(
    (trip: TripLeg): MiniCardPanelDetailProps => {
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
        sort: [dates[0].valueOf()],
        video,
        dates
      };
    }
  );
};

export const COUNTRIES: MiniCardProps[] = Object.values(countries).map(
  (country: ICountryTemplate): MiniCardProps => {
    const details: MiniCardPanelDetailProps[] = getCountryDetails(country);
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
