import { FRIENDS, COUNTRIES } from "@constants";

const COPENHAGEN: ITrip = [
  {
    primaryLocations: [COUNTRIES.DENMARK.cities.COPENHAGEN],
    country: COUNTRIES.DENMARK,
    dates: [new Date("2018-01-19"), new Date("2018-01-22")],
    company: [FRIENDS.LUKE_STERN],
    secondaryLocations: [COUNTRIES.DENMARK.attractions.LOUISIANA_ART_MUSEUM]
  }
];

const PAPHOS: ITrip = [
  {
    primaryLocations: [COUNTRIES.CYPRUS.cities.PAPHOS],
    country: COUNTRIES.CYPRUS,
    dates: [new Date("2018-05-17"), new Date("2018-05-21")],
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    secondaryLocations: [
      COUNTRIES.CYPRUS.attractions.PAPHOS_ARCHAEOLOGICAL_PARK
    ]
  }
];

const DUBROVNIK: ITrip = [
  {
    primaryLocations: [COUNTRIES.CROATIA.cities.DUBROVNIK],
    favourite: true,
    country: COUNTRIES.CROATIA,
    dates: [new Date("2018-06-02"), new Date("2018-06-09")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON],
    secondaryLocations: [
      COUNTRIES.CROATIA.attractions.DUBROVNIK_WALLS,
      COUNTRIES.CROATIA.attractions.DUBROVNIK_CABLE_CAR
    ]
  }
];

const GRONINGEN: ITrip = [
  {
    primaryLocations: [COUNTRIES.NETHERLANDS.cities.GRONINGEN],
    country: COUNTRIES.NETHERLANDS,
    secondaryLocations: [COUNTRIES.NETHERLANDS.attractions.GRONINGEN_MUSEUM],
    dates: [new Date("2018-07-14"), new Date("2018-07-16")],
    company: [FRIENDS.CARMEN_DALGLISH]
  }
];

export const TRAVEL_2018: Array<ITrip> = [
  GRONINGEN,
  DUBROVNIK,
  PAPHOS,
  COPENHAGEN
];
