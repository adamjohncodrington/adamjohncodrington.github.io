import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2017: Array<ITravelCard> = [
  {
    title: [LOCATIONS.ITALY.cities.MILAN],
    subtitle: [LOCATIONS.ITALY],
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
      LOCATIONS.ITALY.attractions.MILAN_MALL,
      LOCATIONS.ITALY.attractions.SEMPIONE_PARK,
      LOCATIONS.ITALY.attractions.ARCO_DELLA_PACE
    ]
  },
  {
    title: [LOCATIONS.SPAIN.cities.BARCELONA],
    subtitle: [LOCATIONS.SPAIN],
    dates: [new Date("2017-06-15"), new Date("2017-06-18")],
    company: [
      FRIENDS.SIAN_RODWAY_SMITH,
      FRIENDS.LINDSEY_SKELTON,
      FRIENDS.BETH_OAKES,
      FRIENDS.ELLIE_FORMAN,
      FRIENDS.HARRIET_KESTERTON
    ],
    hidden: [
      LOCATIONS.SPAIN.attractions.PARK_GUELL,
      LOCATIONS.SPAIN.attractions.CIUTADELLA_PARK
    ]
  },
  {
    title: [LOCATIONS.SPAIN.islands.TENERIFE],
    subtitle: [LOCATIONS.SPAIN],
    dates: [new Date("2017-06-15"), new Date("2017-06-18")],
    company: [FRIENDS.LUKE_STERN],
    hidden: [LOCATIONS.SPAIN.attractions.SIAM_PARK]
  }
];
