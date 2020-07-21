import {
  FRIENDS,
  COUNTRIES,
  DATE_TRIP_ECUADOR_START,
  DATE_TRIP_ECUADOR_END,
  DATE_TRIP_PERU_START,
  DATE_TRIP_PERU_END
} from "@constants";
import { YOUTUBE, PHOTOS_TRAVEL_PERU } from "resources";

const DUBLIN: ITrip = [
  {
    primaryLocations: [COUNTRIES.IRELAND.cities.DUBLIN],
    country: COUNTRIES.IRELAND,
    dates: [new Date("2016-02-05"), new Date("2016-02-07")],
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    secondaryLocations: [
      COUNTRIES.IRELAND.attractions.DUBLIN_PRISON,
      COUNTRIES.IRELAND.attractions.ST_STEPHENS_GREEN_PARK,
      COUNTRIES.IRELAND.attractions.GUINNESS_STOREHOUSE
    ]
  }
];

const TAVIRA: ITrip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.towns.TAVIRA],
    favourite: true,
    country: COUNTRIES.PORTUGAL,
    dates: [new Date("2016-06-09"), new Date("2016-06-16")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

const ECUADOR_PERU: ITrip = [
  {
    country: COUNTRIES.ECUADOR,
    primaryLocations: [
      COUNTRIES.ECUADOR.cities.QUITO,
      COUNTRIES.ECUADOR.cities.OTAVALO,
      COUNTRIES.ECUADOR.attractions.COTOPAXI,
      COUNTRIES.ECUADOR.cities.BANOS,
      COUNTRIES.ECUADOR.islands.GALAPAGOS
    ],
    secondaryLocations: [
      COUNTRIES.ECUADOR.attractions.EQUATOR_MONUMENT,
      COUNTRIES.ECUADOR.attractions.OTAVALO_MARKET,
      COUNTRIES.ECUADOR.attractions.PAILON_DEL_DIABLO,
      COUNTRIES.ECUADOR.cities.GUAYAQUIL,
      COUNTRIES.ECUADOR.attractions.TORTOISE_PARK
    ],
    showCountryAsTitle: true,
    youtubeVideo: YOUTUBE.TRAVEL.ECUADOR_PERU,
    dates: [DATE_TRIP_ECUADOR_START, DATE_TRIP_ECUADOR_END],
    company: []
  },
  {
    country: COUNTRIES.PERU,
    favourite: true,
    primaryLocations: [
      COUNTRIES.PERU.towns.MANCORA,
      COUNTRIES.PERU.cities.HUARAZ,
      COUNTRIES.PERU.cities.LIMA,
      COUNTRIES.PERU.towns.PARACAS,
      COUNTRIES.PERU.villages.HUACACHINA,
      COUNTRIES.PERU.cities.AREQUIPA,
      COUNTRIES.PERU.cities.CUSCO,
      COUNTRIES.PERU.attractions.MANU,
      COUNTRIES.PERU.attractions.MACHU_PICCHU
    ],
    photos: PHOTOS_TRAVEL_PERU,
    showCountryAsTitle: true,
    youtubeVideo: YOUTUBE.TRAVEL.ECUADOR_PERU,
    secondaryLocations: [
      COUNTRIES.PERU.attractions.HUASCARAN_PARK,
      COUNTRIES.PERU.attractions.LAGUNA_69,
      COUNTRIES.PERU.attractions.HUACACHINA,
      COUNTRIES.PERU.attractions.COLCA_CANYON,
      COUNTRIES.PERU.attractions.RAINBOW_MOUNTAIN,
      COUNTRIES.PERU.attractions.JUNGLE_ZIPLINE
    ],
    dates: [DATE_TRIP_PERU_START, DATE_TRIP_PERU_END],
    company: [FRIENDS.SARAH_WHITAKER]
  }
];

const BRAZIL: ITrip = [
  {
    country: COUNTRIES.BRAZIL,
    favourite: true,
    showCountryAsTitle: true,
    primaryLocations: [
      COUNTRIES.BRAZIL.cities.RIO_DE_JANEIRO,
      COUNTRIES.BRAZIL.islands.ILHA_GRANDE
    ],
    youtubeVideo: YOUTUBE.TRAVEL.BRAZIL,
    secondaryLocations: [
      COUNTRIES.BRAZIL.attractions.HANG_GLIDING,
      COUNTRIES.BRAZIL.attractions.MODERN_ART_MUSEUM_RIO,
      COUNTRIES.BRAZIL.attractions.COPACABANA_BEACH,
      COUNTRIES.BRAZIL.attractions.ROCINHA_FAVELA,
      COUNTRIES.BRAZIL.attractions.PICO_DO_PAPAGAIO,
      COUNTRIES.BRAZIL.attractions.SELARON_STEPS,
      COUNTRIES.BRAZIL.attractions.CHRIST_THE_REDEEMER
    ],
    dates: [new Date("2016-12-01"), new Date("2016-12-11")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  }
];

export const TRAVEL_2016: Array<ITrip> = [TAVIRA, BRAZIL, ECUADOR_PERU, DUBLIN];
