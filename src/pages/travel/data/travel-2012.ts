import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2012: Array<ITravelCard> = [
  {
    title: [
      COUNTRIES.EGYPT.cities.SHARM_EL_SHEIKH,
      COUNTRIES.EGYPT.cities.CAIRO
    ],
    subtitle: [COUNTRIES.EGYPT],
    hidden: [COUNTRIES.EGYPT.attractions.GIZA_PYRAMIDS_SPHINX],
    dates: [new Date("2012-07-22"), new Date("2012-07-29")],
    company: [FRIENDS.DAD]
  },
  {
    title: [COUNTRIES.ITALY.towns.JESOLO, COUNTRIES.ITALY.cities.VENICE],
    subtitle: [COUNTRIES.ITALY],
    dates: [new Date("2012-08-20"), new Date("2012-08-26")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
