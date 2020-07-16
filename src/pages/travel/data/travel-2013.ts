import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2013: Array<ITrip> = [
  {
    country: COUNTRIES.CUBA,
    primaryLocations: [
      COUNTRIES.CUBA.cities.HAVANA,
      COUNTRIES.CUBA.towns.VARADERO
    ],
    showCountryAsTitle: true,
    dates: [new Date("2013-08-16"), new Date("2013-08-26")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];
