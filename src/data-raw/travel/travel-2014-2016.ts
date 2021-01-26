import { FRIENDS, DATES, COUNTRIES } from "@constants";
import { PHOTOS, VIDEOS } from "resources";

export const BARBADOS: Trip = [
  {
    country: COUNTRIES.BARBADOS,
    showCountryAsTitle: true,
    dates: [new Date("2014-06-16"), new Date("2014-06-24")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON],
    secondaryLocations: [COUNTRIES.BARBADOS.attractions.HARRISONS_CAVE]
  }
];

export const THAILAND_LAOS: Trip = [
  {
    country: COUNTRIES.THAILAND,
    primaryLocations: [
      COUNTRIES.THAILAND.cities.BANGKOK,
      COUNTRIES.THAILAND.islands.KOH_PHANGAN,
      COUNTRIES.THAILAND.islands.KOH_TAO,
      COUNTRIES.THAILAND.islands.KOH_PHI_PHI,
      COUNTRIES.THAILAND.cities.CHIANG_MAI,
      COUNTRIES.THAILAND.towns.PAI
    ],
    video: VIDEOS.TRAVEL.THAILAND_LAOS,
    showCountryAsTitle: true,
    secondaryLocations: [
      COUNTRIES.THAILAND.attractions.SKY_BAR,
      COUNTRIES.THAILAND.attractions.GRAND_PALACE,
      COUNTRIES.THAILAND.attractions.TIGER_KINGDOM,
      COUNTRIES.THAILAND.attractions.WHITE_TEMPLE,
      COUNTRIES.THAILAND.attractions.MAYA_BAY,
      COUNTRIES.THAILAND.towns.KRABI,
      COUNTRIES.THAILAND.attractions.PAI_CANYON,
      COUNTRIES.THAILAND.cities.CHIANG_RAI
    ],
    dates: [DATES.TRAVEL.THAILAND.start, DATES.TRAVEL.THAILAND.end],
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    country: COUNTRIES.LAOS,
    showCountryAsTitle: true,
    video: VIDEOS.TRAVEL.THAILAND_LAOS,
    primaryLocations: [
      COUNTRIES.LAOS.cities.LUANG_PRABANG,
      COUNTRIES.LAOS.cities.VIENTIANE
    ],
    secondaryLocations: [
      COUNTRIES.LAOS.attractions.BUDDHA_PARK,
      COUNTRIES.LAOS.attractions.ELEPHANT_VILLAGE,
      COUNTRIES.LAOS.attractions.KUANG_SI_FALLS
    ],
    dates: [DATES.TRAVEL.LAOS.start, DATES.TRAVEL.LAOS.end],
    company: [FRIENDS.TONYA_FRANCE]
  }
];

export const PARIS_2015: Trip = [
  {
    primaryLocations: [COUNTRIES.FRANCE.cities.PARIS],
    photos: PHOTOS.TRAVEL.PARIS_2015,
    country: COUNTRIES.FRANCE,
    secondaryLocations: [
      COUNTRIES.FRANCE.attractions.SACRE_COEUR,
      COUNTRIES.FRANCE.attractions.LOUVRE,
      COUNTRIES.FRANCE.attractions.ARC_DE_TRIOMPHE,
      COUNTRIES.FRANCE.attractions.NOTRE_DAME,
      COUNTRIES.FRANCE.attractions.EIFFEL_TOWER,
      COUNTRIES.FRANCE.attractions.NOTRE_DAME
    ],
    dates: [new Date("2015-03-21"), new Date("2015-03-24")],
    company: [
      FRIENDS.POOJA_DHIR,
      FRIENDS.SONYA_PARDI,
      FRIENDS.CARMEN_DALGLISH,
      FRIENDS.TONYA_FRANCE,
      FRIENDS.GRACE_HULME,
      FRIENDS.ELLIE_GURKIN
    ]
  }
];

export const UGANDA: Trip = [
  {
    primaryLocations: [COUNTRIES.UGANDA.cities.JINJA],
    country: COUNTRIES.UGANDA,
    photos: PHOTOS.TRAVEL.UGANDA,
    video: VIDEOS.TRAVEL.UGANDA,
    showCountryAsTitle: true,
    secondaryLocations: [
      COUNTRIES.UGANDA.attractions.NILE_SOURCE,
      COUNTRIES.UGANDA.attractions.RAFTING_NALUBALE
    ],
    dates: [DATES.TRAVEL.UGANDA.start, DATES.TRAVEL.UGANDA.end],
    company: [
      FRIENDS.AMY_CALCUTT,
      FRIENDS.HEATHER_CHILES,
      FRIENDS.OSCAR_MURRAY,
      FRIENDS.LEAH_SLATER_RADWAY,
      FRIENDS.ELINORE_GILLESPIE,
      FRIENDS.ELISE_MORLEY,
      FRIENDS.SARAH_WALKER,
      FRIENDS.HEATHER_CHILES,
      FRIENDS.LEAH_SLATER_RADWAY,
      FRIENDS.ROB_GALL,
      FRIENDS.KATE_BOWMAR,
      FRIENDS.COURTNEY_LAWSON
    ]
  }
];

export const INTERRAILING: Trip = [
  {
    primaryLocations: [COUNTRIES.GERMANY.cities.BERLIN],
    favourite: true,
    photos: PHOTOS.TRAVEL.BERLIN,
    country: COUNTRIES.GERMANY,
    secondaryLocations: [
      COUNTRIES.GERMANY.attractions.BERLIN_WALL,
      COUNTRIES.GERMANY.attractions.BRANDENBURG_GATE,
      COUNTRIES.GERMANY.attractions.EAST_SIDE_GALLERY,
      COUNTRIES.GERMANY.attractions.HOLOCAUST_MEMORIAL,
      COUNTRIES.GERMANY.attractions.REICHSTAG
    ],
    dates: [new Date("2015-09-10"), new Date("2015-09-14")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  },
  {
    primaryLocations: [COUNTRIES.CZECH_REPUBLIC.cities.PRAGUE],
    country: COUNTRIES.CZECH_REPUBLIC,
    photos: PHOTOS.TRAVEL.PRAGUE,
    secondaryLocations: [
      COUNTRIES.CZECH_REPUBLIC.attractions.JOHN_LENNON_WALL,
      COUNTRIES.CZECH_REPUBLIC.attractions.VYSEHRAD
    ],
    dates: [new Date("2015-09-14"), new Date("2015-09-17")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  },
  {
    primaryLocations: [COUNTRIES.POLAND.cities.KRAKOW],
    country: COUNTRIES.POLAND,
    photos: PHOTOS.TRAVEL.KRAKOW,
    secondaryLocations: [
      COUNTRIES.POLAND.towns.WIELICZKA,
      COUNTRIES.POLAND.attractions.WIELICZKA_SALT_MINE,
      COUNTRIES.POLAND.attractions.AUSCHWITZ_BIRKENAU
    ],
    dates: [new Date("2015-09-17"), new Date("2015-09-19")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  },
  {
    primaryLocations: [COUNTRIES.HUNGARY.cities.BUDAPEST],
    country: COUNTRIES.HUNGARY,
    secondaryLocations: [
      COUNTRIES.HUNGARY.attractions.CITADELLA,
      COUNTRIES.HUNGARY.attractions.PARLIAMENT_BUILDING,
      COUNTRIES.HUNGARY.attractions.THERMAL_BATH_SZECHENYI
    ],
    dates: [new Date("2015-09-20"), new Date("2015-09-24")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  }
];

export const DUBLIN: Trip = [
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

export const TAVIRA: Trip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.towns.TAVIRA],
    favourite: true,
    country: COUNTRIES.PORTUGAL,
    dates: [new Date("2016-06-09"), new Date("2016-06-16")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

export const ECUADOR_PERU: Trip = [
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
    video: VIDEOS.TRAVEL.ECUADOR_PERU,
    dates: [DATES.TRAVEL.ECUADOR.start, DATES.TRAVEL.ECUADOR.end],
    company: [],
    photos: PHOTOS.TRAVEL.ECUADOR
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
    photos: PHOTOS.TRAVEL.PERU,
    showCountryAsTitle: true,
    video: VIDEOS.TRAVEL.ECUADOR_PERU,
    secondaryLocations: [
      COUNTRIES.PERU.attractions.HUASCARAN_PARK,
      COUNTRIES.PERU.attractions.LAGUNA_69,
      COUNTRIES.PERU.attractions.HUACACHINA,
      COUNTRIES.PERU.attractions.COLCA_CANYON,
      COUNTRIES.PERU.attractions.RAINBOW_MOUNTAIN,
      COUNTRIES.PERU.attractions.JUNGLE_ZIPLINE
    ],
    dates: [DATES.TRAVEL.PERU.start, DATES.TRAVEL.PERU.end],
    company: [FRIENDS.SARAH_WHITAKER]
  }
];

export const BRAZIL: Trip = [
  {
    country: COUNTRIES.BRAZIL,
    favourite: true,
    showCountryAsTitle: true,
    primaryLocations: [
      COUNTRIES.BRAZIL.cities.RIO_DE_JANEIRO,
      COUNTRIES.BRAZIL.islands.ILHA_GRANDE
    ],
    video: VIDEOS.TRAVEL.RIO_ILHA_GRANDE,
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
