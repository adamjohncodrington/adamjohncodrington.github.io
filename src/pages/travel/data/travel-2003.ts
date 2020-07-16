import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2003: Array<ITrip> = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.towns.LAGOS],
    country: COUNTRIES.PORTUGAL,
    secondaryLocations: [
      COUNTRIES.PORTUGAL.attractions.ZOOMARINE,
      COUNTRIES.PORTUGAL.cities.PORTIMAO
    ],
    dates: [new Date("2003-07-31"), new Date("2003-08-14")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
