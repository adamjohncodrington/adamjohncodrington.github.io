import { FRIENDS, LOCATIONS } from "CONSTANTS";

export const TRAVEL_2009: Array<ITravelData> = [
  {
    title: [LOCATIONS.BELGIUM.attractions.BATTLEFIELDS],
    subtitle: [LOCATIONS.BELGIUM],
    hidden: [LOCATIONS.BELGIUM.cities.YPRES],
    dates: [new Date("2009-06-12"), new Date("2009-06-15")],
    company: [
      FRIENDS.CFS,
      FRIENDS.ELLIE_S,
      FRIENDS.GRACE,
      FRIENDS.BLAINE,
      FRIENDS.POOJA,
      FRIENDS.ELLIE_G,
      FRIENDS.GEORGE,
      FRIENDS.KIERAN_S
    ]
  },
  {
    title: [
      LOCATIONS.USA.cities.LAS_VEGAS,
      LOCATIONS.USA.attractions.GRAND_CANYON,
      LOCATIONS.USA.cities.LOS_ANGELES
    ],
    hidden: [
      LOCATIONS.USA.attractions.HOLLYWOOD_WALK_OF_FAME,
      LOCATIONS.USA.attractions.SIX_FLAGS_MAGIC_MOUNTAIN,
      LOCATIONS.USA.attractions.FARMERS_MARKET
    ],
    subtitle: [LOCATIONS.USA],
    dates: [new Date("2009-07-21"), new Date("2009-07-31")],
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  },
  {
    title: [LOCATIONS.GREECE.islands.KOS],
    subtitle: [LOCATIONS.GREECE],
    dates: [new Date("2009-08-12"), new Date("2009-08-19")],
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  }
];
