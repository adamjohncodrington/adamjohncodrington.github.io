import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2004: Array<ITravelCard> = [
  {
    title: [COUNTRIES.USA],
    subtitle: [
      COUNTRIES.USA.cities.NEW_YORK_CITY,
      COUNTRIES.CANADA.cities.NIAGARA_FALLS,
      COUNTRIES.USA.cities.BOSTON_MASSACHUSETTS,
      COUNTRIES.USA.cities.SPRINGFIELD_MASSACHUSETTS,
      COUNTRIES.USA.regions.CAPE_COD,
      COUNTRIES.USA.islands.MARTHAS_VINEYARD
    ],
    hidden: [
      COUNTRIES.USA,
      COUNTRIES.USA.attractions.CENTRAL_PARK,
      COUNTRIES.USA.attractions.TIMES_SQUARE,
      COUNTRIES.USA.attractions.BROOKLYN_BRIDGE,
      COUNTRIES.USA.attractions.WORLD_TRADE_CENTER,
      COUNTRIES.CANADA,
      COUNTRIES.CANADA.attractions.NIAGARA_FALLS,
      COUNTRIES.USA.attractions.SIX_FLAGS_NEW_ENGLAND
    ],
    dates: [new Date("2004-07-30"), new Date("2004-08-17")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  }
];
