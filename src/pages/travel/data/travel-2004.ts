import { FRIENDS, COUNTRIES } from "@constants";

const USA_2004: ITrip = [
  {
    primaryLocations: [COUNTRIES.USA.cities.NEW_YORK_CITY],
    country: COUNTRIES.USA,
    favourite: true,
    secondaryLocations: [
      COUNTRIES.USA.attractions.CENTRAL_PARK,
      COUNTRIES.USA.attractions.TIMES_SQUARE,
      COUNTRIES.USA.attractions.BROOKLYN_BRIDGE,
      COUNTRIES.USA.attractions.WORLD_TRADE_CENTER
    ],
    dates: [new Date("2004-07-30"), new Date("2004-08-04")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  },
  {
    primaryLocations: [COUNTRIES.CANADA.cities.NIAGARA_FALLS],
    country: COUNTRIES.CANADA,
    secondaryLocations: [COUNTRIES.CANADA.cities.TORONTO],
    hiddenLocations: [COUNTRIES.CANADA.attractions.NIAGARA_FALLS],
    dates: [new Date("2004-08-04"), new Date("2004-08-06")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  },
  {
    hiddenLocations: [COUNTRIES.USA.states.MASSACHUSETTS],
    primaryLocations: [
      COUNTRIES.USA.cities.BOSTON_MASSACHUSETTS,
      COUNTRIES.USA.cities.SPRINGFIELD_MASSACHUSETTS,
      COUNTRIES.USA.regions.CAPE_COD
    ],
    country: COUNTRIES.USA,
    secondaryLocations: [
      COUNTRIES.USA.attractions.SIX_FLAGS_NEW_ENGLAND,
      COUNTRIES.USA.islands.MARTHAS_VINEYARD
    ],
    dates: [new Date("2004-08-06"), new Date("2004-08-17")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  }
];

export const TRAVEL_2004: Array<ITrip> = [USA_2004];
