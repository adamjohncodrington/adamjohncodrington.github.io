import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_1998: Array<ITrip> = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.LANZAROTE],
    country: COUNTRIES.SPAIN,
    dates: [new Date("1998-02-01"), new Date("1998-02-14")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
