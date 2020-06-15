import { FRIENDS, LOCATIONS } from "../../constants";

export const TRAVEL_2016: Array<ITravelData> = [
  {
    title: [LOCATIONS.IRELAND.cities.DUBLIN],
    subtitle: [LOCATIONS.IRELAND],
    dates: [new Date("2016-02-05"), new Date("2016-02-07")],
    company: [FRIENDS.SIAN],
    hidden: [
      LOCATIONS.IRELAND.attractions.DUBLIN_PRISON,
      LOCATIONS.IRELAND.attractions.ST_STEPHENS_GREEN_PARK,
      LOCATIONS.IRELAND.attractions.GUINNESS_STOREHOUSE
    ]
  },
  {
    title: [LOCATIONS.PORTUGAL.towns.TAVIRA],
    subtitle: [LOCATIONS.PORTUGAL],
    dates: [new Date("2016-06-09"), new Date("2016-06-16")],
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  },
  {
    title: [LOCATIONS.ECUADOR, LOCATIONS.PERU],
    subtitle: [
      LOCATIONS.ECUADOR.cities.QUITO,
      LOCATIONS.ECUADOR.cities.OTAVALO,
      LOCATIONS.ECUADOR.attractions.COTOPAXI,
      LOCATIONS.ECUADOR.cities.BANOS,
      LOCATIONS.ECUADOR.islands.GALAPAGOS,
      LOCATIONS.PERU.towns.MANCORA,
      LOCATIONS.PERU.cities.HUARAZ,
      LOCATIONS.PERU.cities.LIMA,
      LOCATIONS.PERU.towns.PARACAS,
      LOCATIONS.PERU.villages.HUACACHINA,
      LOCATIONS.PERU.cities.AREQUIPA,
      LOCATIONS.PERU.attractions.COLCA_CANYON,
      LOCATIONS.PERU.cities.CUSCO,
      LOCATIONS.PERU.attractions.MANU,
      LOCATIONS.PERU.attractions.RAINBOW_MOUNTAIN,
      LOCATIONS.PERU.attractions.MACHU_PICCHU
    ],
    hidden: [
      LOCATIONS.ECUADOR.attractions.EQUATOR_MONUMENT,
      LOCATIONS.ECUADOR.attractions.OTAVALO_MARKET,
      LOCATIONS.ECUADOR.attractions.PAILON_DEL_DIABLO,
      LOCATIONS.ECUADOR.cities.GUAYAQUIL,
      LOCATIONS.ECUADOR.attractions.TORTOISE_PARK,
      LOCATIONS.PERU.attractions.HUASCARAN_PARK,
      LOCATIONS.PERU.attractions.LAGUNA_69,
      LOCATIONS.PERU.attractions.HUACACHINA,
      LOCATIONS.PERU.attractions.JUNGLE_ZIPLINE
    ],
    dates: [new Date("2016-10-03"), new Date("2016-11-10")],
    company: [FRIENDS.SARAH_W, FRIENDS.SIAN]
  },
  {
    title: [
      LOCATIONS.BRAZIL.cities.RIO_DE_JANEIRO,
      LOCATIONS.BRAZIL.islands.ILHA_GRANDE
    ],
    hidden: [
      LOCATIONS.BRAZIL.attractions.HANG_GLIDING,
      LOCATIONS.BRAZIL.attractions.MODERN_ART_MUSEUM_RIO,
      LOCATIONS.BRAZIL.attractions.COPACABANA_BEACH,
      LOCATIONS.BRAZIL.attractions.ROCINHA_FAVELA,
      LOCATIONS.BRAZIL.attractions.PICO_DO_PAPAGAIO,
      LOCATIONS.BRAZIL.attractions.SELARON_STEPS,
      LOCATIONS.BRAZIL.attractions.CHRIST_THE_REDEEMER
    ],
    subtitle: [LOCATIONS.BRAZIL],
    dates: [new Date("2016-12-01"), new Date("2016-12-11")],
    company: [FRIENDS.SIAN]
  }
];
