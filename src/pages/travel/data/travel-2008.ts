import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2008: Array<ITravelCard> = [
  {
    title: [LOCATIONS.ITALY.cities.ROME, LOCATIONS.ITALY.cities.VATICAN],
    subtitle: [LOCATIONS.ITALY],
    hidden: [
      LOCATIONS.ITALY.attractions.COLOSSEUM,
      LOCATIONS.ITALY.attractions.TREVI_FOUNTAIN
    ],
    dates: [new Date("2008-02-08"), new Date("2008-02-10")],
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  },
  {
    title: [LOCATIONS.FRANCE.cities.PARIS],
    subtitle: [LOCATIONS.FRANCE],
    hidden: [
      LOCATIONS.FRANCE.attractions.AIR_SPACE_MUSEUM,
      LOCATIONS.FRANCE.attractions.ARC_DE_TRIOMPHE,
      LOCATIONS.FRANCE.attractions.EIFFEL_TOWER,
      LOCATIONS.FRANCE.attractions.LOUVRE,
      LOCATIONS.FRANCE.attractions.SCIENCE_MUSEUM,
      LOCATIONS.FRANCE.attractions.SACRE_COEUR,
      LOCATIONS.FRANCE.attractions.PARC_ASTERIX,
      LOCATIONS.FRANCE.attractions.AIR_SPACE_MUSEUM
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
    title: [
      LOCATIONS.USA.cities.WASH_MORETONINGTON_DC,
      LOCATIONS.USA.states.VIRGINIA
    ],
    subtitle: [LOCATIONS.USA],
    hidden: [
      LOCATIONS.USA.cities.VIRGINIA_BEACH,
      LOCATIONS.USA.attractions.WASH_MORETONINGTON_MONUMENT,
      LOCATIONS.USA.attractions.SIX_FLAGS_AMERICA,
      LOCATIONS.USA.attractions.LINCOLN_MEMORIAL,
      LOCATIONS.USA.attractions.CAPITOL_BUILDING,
      LOCATIONS.USA.attractions.WHITE_HOUSE,
      LOCATIONS.USA.attractions.BUSCH_GARDENS_WILLIAMSBURG
    ],
    dates: [new Date("2008-07-13"), new Date("2008-07-24")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [LOCATIONS.PORTUGAL.towns.VILAMOURA],
    subtitle: [LOCATIONS.PORTUGAL],
    dates: [new Date("2008-08-07"), new Date("2008-08-14")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
