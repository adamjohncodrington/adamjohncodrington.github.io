import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2004: Array<ITrip> = [
  {
    title: [COUNTRIES.USA.cities.NEW_YORK_CITY],
    subtitle: [COUNTRIES.USA],
    body: [
      COUNTRIES.USA.attractions.CENTRAL_PARK,
      COUNTRIES.USA.attractions.TIMES_SQUARE,
      COUNTRIES.USA.attractions.BROOKLYN_BRIDGE,
      COUNTRIES.USA.attractions.WORLD_TRADE_CENTER
    ],
    dates: [new Date("2004-07-30"), new Date("2004-08-04")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  },
  {
    title: [COUNTRIES.CANADA.cities.NIAGARA_FALLS],
    subtitle: [COUNTRIES.CANADA],
    body: [COUNTRIES.CANADA.cities.TORONTO],
    hidden: [COUNTRIES.CANADA.attractions.NIAGARA_FALLS],
    dates: [new Date("2004-08-04"), new Date("2004-08-06")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  },
  {
    title: [COUNTRIES.USA.states.MASSACHUSETTS],
    subtitle: [
      COUNTRIES.USA,
      COUNTRIES.USA.cities.BOSTON_MASSACHUSETTS,
      COUNTRIES.USA.cities.SPRINGFIELD_MASSACHUSETTS,
      COUNTRIES.USA.regions.CAPE_COD
    ],
    hidden: [COUNTRIES.USA],
    body: [
      COUNTRIES.USA.attractions.SIX_FLAGS_NEW_ENGLAND,
      COUNTRIES.USA.islands.MARTHAS_VINEYARD
    ],
    dates: [new Date("2004-08-06"), new Date("2004-08-17")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  }
];
