import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2010: Array<ITravelCard> = [
  {
    title: [COUNTRIES.UAE.cities.DUBAI],
    subtitle: [COUNTRIES.UAE],
    hidden: [
      COUNTRIES.UAE.attractions.AQUAVENTURE,
      COUNTRIES.UAE.attractions.BURJ_KHALIFA
    ],
    dates: [new Date("2010-07-26"), new Date("2010-08-03")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.PORTUGAL.towns.FERRAGUDO],
    subtitle: [COUNTRIES.PORTUGAL],
    dates: [new Date("2010-08-13"), new Date("2010-08-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
    hidden: [COUNTRIES.PORTUGAL.cities.PORTIMAO]
  }
];
