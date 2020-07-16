import { FRIENDS, COUNTRIES } from "@constants";

const ROME: ITrip = [
  {
    primaryLocations: [COUNTRIES.ITALY.cities.ROME],
    country: COUNTRIES.ITALY,
    secondaryLocations: [
      COUNTRIES.ITALY.attractions.COLOSSEUM,
      COUNTRIES.ITALY.attractions.TREVI_FOUNTAIN,
      COUNTRIES.ITALY.cities.VATICAN
    ],
    dates: [new Date("2008-02-08"), new Date("2008-02-10")],
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.DAD]
  }
];

const PARIS_2008: ITrip = [
  {
    primaryLocations: [COUNTRIES.FRANCE.cities.PARIS],
    country: COUNTRIES.FRANCE,
    secondaryLocations: [
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
  }
];

//TODO: this could be split into 2 legs
const WASHINGTON_VIRGINIA: ITrip = [
  {
    primaryLocations: [
      COUNTRIES.USA.cities.WASHINGTON_DC,
      COUNTRIES.USA.states.VIRGINIA
    ],
    country: COUNTRIES.USA,
    secondaryLocations: [
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
  }
];

const VILAMOURA: ITrip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.towns.VILAMOURA],
    country: COUNTRIES.PORTUGAL,
    dates: [new Date("2008-08-07"), new Date("2008-08-14")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

//TODO: verify that this is re-ordered by date
export const TRAVEL_2008: Array<ITrip> = [
  VILAMOURA,
  WASHINGTON_VIRGINIA,
  PARIS_2008,
  ROME
];
