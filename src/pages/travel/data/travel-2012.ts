import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2012: Array<ITravelCard> = [
  {
    title: [
      LOCATIONS.EGYPT.cities.SHARM_EL_SHEIKH,
      LOCATIONS.EGYPT.cities.CAIRO
    ],
    subtitle: [LOCATIONS.EGYPT],
    hidden: [LOCATIONS.EGYPT.attractions.GIZA_PYRAMIDS_SPHINX],
    dates: [new Date("2012-07-22"), new Date("2012-07-29")],
    company: [FRIENDS.DAD]
  },
  {
    title: [LOCATIONS.ITALY.towns.JESOLO, LOCATIONS.ITALY.cities.VENICE],
    subtitle: [LOCATIONS.ITALY],
    dates: [new Date("2012-08-20"), new Date("2012-08-26")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
