import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2008: Array<ITravelCard> = [
  {
    title: [COUNTRIES.ITALY.cities.ROME, COUNTRIES.ITALY.cities.VATICAN],
    subtitle: [COUNTRIES.ITALY],
    hidden: [
      COUNTRIES.ITALY.attractions.COLOSSEUM,
      COUNTRIES.ITALY.attractions.TREVI_FOUNTAIN
    ],
    dates: [new Date("2008-02-08"), new Date("2008-02-10")],
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  },
  {
    title: [COUNTRIES.FRANCE.cities.PARIS],
    subtitle: [COUNTRIES.FRANCE],
    hidden: [
      COUNTRIES.FRANCE.attractions.AIR_SPACE_MUSEUM,
      COUNTRIES.FRANCE.attractions.ARC_DE_TRIOMPHE,
      COUNTRIES.FRANCE.attractions.EIFFEL_TOWER,
      COUNTRIES.FRANCE.attractions.LOUVRE,
      COUNTRIES.FRANCE.attractions.SCIENCE_MUSEUM,
      COUNTRIES.FRANCE.attractions.SACRE_COEUR,
      COUNTRIES.FRANCE.attractions.PARC_ASTERIX,
      COUNTRIES.FRANCE.attractions.AIR_SPACE_MUSEUM
    ],
    dates: [new Date("2008-04-15"), new Date("2008-04-19")],
    company: [
      FRIENDS.CFS,
      FRIENDS.BLAINE_PEARSON,
      FRIENDS.ELLIE_SPANOVIC,
      FRIENDS.NAV_BHOGAL,
      FRIENDS.ANNIE_BUTCHER,
      FRIENDS.JUNAID_KHAN,
      FRIENDS.GEMMA_GILDERTHORP,
      FRIENDS.SARAH_WHITAKER
    ]
  },
  {
    title: [COUNTRIES.USA.cities.WASHINGTON_DC, COUNTRIES.USA.states.VIRGINIA],
    subtitle: [COUNTRIES.USA],
    hidden: [
      COUNTRIES.USA.cities.VIRGINIA_BEACH,
      COUNTRIES.USA.attractions.WASHINGTON_MONUMENT,
      COUNTRIES.USA.attractions.SIX_FLAGS_AMERICA,
      COUNTRIES.USA.attractions.LINCOLN_MEMORIAL,
      COUNTRIES.USA.attractions.CAPITOL_BUILDING,
      COUNTRIES.USA.attractions.WHITE_HOUSE,
      COUNTRIES.USA.attractions.BUSCH_GARDENS_WILLIAMSBURG
    ],
    dates: [new Date("2008-07-13"), new Date("2008-07-24")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.PORTUGAL.towns.VILAMOURA],
    subtitle: [COUNTRIES.PORTUGAL],
    dates: [new Date("2008-08-07"), new Date("2008-08-14")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
