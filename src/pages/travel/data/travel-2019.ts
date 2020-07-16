import { FRIENDS, COUNTRIES } from "@constants";
import {
  PHOTOS_TRAVEL_AMSTERDAM,
  PHOTOS_TRAVEL_LISBON,
  PHOTOS_TRAVEL_NICE,
  PHOTOS_TRAVEL_BRUGES
} from "resources";

const AMSTERDAM: ITrip = [
  {
    primaryLocations: [COUNTRIES.NETHERLANDS.cities.AMSTERDAM],
    country: COUNTRIES.NETHERLANDS,
    secondaryLocations: [
      COUNTRIES.NETHERLANDS.attractions.SEX_MUSEUM,
      COUNTRIES.NETHERLANDS.attractions.STEDELIJK_MUSEUM
    ],
    dates: [new Date("2019-02-01"), new Date("2019-02-04")],
    company: [
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.TONYA_FRANCE,
      FRIENDS.RYAN_MILLS,
      FRIENDS.TOM_CHINDA_COUTTS
    ],
    photos: PHOTOS_TRAVEL_AMSTERDAM
  }
];

const LISBON: ITrip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.cities.LISBON],
    country: COUNTRIES.PORTUGAL,
    photos: PHOTOS_TRAVEL_LISBON,
    secondaryLocations: [COUNTRIES.PORTUGAL.attractions.OCENARIO_DE_LISBOA],
    dates: [new Date("2019-02-08"), new Date("2019-02-10")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

const BRUGES: ITrip = [
  {
    primaryLocations: [COUNTRIES.BELGIUM.cities.BRUGES],
    photos: PHOTOS_TRAVEL_BRUGES,
    country: COUNTRIES.BELGIUM,
    secondaryLocations: [COUNTRIES.BELGIUM.attractions.BELFRY_OF_BRUGES],
    dates: [new Date("2019-05-17"), new Date("2019-05-19")],
    company: [FRIENDS.JAMIE_HALKET]
  }
];

const CATANIA: ITrip = [
  {
    primaryLocations: [COUNTRIES.ITALY.cities.CATANIA],
    country: COUNTRIES.ITALY,
    secondaryLocations: [COUNTRIES.ITALY.attractions.ETNA],
    hiddenLocations: [COUNTRIES.ITALY.regions.SICILY],
    dates: [new Date("2019-07-10"), new Date("2019-07-15")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

const NICE: ITrip = [
  {
    primaryLocations: [COUNTRIES.FRANCE.cities.NICE],
    photos: PHOTOS_TRAVEL_NICE,
    country: COUNTRIES.FRANCE,
    secondaryLocations: [COUNTRIES.FRANCE.cities.MONACO],
    dates: [new Date("2019-06-08"), new Date("2019-06-14")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  }
];

export const TRAVEL_2019: Array<ITrip> = [
  NICE,
  CATANIA,
  BRUGES,
  LISBON,
  AMSTERDAM
];
