interface IMusicVenue extends INameFavourite {
  insignificant?: boolean;
}

interface IMusicVenuesLondon {
  ALEXANDRA_PALACE: IMusicVenue;
  ALEXANDRA_PALACE_THEATRE: IMusicVenue;
  BRIXTON_ACADEMY: IMusicVenue;
  BROCKWELL_PARK: IMusicVenue;
  CAMDEN_ASSEMBLY: IMusicVenue;
  CORSICA_STUDIOS: IMusicVenue;
  COURTYARD_THEATRE: IMusicVenue;
  DINGWALLS: IMusicVenue;
  GARAGE_THE: IMusicVenue;
  EARTH: IMusicVenue;
  EGG: IMusicVenue;
  ELECTRIC_BRIXTON: IMusicVenue;
  ELECTROWERKZ: IMusicVenue;
  FABRIC: IMusicVenue;
  FINSBURY_PARK: IMusicVenue;
  HAMMERSMITH_APOLLO: IMusicVenue;
  HEAVEN: IMusicVenue;
  HOXTON_HALL: IMusicVenue;
  HOXTON_SQUARE_BAR_AND_KITCHEN: IMusicVenue;
  ISLINGTON_ASSEMBLY_HALL: IMusicVenue;
  KENTISH_TOWN_FORUM: IMusicVenue;
  KOKO: IMusicVenue;
  LAFAYETTE: IMusicVenue;
  LAYLOW: IMusicVenue;
  LONDON_PALLADIUM: IMusicVenue;
  LONDON_STADIUM: IMusicVenue;
  MINISTRY_OF_SOUND: IMusicVenue;
  MOTH_CLUB: IMusicVenue;
  OLD_BLUE_LAST: IMusicVenue;
  OMEARA: IMusicVenue;
  OSLO_HACKNEY: IMusicVenue;
  OVAL_SPACE: IMusicVenue;
  O2_THE: IMusicVenue;
  PRINTWORKS: IMusicVenue;
  QUEEN_OF_HOXTON: IMusicVenue;
  RIDGEWAY_PARK: IMusicVenue;
  ROUNDHOUSE: IMusicVenue;
  ROYAL_ALBERT_HALL: IMusicVenue;
  ROYAL_FESTIVAL_HALL: IMusicVenue;
  SCALA: IMusicVenue;
  SERVANT_JAZZ_QUARTERS: IMusicVenue;
  SHEPHERDS_BUSH_EMPIRE: IMusicVenue;
  ST_GILES_IN_THE_FIELD: IMusicVenue;
  TOTTENHAM_HOTSPUR_STADIUM: IMusicVenue;
  TWICKENHAM_STADIUM: IMusicVenue;
  TROXY: IMusicVenue;
  VICTORIA_PARK: IMusicVenue;
  VILLAGE_UNDERGROUND: IMusicVenue;
  WEMBLEY_STADIUM: IMusicVenue;
  XOYO: IMusicVenue;
  ZIGFRID_VON_UNDERBELLY: IMusicVenue;
}

interface IMusicVenuesBirmingham {
  ACADEMY_BIRMINGHAM: IMusicVenue;
  ACADEMY_2_BIRMINGHAM: IMusicVenue;
  ALEXANDRA_THEATRE: IMusicVenue;
  BARFLY_BIRMINGHAM: IMusicVenue;
  INSTITUTE_BIRMINGHAM: IMusicVenue;
  NEC_ARENA_BIRMINGHAM: IMusicVenue;
  NIA_ARENA_BIRMINGHAM: IMusicVenue;
}

interface IMusicVenuesNottingham {
  BODEGA: IMusicVenue;
  ARENA_NOTTINGHAM: IMusicVenue;
  RESCUE_ROOMS: IMusicVenue;
  ROCK_CITY: IMusicVenue;
  TRENT_UNIVERSITY_NOTTINGHAM: IMusicVenue;
}

interface IMusicVenuesManchester {
  ACADEMY_MANCHESTER: IMusicVenue;
  ACADEMY_2_MANCHESTER: IMusicVenue;
  ALBERT_HALL_MANCHESTER: IMusicVenue;
  APOLLO_MANCHESTER: IMusicVenue;
  ARENA_MANCHESTER: IMusicVenue;
  CASTLEFIELD_BOWL: IMusicVenue;
  DEAF_INSTITUTE: IMusicVenue;
  GORILLA: IMusicVenue;
  HEATON_PARK: IMusicVenue;
  MAYFIELD_DEPOT: IMusicVenue;
  RITZ_MANCHESTER: IMusicVenue;
  RUBY_LOUNGE: IMusicVenue;
  SANKEYS: IMusicVenue;
  STORE_STREET: IMusicVenue;
}

interface IMusicVenuesElsewhere {
  COCKPIT_LEEDS: IMusicVenue;
  DE_MONTFORT_HALL: IMusicVenue;
  ENGINE_SHED: IMusicVenue;
  IFEMA_MADRID: IMusicVenue;
  LULWORTH_ESTATE: IMusicVenue;
  MOTION: IMusicVenue;
  PRESTON_PARK: IMusicVenue;
  SCHWUZ: IMusicVenue;
  SHEFFIELD_ARENA: IMusicVenue;
  TRESOR: IMusicVenue;
  WESTON_PARK: IMusicVenue;
  WOLVERHAMPTON_CIVIC_HALL: IMusicVenue;
  WORTHY_FARM: IMusicVenue;
}

interface IMusicVenues
  extends IMusicVenuesBirmingham,
    IMusicVenuesElsewhere,
    IMusicVenuesLondon,
    IMusicVenuesManchester,
    IMusicVenuesNottingham {}
