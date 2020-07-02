import { FRIENDS, COUNTRIES } from "constant-objects";

export const TRAVEL_2017: Array<ITravelCard> = [
  {
    title: [COUNTRIES.ITALY.cities.MILAN],
    subtitle: [COUNTRIES.ITALY],
    dates: [new Date("2017-05-12"), new Date("2017-05-14")],
    company: [
      FRIENDS.AISHA_SAEED,
      FRIENDS.JOE_EDWARDS,
      FRIENDS.JAMIE_HALKET,
      FRIENDS.PATRICIA_DIACONESCU,
      FRIENDS.JAZZ_THIND,
      FRIENDS.JHC
    ],
    hidden: [
      COUNTRIES.ITALY.attractions.MILAN_MALL,
      COUNTRIES.ITALY.attractions.SEMPIONE_PARK,
      COUNTRIES.ITALY.attractions.ARCO_DELLA_PACE
    ]
  },
  {
    title: [COUNTRIES.SPAIN.cities.BARCELONA],
    subtitle: [COUNTRIES.SPAIN],
    dates: [new Date("2017-06-15"), new Date("2017-06-18")],
    company: [
      FRIENDS.SIAN_RODWAY_SMITH,
      FRIENDS.LINDSEY_SKELTON,
      FRIENDS.BETH_OAKES,
      FRIENDS.ELLIE_FORMAN,
      FRIENDS.HARRIET_KESTERTON
    ],
    hidden: [
      COUNTRIES.SPAIN.attractions.PARK_GUELL,
      COUNTRIES.SPAIN.attractions.CIUTADELLA_PARK
    ]
  },
  {
    title: [COUNTRIES.SPAIN.islands.TENERIFE],
    subtitle: [COUNTRIES.SPAIN],
    dates: [new Date("2017-06-15"), new Date("2017-06-18")],
    company: [FRIENDS.LUKE_STERN],
    hidden: [COUNTRIES.SPAIN.attractions.SIAM_PARK]
  }
];
