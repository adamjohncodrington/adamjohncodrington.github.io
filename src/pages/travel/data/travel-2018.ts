import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2018: Array<ITravelCard> = [
  {
    title: [LOCATIONS.DENMARK.cities.COPENHAGEN],
    subtitle: [LOCATIONS.DENMARK],
    dates: [new Date("2018-01-19"), new Date("2018-01-22")],
    company: [FRIENDS.LUKE_S],
    hidden: [LOCATIONS.DENMARK.attractions.LOUISIANA_ART_MUSEUM]
  },
  {
    title: [LOCATIONS.CYPRUS.cities.PAPHOS],
    subtitle: [LOCATIONS.CYPRUS],
    dates: [new Date("2018-05-17"), new Date("2018-05-21")],
    company: [FRIENDS.SIAN],
    hidden: [LOCATIONS.CYPRUS.attractions.PAPHOS_ARCHAEOLOGICAL_PARK]
  },
  {
    title: [LOCATIONS.CROATIA.cities.DUBROVNIK],
    subtitle: [LOCATIONS.CROATIA],
    dates: [new Date("2018-06-02"), new Date("2018-06-09")],
    company: [FRIENDS.DAD, FRIENDS.EMMA],
    hidden: [
      LOCATIONS.CROATIA.attractions.DUBROVNIK_WALLS,
      LOCATIONS.CROATIA.attractions.DUBROVNIK_CABLE_CAR
    ]
  },
  {
    title: [LOCATIONS.NETHERLANDS.cities.GRONINGEN],
    subtitle: [LOCATIONS.NETHERLANDS],
    hidden: [LOCATIONS.NETHERLANDS.attractions.GRONINGEN_MUSEUM],
    dates: [new Date("2018-07-14"), new Date("2018-07-16")],
    company: [FRIENDS.CARMEN]
  }
];
