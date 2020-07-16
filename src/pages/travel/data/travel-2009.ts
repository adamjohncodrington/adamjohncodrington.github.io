import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2009: Array<ITrip> = [
  {
    primaryLocations: [COUNTRIES.BELGIUM.attractions.BATTLEFIELDS],
    country: COUNTRIES.BELGIUM,
    secondaryLocations: [COUNTRIES.BELGIUM.cities.YPRES],
    dates: [new Date("2009-06-12"), new Date("2009-06-15")],
    company: [
      FRIENDS.CFS,
      FRIENDS.ELLIE_SPANOVIC,
      FRIENDS.GRACE_HULME,
      FRIENDS.BLAINE_PEARSON,
      FRIENDS.POOJA_DHIR,
      FRIENDS.ELLIE_GURKIN,
      FRIENDS.GEORGE_LITTLEHALES,
      FRIENDS.KIERAN_SAWFORD
    ]
  },
  {
    primaryLocations: [
      COUNTRIES.USA.cities.LAS_VEGAS,
      COUNTRIES.USA.attractions.GRAND_CANYON,
      COUNTRIES.USA.cities.LOS_ANGELES
    ],
    secondaryLocations: [
      COUNTRIES.USA.attractions.HOLLYWOOD_WALK_OF_FAME,
      COUNTRIES.USA.attractions.SIX_FLAGS_MAGIC_MOUNTAIN,
      COUNTRIES.USA.attractions.FARMERS_MARKET
    ],
    country: COUNTRIES.USA,
    dates: [new Date("2009-07-21"), new Date("2009-07-31")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    primaryLocations: [COUNTRIES.GREECE.islands.KOS],
    country: COUNTRIES.GREECE,
    dates: [new Date("2009-08-12"), new Date("2009-08-19")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
