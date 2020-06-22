import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2010: Array<ITravelData> = [
  {
    title: [LOCATIONS.UAE.cities.DUBAI],
    subtitle: [LOCATIONS.UAE],
    hidden: [
      LOCATIONS.UAE.attractions.AQUAVENTURE,
      LOCATIONS.UAE.attractions.BURJ_KHALIFA
    ],
    dates: [new Date("2010-07-26"), new Date("2010-08-03")],
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  },
  {
    title: [LOCATIONS.PORTUGAL.towns.FERRAGUDO],
    subtitle: [LOCATIONS.PORTUGAL],
    dates: [new Date("2010-08-13"), new Date("2010-08-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA],
    hidden: [LOCATIONS.PORTUGAL.cities.PORTIMAO]
  }
];
