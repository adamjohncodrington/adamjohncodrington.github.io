import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2017: Array<ITrip> = [
  {
    primaryLocations: [COUNTRIES.ITALY.cities.MILAN],
    country: COUNTRIES.ITALY,
    dates: [new Date("2017-05-12"), new Date("2017-05-14")],
    company: [
      FRIENDS.AISHA_SAEED,
      FRIENDS.JOE_EDWARDS,
      FRIENDS.JAMIE_HALKET,
      FRIENDS.PATRICIA_DIACONESCU,
      FRIENDS.JAZZ_THIND,
      FRIENDS.JHC
    ],
    youtubeId: "Dqq4RY6ZYF8",
    secondaryLocations: [
      COUNTRIES.ITALY.attractions.MILAN_MALL,
      COUNTRIES.ITALY.attractions.SEMPIONE_PARK,
      COUNTRIES.ITALY.attractions.ARCO_DELLA_PACE
    ]
  },
  {
    primaryLocations: [COUNTRIES.SPAIN.cities.BARCELONA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2017-06-15"), new Date("2017-06-18")],
    company: [
      FRIENDS.SIAN_RODWAY_SMITH,
      FRIENDS.LINDSEY_SKELTON,
      FRIENDS.BETH_OAKES,
      FRIENDS.ELLIE_FORMAN,
      FRIENDS.HARRIET_KESTERTON
    ],
    secondaryLocations: [
      COUNTRIES.SPAIN.attractions.PARK_GUELL,
      COUNTRIES.SPAIN.attractions.CIUTADELLA_PARK
    ]
  },
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.TENERIFE],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2017-06-15"), new Date("2017-06-18")],
    company: [FRIENDS.LUKE_STERN],
    secondaryLocations: [COUNTRIES.SPAIN.attractions.SIAM_PARK]
  }
];
