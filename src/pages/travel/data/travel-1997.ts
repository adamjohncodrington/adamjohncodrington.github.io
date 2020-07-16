import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_1997: Array<ITrip> = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.TENERIFE],
    country: COUNTRIES.SPAIN,
    dates: [new Date("1997-02-05"), new Date("1997-02-12")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
