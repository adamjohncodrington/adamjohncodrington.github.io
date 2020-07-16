import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2015: Array<ITrip> = [
  {
    title: [COUNTRIES.FRANCE.cities.PARIS],
    subtitle: [COUNTRIES.FRANCE],
    body: [
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
  },
  {
    title: [COUNTRIES.UGANDA],
    subtitle: [COUNTRIES.UGANDA.cities.JINJA],
    youtubeId: "ennXFiXhoAw",
    body: [
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
  },
  {
    title: [COUNTRIES.GERMANY.cities.BERLIN],
    favourite: true,
    subtitle: [COUNTRIES.GERMANY],
    body: [
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
    title: [COUNTRIES.CZECH_REPUBLIC.cities.PRAGUE],
    subtitle: [COUNTRIES.CZECH_REPUBLIC],
    body: [
      COUNTRIES.CZECH_REPUBLIC.attractions.JOHN_LENNON_WALL,
      COUNTRIES.CZECH_REPUBLIC.attractions.VYSEHRAD
    ],
    dates: [new Date("2015-09-14"), new Date("2015-09-17")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  },
  {
    title: [COUNTRIES.POLAND.cities.KRAKOW],
    subtitle: [COUNTRIES.POLAND],
    body: [
      COUNTRIES.POLAND.towns.WIELICZKA,
      COUNTRIES.POLAND.attractions.WIELICZKA_SALT_MINE,
      COUNTRIES.POLAND.attractions.AUSCHWITZ_BIRKENAU
    ],
    dates: [new Date("2015-09-17"), new Date("2015-09-19")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  },
  {
    title: [COUNTRIES.HUNGARY.cities.BUDAPEST],
    subtitle: [COUNTRIES.HUNGARY],
    body: [
      COUNTRIES.HUNGARY.attractions.CITADELLA,
      COUNTRIES.HUNGARY.attractions.PARLIAMENT_BUILDING,
      COUNTRIES.HUNGARY.attractions.THERMAL_BATH_SZECHENYI
    ],
    dates: [new Date("2015-09-20"), new Date("2015-09-24")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  }
];
