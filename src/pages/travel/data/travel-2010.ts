import { FRIENDS, COUNTRIES } from "@constants";

const DUBAI: ITrip = [
  {
    primaryLocations: [COUNTRIES.UAE.cities.DUBAI],
    country: COUNTRIES.UAE,
    secondaryLocations: [
      COUNTRIES.UAE.attractions.AQUAVENTURE,
      COUNTRIES.UAE.attractions.BURJ_KHALIFA
    ],
    dates: [new Date("2010-07-26"), new Date("2010-08-03")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

const FERRAGUDO: ITrip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.towns.FERRAGUDO],
    country: COUNTRIES.PORTUGAL,
    dates: [new Date("2010-08-13"), new Date("2010-08-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
    secondaryLocations: [COUNTRIES.PORTUGAL.cities.PORTIMAO]
  }
];

export const TRAVEL_2010: Array<ITrip> = [DUBAI, FERRAGUDO];
