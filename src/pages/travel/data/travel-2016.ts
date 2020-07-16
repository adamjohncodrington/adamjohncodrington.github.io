import { FRIENDS, COUNTRIES } from "@constants";

const ecuadorAndPeruYouTubeId: string = "lteCbkamhcQ";

export const TRAVEL_2016: Array<ITrip> = [
  {
    title: [COUNTRIES.IRELAND.cities.DUBLIN],
    subtitle: [COUNTRIES.IRELAND],
    dates: [new Date("2016-02-05"), new Date("2016-02-07")],
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    body: [
      COUNTRIES.IRELAND.attractions.DUBLIN_PRISON,
      COUNTRIES.IRELAND.attractions.ST_STEPHENS_GREEN_PARK,
      COUNTRIES.IRELAND.attractions.GUINNESS_STOREHOUSE
    ]
  },
  {
    title: [COUNTRIES.PORTUGAL.towns.TAVIRA],
    favourite: true,
    subtitle: [COUNTRIES.PORTUGAL],
    dates: [new Date("2016-06-09"), new Date("2016-06-16")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.ECUADOR],
    subtitle: [
      COUNTRIES.ECUADOR.cities.QUITO,
      COUNTRIES.ECUADOR.cities.OTAVALO,
      COUNTRIES.ECUADOR.attractions.COTOPAXI,
      COUNTRIES.ECUADOR.cities.BANOS,
      COUNTRIES.ECUADOR.islands.GALAPAGOS
    ],
    body: [
      COUNTRIES.ECUADOR.attractions.EQUATOR_MONUMENT,
      COUNTRIES.ECUADOR.attractions.OTAVALO_MARKET,
      COUNTRIES.ECUADOR.attractions.PAILON_DEL_DIABLO,
      COUNTRIES.ECUADOR.cities.GUAYAQUIL,
      COUNTRIES.ECUADOR.attractions.TORTOISE_PARK
    ],
    youtubeId: ecuadorAndPeruYouTubeId,
    dates: [new Date("2016-10-03"), new Date("2016-10-16")],
    company: []
  },
  {
    title: [COUNTRIES.PERU],
    favourite: true,
    subtitle: [
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
    youtubeId: ecuadorAndPeruYouTubeId,
    body: [
      COUNTRIES.PERU.attractions.HUASCARAN_PARK,
      COUNTRIES.PERU.attractions.LAGUNA_69,
      COUNTRIES.PERU.attractions.HUACACHINA,
      COUNTRIES.PERU.attractions.COLCA_CANYON,
      COUNTRIES.PERU.attractions.RAINBOW_MOUNTAIN,
      COUNTRIES.PERU.attractions.JUNGLE_ZIPLINE
    ],
    dates: [new Date("2016-10-17"), new Date("2016-11-10")],
    company: [FRIENDS.SARAH_WHITAKER]
  },
  {
    title: [COUNTRIES.BRAZIL],
    favourite: true,
    subtitle: [
      COUNTRIES.BRAZIL.cities.RIO_DE_JANEIRO,
      COUNTRIES.BRAZIL.islands.ILHA_GRANDE
    ],
    youtubeId: "EvCJY_bq6rk",
    body: [
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
