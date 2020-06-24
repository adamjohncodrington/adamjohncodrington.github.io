import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2017: Array<ITravelCard> = [
  {
    title: [LOCATIONS.ITALY.cities.MILAN],
    subtitle: [LOCATIONS.ITALY],
    dates: [new Date("2017-05-12"), new Date("2017-05-14")],
    company: [
      FRIENDS.AISHA,
      FRIENDS.JOE,
      FRIENDS.JAMIE,
      FRIENDS.PATRICIA,
      FRIENDS.JAZZ,
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
      FRIENDS.SIAN,
      FRIENDS.LINDSEY_S,
      FRIENDS.BETH_O,
      FRIENDS.ELLIE_F,
      FRIENDS.HARRIET_K
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
    company: [FRIENDS.LUKE_S],
    hidden: [LOCATIONS.SPAIN.attractions.SIAM_PARK]
  }
];
