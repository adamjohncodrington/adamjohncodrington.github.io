import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2003: Array<ITravelCard> = [
  {
    title: [LOCATIONS.PORTUGAL],
    hidden: [LOCATIONS.PORTUGAL.attractions.ZOOMARINE],
    dates: [new Date("2003-07-31"), new Date("2003-08-14")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
