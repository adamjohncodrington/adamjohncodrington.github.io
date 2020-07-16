import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2000: Array<ITrip> = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.MINORCA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2000-07-28"), new Date("2000-08-11")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
