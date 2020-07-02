import { FRIENDS, COUNTRIES } from "constant-objects";

export const TRAVEL_1999: Array<ITravelCard> = [
  {
    title: [COUNTRIES.FRANCE.attractions.DISNEYLAND_PARIS],
    subtitle: [COUNTRIES.FRANCE],
    dates: [new Date("1999-05-27"), new Date("1999-05-30")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.SPAIN.islands.MINORCA],
    subtitle: [COUNTRIES.SPAIN],
    dates: [new Date("1999-07-23"), new Date("1999-08-06")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
