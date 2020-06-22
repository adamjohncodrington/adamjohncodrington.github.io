const MUSIC_VENUES_LONDON: IMusicVenues = {
  // A
  ALEXANDRA_PALACE: { name: "Alexandra Palace" },
  ALEXANDRA_PALACE_THEATRE: {
    name: "Alexandra Palace Theatre",
    favourite: true
  },
  // B
  BRIXTON_ACADEMY: { name: "Brixton Academy", favourite: true },
  BROCKWELL_PARK: { name: "Brockwell Park" },
  // C
  CAMDEN_ASSEMBLY: { name: "Camden Assembly" },
  CORSICA_STUDIOS: { name: "Corsica Studios" },
  COURTYARD_THEATRE: { name: "Courtyard Theatre" },
  // D
  DINGWALLS: { name: "Dingwalls" },
  THE_GARAGE: { name: "Garage, The" },
  // E
  EARTH: { name: "EartH" },
  EGG: { name: "Egg" },
  ELECTRIC_BRIXTON: { name: "Electric Brixton" },
  ELECTROWERKZ: { name: "Electrowerkz" },
  // F
  FABRIC: { name: "Fabric" },
  FINSBURY_PARK: { name: "Finsbury Park" },
  // H
  HAMMERSMITH_APOLLO: { name: "Hammersmith Apollo" },
  HEAVEN: { name: "Heaven" },
  HOXTON_HALL: { name: "Hoxton Hall" },
  HOXTON_SQUARE_BAR_AND_KITCHEN: { name: "Hoxton Square Bar & Kitchen" },
  // I
  ISLINGTON_ASSEMBLY_HALL: { name: "Islington Assembly Hall", favourite: true },
  // K
  KENTISH_TOWN_FORUM: { name: "Kentish Town Forum" },
  KOKO: { name: "Koko", favourite: true },
  // L
  LAFAYETTE: { name: "Lafayette" },
  LAYLOW: { name: "Laylow" },
  LONDON_STADIUM: { name: "London Stadium" },
  // M
  MINISTRY_OF_SOUND: { name: "Ministry of Sound" },
  MOTH_CLUB: { name: "Moth Club", favourite: true },
  // O
  OLD_BLUE_LAST: { name: "Old Blue Last", favourite: true },
  OMEARA: { name: "Omeara" },
  OSLO_HACKNEY: { name: "Oslo Hackney" },
  OVAL_SPACE: { name: "Oval Space" },
  THE_O2: { name: "O2, The" },
  // P
  PRINTWORKS: { name: "Printworks", favourite: true },
  // Q
  QUEEN_OF_HOXTON: { name: "Queen of Hoxton" },
  // R
  RIDGEWAY_PARK: { name: "Ridgeway Park" },
  ROUNDHOUSE: { name: "Roundhouse", favourite: true },
  ROYAL_ALBERT_HALL: { name: "Royal Albert Hall", favourite: true },
  ROYAL_FESTIVAL_HALL: { name: "Royal Festival Hall", favourite: true },
  // S
  SCALA: { name: "Scala" },
  SERVANT_JAZZ_QUARTERS: { name: "Servant Jazz Quarters" },
  SHEPHERDS_BUSH_EMPIRE: { name: "Shepherd's Bush Empire" },
  ST_GILES_IN_THE_FIELD: { name: "St Giles-in-the-Fields" },
  // T
  TOTTENHAM_HOTSPUR_STADIUM: { name: "Tottenham Hotspur Stadium" },
  TWICKENHAM_STADIUM: { name: "Twickenham Stadium" },
  TROXY: { name: "Troxy" },
  // V
  VICTORIA_PARK: { name: "Victoria Park" },
  VILLAGE_UNDERGROUND: { name: "Village Underground" },
  // W
  WEMBLEY_STADIUM: { name: "Wembley Stadium" },
  // X
  XOYO: { name: "XOYO" },
  // Z
  ZIGFRID_VON_UNDERBELLY: { name: "Zigfrid von Underbelly" }
};

const MUSIC_VENUES_BIRMINGHAM: IMusicVenues = {
  // A
  ACADEMY_BIRMINGHAM: { name: "Birmingham Academy" },
  ACADEMY_2_BIRMINGHAM: { name: "Birmingham Academy 2" },
  ALEXANDRA_THEATRE: { name: "Alexandra Theatre" },
  // B
  BARFLY_BIRMINGHAM: { name: "Birmingham Barfly" },
  // I
  INSTITUTE_BIRMINGHAM: { name: "Birmingham Institute" },
  // N
  NEC_ARENA_BIRMINGHAM: { name: "Birmingham NEC Arena" },
  NIA_ARENA_BIRMINGHAM: { name: "Birmingham NIA Arena" }
};

const MUSIC_VENUES_NOTTINGHAM: IMusicVenues = {
  // B
  BODEGA: { name: "Bodega" },
  ARENA_NOTTINGHAM: { name: "Nottingham Arena" },
  // R
  RESCUE_ROOMS: { name: "Rescue Rooms" },
  ROCK_CITY: { name: "Rock City" },
  // T
  TRENT_UNIVERSITY_NOTTINGHAM: { name: "Nottingham Trent University" }
};

const MUSIC_VENUES_MANCHESTER: IMusicVenues = {
  // A
  ACADEMY_MANCHESTER: { name: "Manchester Academy" },
  ACADEMY_2_MANCHESTER: { name: "Manchester Academy 2" },
  ALBERT_HALL_MANCHESTER: { name: "Manchester Albert Hall", favourite: true },
  APOLLO_MANCHESTER: { name: "Manchester Apollo" },
  ARENA_MANCHESTER: { name: "Manchester Arena" },
  // C
  CASTLEFIELD_BOWL: { name: "Castlefield Bowl" },
  // D
  DEAF_INSTITUTE: { name: "Deaf Institute" },
  // G
  GORILLA: { name: "Gorilla" },
  // H
  HEATON_PARK: { name: "Heaton Park" },
  // R
  MAYFIELD_DEPOT: { name: "Mayfield Depot" },
  // R
  RITZ_MANCHESTER: { name: "Manchester Ritz" },
  RUBY_LOUNGE: { name: "Ruby Lounge" },
  // S
  SANKEYS: { name: "Sankeys" },
  STORE_STREET: { name: "Store Street" }
};

const MUSIC_VENUES_ELSEWHERE: IMusicVenues = {
  // C
  COCKPIT_LEEDS: { name: "The Cockpit Leeds" },
  // D
  DE_MONTFORT_HALL: { name: "Leicester De Montfort Hall" },
  // E
  ENGINE_SHED: { name: "Lincoln Engine Shed" },
  // I
  IFEMA_MADRID: { name: "IFEMA" },
  // L
  LULWORTH_ESTATE: { name: "Lulworth Estate" },
  // M
  MOTION: { name: "Motion" },
  // P
  PRESTON_PARK: { name: "Preston Park" },
  // S
  SCHWUZ: { name: "SchwuZ Berlin", insignificant: true },
  SHEFFIELD_ARENA: { name: "Sheffield Arena" },
  // T
  TRESOR: { name: "Tresor Berlin", insignificant: true },
  // W
  WESTON_PARK: { name: "Weston Park" },
  WOLVERHAMPTON_CIVIC_HALL: { name: "Wolverhampton Civic Hall" },
  WORTHY_FARM: { name: "Worthy Farm", favourite: true }
};

export const MUSIC_VENUES: IMusicVenues = {
  ...MUSIC_VENUES_LONDON,
  ...MUSIC_VENUES_MANCHESTER,
  ...MUSIC_VENUES_NOTTINGHAM,
  ...MUSIC_VENUES_BIRMINGHAM,
  ...MUSIC_VENUES_ELSEWHERE
};
