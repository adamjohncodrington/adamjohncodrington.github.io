import { FRIENDS, COUNTRIES } from "@constants";

const IBIZA: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.IBIZA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2001-08-20"), new Date("2001-09-03")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const TRAVEL_2001: Array<ITrip> = [IBIZA];
