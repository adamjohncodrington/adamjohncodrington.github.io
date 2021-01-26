const KEY_WEST: LocationProps = { name: "Key West" };

const attractions: IAttractionsUSA = {
  ALCATRAZ_PRISON: { name: "Alcatraz Federal Penitentiary", highlight: true },
  FISHERMANS_WHARF: { name: "Fisherman's Wharf" },
  FARMERS_MARKET: { name: "Farmers Market" },
  HOLLYWOOD_WALK_OF_FAME: { name: "Hollywood Walk of Fame" },
  WHITE_HOUSE: { name: "White House" },
  CAPITOL_BUILDING: { name: "Capitol Building" },
  WASHINGTON_MONUMENT: { name: "Washington Monument" },
  LINCOLN_MEMORIAL: { name: "Lincoln Memorial" },
  TIMES_SQUARE: { name: "Times Square" },
  BROOKLYN_BRIDGE: { name: "Brooklyn Bridge" },
  WORLD_TRADE_CENTER: { name: "World Trade Center" },
  GOLDEN_GATE_BRIDGE: { name: "Golden Gate Bridge", highlight: true },
  CENTRAL_PARK: { name: "Central Park", highlight: true },
  VENICE_BEACH: { name: "Venice Beach" },
  DISNEYLAND_CALIFORNIA_ADVENTURE: {
    name: "Disneyland California Adventure",
    themePark: true
  },
  DISNEY_MGM_STUDIOS: { name: "Disney-MGM Studios", themePark: true },
  DISNEY_ANIMAL_KINGDOM: { name: "Disney's Animal Kingdom", themePark: true },
  DISNEY_EPCOT: { name: "Epcot", themePark: true },
  WET_N_WILD_ORLANDO: { name: "Wet 'n Wild Orlando", themePark: true },
  BLIZZARD_BEACH: { name: "Blizzard Beach Water Park", themePark: true },
  DISNEY_MAGIC_KINGDOM: { name: "Magic Kingdom Park", themePark: true },
  UNIVERSAL_STUDIOS_FLORIDA: {
    name: "Universal Studios Florida",
    themePark: true
  },
  UNIVERSALS_ISLANDS_OF_ADVENTURE: {
    name: "Universal's Islands of Adventure",
    themePark: true
  },
  GRAND_CANYON: { name: "Grand Canyon", highlight: true },
  KNOTTS_BERRY_FARM: { name: "Knott's Berry Farm", themePark: true },
  SEAWORLD_ORLANDO: { name: "SeaWorld Orlando", themePark: true },
  BUSCH_GARDENS_WILLIAMSBURG: {
    name: "Busch Gardens Williamsburg",
    themePark: true
  },
  BUSCH_GARDENS_TAMPA: { name: "Busch Gardens Tampa", themePark: true },
  SIX_FLAGS_AMERICA: { name: "Six Flags America", themePark: true },
  SIX_FLAGS_MAGIC_MOUNTAIN: {
    name: "Six Flags Magic Mountain",
    themePark: true
  },
  SIX_FLAGS_NEW_ENGLAND: { name: "Six Flags New England", themePark: true }
};

const cities: ICitiesUSA = {
  BOSTON_MASSACHUSETTS: { name: "Boston" },
  KEY_WEST,
  LAS_VEGAS: { name: "Las Vegas" },
  VIRGINIA_BEACH: { name: "Virginia Beach" },
  LOS_ANGELES: { name: "Los Angeles", shortName: "LA" },
  NEW_YORK_CITY: { name: "New York City" },
  SAN_FRANCISCO: { name: "San Francisco" },
  SPRINGFIELD_MASSACHUSETTS: { name: "Springfield" },
  WASHINGTON_DC: { name: "Washington DC", capital: true }
};

const islands: IIslandsUSA = {
  KEY_WEST,
  ALCATRAZ: { name: "Alcatraz" },
  MARTHAS_VINEYARD: { name: "Martha's Vineyard" }
};

const regions: IRegionsUSA = {
  CAPE_COD: { name: "Cape Cod" },
  FLORIDA_KEYS: { name: "Florida Keys" },
  ISLAMORADA: { name: "Islamorada" }
};

const states: IStatesUSA = {
  FLORIDA: { name: "Florida" },
  NEW_YORK: { name: "New York" },
  MASSACHUSETTS: { name: "Massachusetts" },
  VIRGINIA: { name: "Virginia" }
};

export const USA: IUSA = {
  name: "United States",
  attractions,
  cities,
  islands,
  regions,
  states
};
