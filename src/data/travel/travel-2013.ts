import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2013: Array<ITravelData> = [
  {
    title: [LOCATIONS.CUBA],
    subtitle: [LOCATIONS.CUBA.cities.HAVANA, LOCATIONS.CUBA.towns.VARADERO],
    dates: [new Date("2013-08-16"), new Date("2013-08-26")],
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  }
];
