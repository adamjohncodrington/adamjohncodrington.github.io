import { FRIENDS, LOCATIONS } from "CONSTANTS";

export const TRAVEL_2015: Array<ITravelData> = [
  {
    title: [LOCATIONS.FRANCE.cities.PARIS],
    subtitle: [LOCATIONS.FRANCE],
    hidden: [
      LOCATIONS.FRANCE.attractions.SACRE_COEUR,
      LOCATIONS.FRANCE.attractions.LOUVRE,
      LOCATIONS.FRANCE.attractions.ARC_DE_TRIOMPHE,
      LOCATIONS.FRANCE.attractions.NOTRE_DAME,
      LOCATIONS.FRANCE.attractions.EIFFEL_TOWER,
      LOCATIONS.FRANCE.attractions.NOTRE_DAME
    ],
    dates: [new Date("2015-03-21"), new Date("2015-03-24")],
    company: [
      FRIENDS.POOJA,
      FRIENDS.SONYA,
      FRIENDS.CARMEN,
      FRIENDS.TONYA,
      FRIENDS.GRACE,
      FRIENDS.ELLIE_G
    ]
  },
  {
    title: [LOCATIONS.UGANDA],
    subtitle: [LOCATIONS.UGANDA.cities.JINJA],
    hidden: [
      LOCATIONS.UGANDA.attractions.NILE_SOURCE,
      LOCATIONS.UGANDA.attractions.RAFTING_NALUBALE
    ],
    dates: [new Date("2015-08-04"), new Date("2015-09-05")],
    company: [
      FRIENDS.AMY_C,
      FRIENDS.HEATHER_C,
      FRIENDS.OSCAR,
      FRIENDS.LEAH,
      FRIENDS.ELINORE_G,
      FRIENDS.ELISE,
      FRIENDS.SARAH_WA,
      FRIENDS.HEATHER_C,
      FRIENDS.LEAH,
      FRIENDS.ROB_G,
      FRIENDS.KATE_B,
      FRIENDS.COURTNEY
    ]
  },
  {
    title: [{ name: "interrailing" }],
    subtitle: [
      LOCATIONS.GERMANY.cities.BERLIN,
      LOCATIONS.CZECH_REPUBLIC.cities.PRAGUE,
      LOCATIONS.POLAND.cities.KRAKOW,
      LOCATIONS.HUNGARY.cities.BUDAPEST
    ],
    hidden: [
      LOCATIONS.GERMANY,
      LOCATIONS.GERMANY.attractions.BERLIN_WALL,
      LOCATIONS.GERMANY.attractions.BRANDENBURG_GATE,
      LOCATIONS.GERMANY.attractions.EAST_SIDE_GALLERY,
      LOCATIONS.GERMANY.attractions.HOLOCAUST_MEMORIAL,
      LOCATIONS.GERMANY.attractions.REICHSTAG,
      LOCATIONS.CZECH_REPUBLIC,
      LOCATIONS.CZECH_REPUBLIC.attractions.JOHN_LENNON_WALL,
      LOCATIONS.CZECH_REPUBLIC.attractions.VYSEHRAD,
      LOCATIONS.POLAND,
      LOCATIONS.POLAND.towns.WIELICZKA,
      LOCATIONS.POLAND.attractions.WIELICZKA_SALT_MINE,
      LOCATIONS.POLAND.attractions.AUSCHWITZ_BIRKENAU,
      LOCATIONS.HUNGARY,
      LOCATIONS.HUNGARY.attractions.CITADELLA,
      LOCATIONS.HUNGARY.attractions.PARLIAMENT_BUILDING,
      LOCATIONS.HUNGARY.attractions.THERMAL_BATH_SZECHENYI
    ],
    dates: [new Date("2015-09-10"), new Date("2015-09-24")],
    company: [FRIENDS.SIAN]
  }
];
