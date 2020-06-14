const MUSIC_VENUES_LONDON = {
  // A
  ALEXANDRA_PALACE: "Alexandra Palace",
  ALEXANDRA_PALACE_THEATRE: {
    name: "Alexandra Palace Theatre",
    favourite: true
  },
  // B
  BRIXTON_ACADEMY: { name: "Brixton Academy", favourite: true },
  BROCKWELL_PARK: "Brockwell Park",
  // C
  CAMDEN_ASSEMBLY: "Camden Assembly",
  CORSICA_STUDIOS: "Corsica Studios",
  COURTYARD_THEATRE: "Courtyard Theatre",
  // D
  DINGWALLS: "Dingwalls",
  THE_GARAGE: "Garage, The",
  // E
  EARTH: "EartH",
  EGG: "Egg",
  ELECTRIC_BRIXTON: "Electric Brixton",
  ELECTROWERKZ: "Electrowerkz",
  // F
  FABRIC: "Fabric",
  FINSBURY_PARK: "Finsbury Park",
  // H
  HAMMERSMITH_APOLLO: "Hammersmith Apollo",
  HEAVEN: "Heaven",
  HOXTON_HALL: "Hoxton Hall",
  HOXTON_SQUARE_BAR_AND_KITCHEN: "Hoxton Square Bar & Kitchen",
  // I
  ISLINGTON_ASSEMBLY_HALL: { name: "Islington Assembly Hall", favourite: true },
  // K
  KENTISH_TOWN_FORUM: "Kentish Town Forum",
  KOKO: { name: "Koko", favourite: true },
  // L
  LAFAYETTE: "Lafayette",
  LAYLOW: "Laylow",
  LONDON_STADIUM: "London Stadium",
  // M
  MINISTRY_OF_SOUND: "Ministry of Sound",
  MOTH_CLUB: { name: "Moth Club", favourite: true },
  // O
  OLD_BLUE_LAST: { name: "Old Blue Last", favourite: true },
  OMEARA: "Omeara",
  OSLO_HACKNEY: "Oslo Hackney",
  OVAL_SPACE: "Oval Space",
  THE_O2: "O2, The",
  // P
  PRINTWORKS: { name: "Printworks", favourite: true },
  // Q
  QUEEN_OF_HOXTON: "Queen of Hoxton",
  // R
  RIDGEWAY_PARK: "Ridgeway Park",
  ROUNDHOUSE: { name: "Roundhouse", favourite: true },
  ROYAL_ALBERT_HALL: { name: "Royal Albert Hall", favourite: true },
  ROYAL_FESTIVAL_HALL: { name: "Royal Festival Hall", favourite: true },
  // S
  SCALA: "Scala",
  SERVANT_JAZZ_QUARTERS: "Servant Jazz Quarters",
  SHEPHERDS_BUSH_EMPIRE: "Shepherd's Bush Empire",
  ST_GILES_IN_THE_FIELD: "St Giles-in-the-Fields",
  // T
  TOTTENHAM_HOTSPUR_STADIUM: "Tottenham Hotspur Stadium",
  TWICKENHAM_STADIUM: "Twickenham Stadium",
  TROXY: "Troxy",
  // V
  VICTORIA_PARK: "Victoria Park",
  VILLAGE_UNDERGROUND: "Village Underground",
  // W
  WEMBLEY_STADIUM: "Wembley Stadium",
  // X
  XOYO: "XOYO",
  // Z
  ZIGFRID_VON_UNDERBELLY: "Zigfrid von Underbelly"
};

const MUSIC_VENUES_BIRMINGHAM = {
  // A
  ACADEMY_BIRMINGHAM: "Birmingham Academy",
  ACADEMY_2_BIRMINGHAM: "Birmingham Academy 2",
  ALEXANDRA_THEATRE: "Alexandra Theatre",
  // B
  BARFLY_BIRMINGHAM: "Birmingham Barfly",
  // I
  INSTITUTE_BIRMINGHAM: "Birmingham Institute",
  // N
  NEC_ARENA_BIRMINGHAM: "Birmingham NEC Arena",
  NIA_ARENA_BIRMINGHAM: "Birmingham NIA Arena"
};

const MUSIC_VENUES_NOTTINGHAM = {
  // B
  BODEGA: "Bodega",
  ARENA_NOTTINGHAM: "Nottingham Arena",
  // R
  RESCUE_ROOMS: "Rescue Rooms",
  ROCK_CITY: "Rock City",
  // T
  TRENT_UNIVERSITY_NOTTINGHAM: "Nottingham Trent University"
};

const MUSIC_VENUES_MANCHESTER = {
  // A
  ACADEMY_MANCHESTER: "Manchester Academy",
  ACADEMY_2_MANCHESTER: "Manchester Academy 2",
  ALBERT_HALL_MANCHESTER: { name: "Manchester Albert Hall", favourite: true },
  APOLLO_MANCHESTER: "Manchester Apollo",
  ARENA_MANCHESTER: "Manchester Arena",
  // C
  CASTLEFIELD_BOWL: "Castlefield Bowl",
  // D
  DEAF_INSTITUTE: "Deaf Institute",
  // G
  GORILLA: "Gorilla",
  // H
  HEATON_PARK: "Heaton Park",
  // R
  MAYFIELD_DEPOT: "Mayfield Depot",
  // R
  RITZ_MANCHESTER: "Manchester Ritz",
  RUBY_LOUNGE: "Ruby Lounge",
  // S
  SANKEYS: "Sankeys",
  STORE_STREET: "Store Street"
};

const MUSIC_VENUES_ELSEWHERE = {
  // C
  COCKPIT_LEEDS: "The Cockpit Leeds",
  // D
  DE_MONTFORT_HALL: "Leicester De Montfort Hall",
  // E
  ENGINE_SHED: "Lincoln Engine Shed",
  // I
  IFEMA_MADRID: "IFEMA",
  // L
  LULWORTH_ESTATE: "Lulworth Estate",
  // M
  MOTION: "Motion",
  // P
  PRESTON_PARK: "Preston Park",
  // S
  SCHWUZ: { name: "SchwuZ Berlin", insignificant: true },
  SHEFFIELD_ARENA: "Sheffield Arena",
  // T
  TRESOR: { name: "Tresor Berlin", insignificant: true },
  // W
  WESTON_PARK: "Weston Park",
  WOLVERHAMPTON_CIVIC_HALL: "Wolverhampton Civic Hall",
  WORTHY_FARM: { name: "Worthy Farm", favourite: true }
};

export const MUSIC_VENUES = {
  ...MUSIC_VENUES_LONDON,
  ...MUSIC_VENUES_MANCHESTER,
  ...MUSIC_VENUES_NOTTINGHAM,
  ...MUSIC_VENUES_BIRMINGHAM,
  ...MUSIC_VENUES_ELSEWHERE
};
