import { FRIENDS, COUNTRIES } from "@constants";

export const TENERIFE_1997: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.TENERIFE],
    country: COUNTRIES.SPAIN,
    dates: [new Date("1997-02-05"), new Date("1997-02-12")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const LANZAROTE_1998: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.LANZAROTE],
    country: COUNTRIES.SPAIN,
    dates: [new Date("1998-02-01"), new Date("1998-02-14")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const DISNEYLAND_PARIS: ITrip = [
  {
    primaryLocations: [COUNTRIES.FRANCE.attractions.DISNEYLAND_PARIS],
    country: COUNTRIES.FRANCE,
    dates: [new Date("1999-05-27"), new Date("1999-05-30")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const MINORCA_1999: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.MINORCA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("1999-07-23"), new Date("1999-08-06")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const MINORCA_2000: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.MINORCA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2000-07-28"), new Date("2000-08-11")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const IBIZA: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.IBIZA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2001-08-20"), new Date("2001-09-03")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const FLORIDA_2002: ITrip = [
  {
    primaryLocations: [COUNTRIES.USA.states.FLORIDA],
    country: COUNTRIES.USA,
    secondaryLocations: [
      COUNTRIES.USA.attractions.BUSCH_GARDENS_TAMPA,
      COUNTRIES.USA.attractions.DISNEY_EPCOT,
      COUNTRIES.USA.attractions.UNIVERSALS_ISLANDS_OF_ADVENTURE,
      COUNTRIES.USA.attractions.UNIVERSAL_STUDIOS_FLORIDA,
      COUNTRIES.USA.attractions.DISNEY_ANIMAL_KINGDOM,
      COUNTRIES.USA.attractions.DISNEY_MGM_STUDIOS,
      COUNTRIES.USA.attractions.DISNEY_MAGIC_KINGDOM,
      COUNTRIES.USA.attractions.BLIZZARD_BEACH,
      COUNTRIES.USA.attractions.SEAWORLD_ORLANDO
    ],
    dates: [new Date("2002-05-23"), new Date("2002-06-12")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const LAGOS: ITrip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.towns.LAGOS],
    country: COUNTRIES.PORTUGAL,
    secondaryLocations: [
      COUNTRIES.PORTUGAL.attractions.ZOOMARINE,
      COUNTRIES.PORTUGAL.cities.PORTIMAO
    ],
    dates: [new Date("2003-07-31"), new Date("2003-08-14")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const USA_2004: ITrip = [
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
