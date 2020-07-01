import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_1999: Array<ITravelCard> = [
  {
    title: [LOCATIONS.FRANCE.attractions.DISNEYLAND_PARIS],
    subtitle: [LOCATIONS.FRANCE],
    dates: [new Date("1999-05-27"), new Date("1999-05-30")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [LOCATIONS.SPAIN.islands.MINORCA],
    subtitle: [LOCATIONS.SPAIN],
    dates: [new Date("1999-07-23"), new Date("1999-08-06")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
