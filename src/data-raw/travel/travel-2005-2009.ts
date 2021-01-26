import { FRIENDS, COUNTRIES } from "@constants";

export const PORTAVENTURA: Trip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.attractions.PORTAVENTURA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2005-07-26"), new Date("2005-08-02")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

export const HALKIDIKI: Trip = [
  {
    primaryLocations: [COUNTRIES.GREECE.regions.HALKIDIKI],
    country: COUNTRIES.GREECE,
    dates: [new Date("2005-08-18"), new Date("2005-08-23")],
    company: [
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.LOUISE_BLACKBURN,
      FRIENDS.MEGAN_BLACKBURN,
      FRIENDS.MUM,
      FRIENDS.CAMERON_BLACKBURN
    ]
  }
];

export const LAKE_DISTRICT_2005: Trip = [
  {
    primaryLocations: [COUNTRIES.UK.attractions.LAKE_DISTRICT],
    notAbroad: true,
    country: COUNTRIES.UK,
    dates: [new Date("2005-10-22"), new Date("2005-10-24")],
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
  }
];

export const FLORIDA_2006: Trip = [
  {
    primaryLocations: [COUNTRIES.USA.states.FLORIDA],
    country: COUNTRIES.USA,
    secondaryLocations: [
      COUNTRIES.USA.attractions.BUSCH_GARDENS_TAMPA,
      COUNTRIES.USA.attractions.VENICE_BEACH,
      COUNTRIES.USA.attractions.UNIVERSALS_ISLANDS_OF_ADVENTURE,
      COUNTRIES.USA.attractions.SEAWORLD_ORLANDO,
      COUNTRIES.USA.attractions.DISNEY_MGM_STUDIOS,
      COUNTRIES.USA.attractions.WET_N_WILD_ORLANDO
    ],
    dates: [new Date("2006-07-25"), new Date("2006-08-05")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

export const SORRENTO: Trip = [
  {
    primaryLocations: [
      COUNTRIES.ITALY.towns.SORRENTO,
      COUNTRIES.ITALY.cities.POMPEII
    ],
    country: COUNTRIES.ITALY,
    secondaryLocations: [
      COUNTRIES.ITALY.attractions.VESUVIUS,
      COUNTRIES.ITALY.cities.NAPLES
    ],
    dates: [new Date("2006-08-18"), new Date("2006-08-25")],
    company: [
      FRIENDS.MUM,
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.LOUISE_BLACKBURN,
      FRIENDS.MEGAN_BLACKBURN,
      FRIENDS.CAMERON_BLACKBURN
    ]
  }
];

//TODO: break this down into legs????
export const SAN_FRANCISCO_LA: Trip = [
  {
    primaryLocations: [
      COUNTRIES.USA.cities.SAN_FRANCISCO,
      COUNTRIES.USA.cities.LOS_ANGELES
    ],
    country: COUNTRIES.USA,
    favourite: true,
    secondaryLocations: [
      COUNTRIES.USA.attractions.GOLDEN_GATE_BRIDGE,
      COUNTRIES.USA.attractions.FISHERMANS_WHARF,
      COUNTRIES.USA.attractions.ALCATRAZ_PRISON,
      COUNTRIES.USA.attractions.KNOTTS_BERRY_FARM,
      COUNTRIES.USA.attractions.HOLLYWOOD_WALK_OF_FAME,
      COUNTRIES.USA.islands.ALCATRAZ,
      COUNTRIES.USA.attractions.DISNEYLAND_CALIFORNIA_ADVENTURE
    ],
    dates: [new Date("2007-07-24"), new Date("2007-08-05")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

export const CORNWALL_2007: Trip = [
  {
    primaryLocations: [COUNTRIES.UK.regions.CORNWALL],
    notAbroad: true,
    country: COUNTRIES.UK,
    dates: [new Date("2007-08-11"), new Date("2007-08-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const ROME: Trip = [
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

export const PARIS_2008: Trip = [
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
export const WASHINGTON_VIRGINIA: Trip = [
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

export const VILAMOURA: Trip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.towns.VILAMOURA],
    country: COUNTRIES.PORTUGAL,
    dates: [new Date("2008-08-07"), new Date("2008-08-14")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const BATTLEFIELDS: Trip = [
  {
    primaryLocations: [COUNTRIES.BELGIUM.attractions.BATTLEFIELDS],
    country: COUNTRIES.BELGIUM,
    secondaryLocations: [COUNTRIES.BELGIUM.cities.YPRES],
    dates: [new Date("2009-06-12"), new Date("2009-06-15")],
    company: [
      FRIENDS.CFS,
      FRIENDS.ELLIE_SPANOVIC,
      FRIENDS.GRACE_HULME,
      FRIENDS.BLAINE_PEARSON,
      FRIENDS.POOJA_DHIR,
      FRIENDS.ELLIE_GURKIN,
      FRIENDS.GEORGE_LITTLEHALES,
      FRIENDS.KIERAN_SAWFORD
    ]
  }
];

export const VEGAS_LA: Trip = [
  {
    primaryLocations: [
      COUNTRIES.USA.cities.LAS_VEGAS,
      COUNTRIES.USA.attractions.GRAND_CANYON,
      COUNTRIES.USA.cities.LOS_ANGELES
    ],
    secondaryLocations: [
      COUNTRIES.USA.attractions.HOLLYWOOD_WALK_OF_FAME,
      COUNTRIES.USA.attractions.SIX_FLAGS_MAGIC_MOUNTAIN,
      COUNTRIES.USA.attractions.FARMERS_MARKET
    ],
    country: COUNTRIES.USA,
    dates: [new Date("2009-07-21"), new Date("2009-07-31")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

export const KOS: Trip = [
  {
    primaryLocations: [COUNTRIES.GREECE.islands.KOS],
    country: COUNTRIES.GREECE,
    dates: [new Date("2009-08-12"), new Date("2009-08-19")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
