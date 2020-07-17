import { FRIENDS, COUNTRIES } from "@constants";

const DISNEYLAND_PARIS: ITrip = [
  {
    primaryLocations: [COUNTRIES.FRANCE.attractions.DISNEYLAND_PARIS],
    country: COUNTRIES.FRANCE,
    dates: [new Date("1999-05-27"), new Date("1999-05-30")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

const MINORCA_1999: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.MINORCA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("1999-07-23"), new Date("1999-08-06")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const TRAVEL_1999: Array<ITrip> = [MINORCA_1999, DISNEYLAND_PARIS];
