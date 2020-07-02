import { FRIENDS, COUNTRIES } from "constant-objects";

export const TRAVEL_2009: Array<ITravelCard> = [
  {
    title: [COUNTRIES.BELGIUM.attractions.BATTLEFIELDS],
    subtitle: [COUNTRIES.BELGIUM],
    hidden: [COUNTRIES.BELGIUM.cities.YPRES],
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
    title: [
      COUNTRIES.USA.cities.LAS_VEGAS,
      COUNTRIES.USA.attractions.GRAND_CANYON,
      COUNTRIES.USA.cities.LOS_ANGELES
    ],
    hidden: [
      COUNTRIES.USA.attractions.HOLLYWOOD_WALK_OF_FAME,
      COUNTRIES.USA.attractions.SIX_FLAGS_MAGIC_MOUNTAIN,
      COUNTRIES.USA.attractions.FARMERS_MARKET
    ],
    subtitle: [COUNTRIES.USA],
    dates: [new Date("2009-07-21"), new Date("2009-07-31")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.GREECE.islands.KOS],
    subtitle: [COUNTRIES.GREECE],
    dates: [new Date("2009-08-12"), new Date("2009-08-19")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
