import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2020: Array<ITravelCard> = [
  {
    title: [LOCATIONS.NORWAY.cities.OSLO],
    subtitle: [LOCATIONS.NORWAY],
    hidden: [LOCATIONS.NORWAY.islands.HOVEDOYA],
    dates: [new Date("2020-02-27"), new Date("2020-03-01")],
    company: [FRIENDS.RYAN, FRIENDS.CAITLIN, FRIENDS.TOM, FRIENDS.TONYA]
  }
  // {
  //   title: [LOCATIONS.BELIZE, LOCATIONS.COSTA_RICA],
  //   subtitle: [
  //     LOCATIONS.BELIZE.islands.CAYE_CAULKER,
  //     LOCATIONS.BELIZE.attractions.BARRIER_REEF,
  //     LOCATIONS.COSTA_RICA.attractions.CORCOVADO,
  //     LOCATIONS.COSTA_RICA.towns.MONTEVERDE,
  //     LOCATIONS.COSTA_RICA.towns.PUERTO_VIEJO
  //   ],
  //   hidden: [
  //     LOCATIONS.BELIZE.cities.BELIZE_CITY,
  //     LOCATIONS.BELIZE.islands.AMBERGRIS_CAYE,
  //     LOCATIONS.COSTA_RICA.cities.SAN_JOSE,
  //     LOCATIONS.COSTA_RICA.attractions.JAGUAR_RESCUE_CENTER
  //   ],
  //   dates: [new Date("2020-05-14"), new Date("2020-06-01")],
  //   company: FRIENDS.SIAN
  // },
  // {
  //   title: LOCATIONS.SPAIN.cities.MADRID,
  //   subtitle: LOCATIONS.SPAIN,
  //   hidden: [LOCATIONS.SPAIN.attractions.PARQUE_WARNER],
  //   dates: [new Date("2020-07-07"), new Date("2020-07-10")],
  //   company: FRIENDS.DAN
  // }
];
