import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2004: Array<ITravelCard> = [
  {
    title: [LOCATIONS.USA],
    subtitle: [
      LOCATIONS.USA.cities.NEW_YORK_CITY,
      LOCATIONS.CANADA.cities.NIAGARA_FALLS,
      LOCATIONS.USA.cities.BOSTON_MASSACHUSETTS,
      LOCATIONS.USA.cities.SPRINGFIELD_MASSACHUSETTS,
      LOCATIONS.USA.regions.CAPE_COD,
      LOCATIONS.USA.islands.MARTHAS_VINEYARD
    ],
    hidden: [
      LOCATIONS.USA,
      LOCATIONS.USA.attractions.CENTRAL_PARK,
      LOCATIONS.USA.attractions.TIMES_SQUARE,
      LOCATIONS.USA.attractions.BROOKLYN_BRIDGE,
      LOCATIONS.USA.attractions.WORLD_TRADE_CENTER,
      LOCATIONS.CANADA,
      LOCATIONS.CANADA.attractions.NIAGARA_FALLS,
      LOCATIONS.USA.attractions.SIX_FLAGS_NEW_ENGLAND
    ],
    dates: [new Date("2004-07-30"), new Date("2004-08-17")],
    company: [FRIENDS.MUM, FRIENDS.EMMA, FRIENDS.DAD]
  }
];
