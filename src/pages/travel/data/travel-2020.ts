import { FRIENDS, COUNTRIES } from "@constants";
import { PHOTOS_TRAVEL_OSLO } from "resources";

export const TRAVEL_2020: Array<ITrip> = [
  {
    primaryLocations: [COUNTRIES.NORWAY.cities.OSLO],
    country: COUNTRIES.NORWAY,
    secondaryLocations: [
      COUNTRIES.NORWAY.islands.HOVEDOYA,
      COUNTRIES.NORWAY.attractions.OSLO_FJORD_SAUNA
    ],
    dates: [new Date("2020-02-27"), new Date("2020-03-01")],
    company: [
      FRIENDS.RYAN_MILLS,
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.TOM_CHINDA_COUTTS,
      FRIENDS.TONYA_FRANCE
    ],
    photos: PHOTOS_TRAVEL_OSLO
  }
  // {
  //   primaryLocations: [COUNTRIES.BELIZE, COUNTRIES.COSTA_RICA],
  //   country:
  //     COUNTRIES.BELIZE.islands.CAYE_CAULKER,
  //     COUNTRIES.BELIZE.attractions.BARRIER_REEF,
  //     COUNTRIES.COSTA_RICA.attractions.CORCOVADO,
  //     COUNTRIES.COSTA_RICA.towns.MONTEVERDE,
  //     COUNTRIES.COSTA_RICA.towns.PUERTO_VIEJO
  //   ],
  //   secondaryLocations: [
  //     COUNTRIES.BELIZE.cities.BELIZE_CITY,
  //     COUNTRIES.BELIZE.islands.AMBERGRIS_CAYE,
  //     COUNTRIES.COSTA_RICA.cities.SAN_JOSE,
  //     COUNTRIES.COSTA_RICA.attractions.JAGUAR_RESCUE_CENTER
  //   ],
  //   dates: [new Date("2020-05-14"), new Date("2020-06-01")],
  //   company: FRIENDS.SIAN_RODWAY_SMITH
  // },
  // {
  //   title: COUNTRIES.SPAIN.cities.MADRID,
  //   subtitle: COUNTRIES.SPAIN,
  //   secondaryLocations: [COUNTRIES.SPAIN.attractions.PARQUE_WARNER],
  //   dates: [new Date("2020-07-07"), new Date("2020-07-10")],
  //   company: FRIENDS.DAN_SPARROW
  // }
];
