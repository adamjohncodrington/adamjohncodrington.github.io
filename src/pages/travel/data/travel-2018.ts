import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2018: Array<ITrip> = [
  {
    title: [COUNTRIES.DENMARK.cities.COPENHAGEN],
    subtitle: [COUNTRIES.DENMARK],
    dates: [new Date("2018-01-19"), new Date("2018-01-22")],
    company: [FRIENDS.LUKE_STERN],
    body: [COUNTRIES.DENMARK.attractions.LOUISIANA_ART_MUSEUM]
  },
  {
    title: [COUNTRIES.CYPRUS.cities.PAPHOS],
    subtitle: [COUNTRIES.CYPRUS],
    dates: [new Date("2018-05-17"), new Date("2018-05-21")],
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    body: [COUNTRIES.CYPRUS.attractions.PAPHOS_ARCHAEOLOGICAL_PARK]
  },
  {
    title: [COUNTRIES.CROATIA.cities.DUBROVNIK],
    favourite: true,
    subtitle: [COUNTRIES.CROATIA],
    dates: [new Date("2018-06-02"), new Date("2018-06-09")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON],
    body: [
      COUNTRIES.CROATIA.attractions.DUBROVNIK_WALLS,
      COUNTRIES.CROATIA.attractions.DUBROVNIK_CABLE_CAR
    ]
  },
  {
    title: [COUNTRIES.NETHERLANDS.cities.GRONINGEN],
    subtitle: [COUNTRIES.NETHERLANDS],
    body: [COUNTRIES.NETHERLANDS.attractions.GRONINGEN_MUSEUM],
    dates: [new Date("2018-07-14"), new Date("2018-07-16")],
    company: [FRIENDS.CARMEN_DALGLISH]
  }
];
