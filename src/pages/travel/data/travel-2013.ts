import { FRIENDS, COUNTRIES } from "constant-objects";

export const TRAVEL_2013: Array<ITravelCard> = [
  {
    title: [COUNTRIES.CUBA],
    subtitle: [COUNTRIES.CUBA.cities.HAVANA, COUNTRIES.CUBA.towns.VARADERO],
    dates: [new Date("2013-08-16"), new Date("2013-08-26")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];
