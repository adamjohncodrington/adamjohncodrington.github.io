import { FRIENDS, COUNTRIES } from "@constants";

const PARIS_2015: ITrip = [
  {
    primaryLocations: [COUNTRIES.FRANCE.cities.PARIS],
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

const UGANDA: ITrip = [
  {
    primaryLocations: [COUNTRIES.UGANDA.cities.JINJA],
    country: COUNTRIES.UGANDA,
    youtubeId: "ennXFiXhoAw",
    showCountryAsTitle: true,
    secondaryLocations: [
      COUNTRIES.UGANDA.attractions.NILE_SOURCE,
      COUNTRIES.UGANDA.attractions.RAFTING_NALUBALE
    ],
    dates: [new Date("2015-08-04"), new Date("2015-09-05")],
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

const INTERRAILING: ITrip = [
  {
    primaryLocations: [COUNTRIES.GERMANY.cities.BERLIN],
    favourite: true,
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

export const TRAVEL_2015: Array<ITrip> = [PARIS_2015, UGANDA, INTERRAILING];
