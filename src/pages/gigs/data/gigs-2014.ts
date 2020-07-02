import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "constant-objects";

export const GIGS_2014: Array<IGigCard> = [
  {
    headline: MUSICIANS.FOXES,
    venue: MUSIC_VENUES.RUBY_LOUNGE,
    company: [FRIENDS.SIMAN_PONE],
    dates: [new Date("2014-03-08")]
  },
  {
    headline: MUSICIANS.CLEAN_BANDIT,
    venue: MUSIC_VENUES.ACADEMY_2_MANCHESTER,
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    dates: [new Date("2014-05-07")]
  },
  {
    headline: MUSICIANS.LORDE,
    venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
    company: [FRIENDS.TONYA_FRANCE],
    dates: [new Date("2014-06-05")]
  },
  {
    festival: FESTIVALS.PARKLIFE,
    lineup: [
      MUSICIANS.FOXES,
      MUSICIANS.ROUTE_94,
      MUSICIANS.REDLIGHT,
      MUSICIANS.BREACH,
      MUSICIANS.RUDIMENTAL,
      MUSICIANS.ELLA_EYRE,
      MUSICIANS.CLEAN_BANDIT,
      MUSICIANS.SAM_SMITH,
      MUSICIANS.LONDON_GRAMMAR,
      MUSICIANS.BASTILLE,
      MUSICIANS.DISCLOSURE
    ],
    venue: MUSIC_VENUES.HEATON_PARK,
    company: [FRIENDS.JESS_SMITH, FRIENDS.POOJA_DHIR, FRIENDS.TONYA_FRANCE],
    dates: [new Date("2014-06-07"), new Date("2014-06-08")]
  },
  {
    headline: MUSICIANS.SBTRKT,
    venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
    company: [FRIENDS.THOM_STEPHANAKIS],
    dates: [new Date("2014-09-30")]
  },
  {
    festival: FESTIVALS.WAREHOUSE_PROJECT,
    lineup: [
      MUSICIANS.JAX_JONES,
      MUSICIANS.DUKE_DUMONT,
      MUSICIANS.CYRIL_HAHN,
      MUSICIANS.FRIEND_WITHIN
    ],
    venue: MUSIC_VENUES.STORE_STREET,
    company: [FRIENDS.TONYA_FRANCE],
    dates: [new Date("2014-10-04")]
  },
  {
    headline: MUSICIANS.CLEAN_BANDIT,
    support: [MUSICIANS.YEARS_AND_YEARS],
    venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    dates: [new Date("2014-10-17")]
  },
  {
    headline: MUSICIANS.LADY_GAGA,
    venue: MUSIC_VENUES.ARENA_MANCHESTER,
    company: [FRIENDS.SIMAN_PONE],
    dates: [new Date("2014-10-21")]
  },
  {
    headline: MUSICIANS.SAM_SMITH,
    support: [MUSICIANS.TORI_KELLY],
    venue: MUSIC_VENUES.ROCK_CITY,
    company: [FRIENDS.MUM],
    dates: [new Date("2014-10-28")]
  },
  {
    headline: MUSICIANS.CHRVCHES,
    venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
    company: [FRIENDS.SIMAN_PONE],
    dates: [new Date("2014-11-06")]
  },
  {
    festival: FESTIVALS.WAREHOUSE_PROJECT,
    lineup: [
      MUSICIANS.KIDNAP,
      MUSICIANS.BONDAX,
      MUSICIANS.GORGON_CITY,
      MUSICIANS.REDLIGHT
    ],
    venue: MUSIC_VENUES.STORE_STREET,
    company: [FRIENDS.AMY_BAGNI, FRIENDS.ELLE_OLDROYD],
    dates: [new Date("2014-11-07")]
  },
  {
    festival: FESTIVALS.WAREHOUSE_PROJECT,
    lineup: [
      MUSICIANS.GEORGE_FITZGERALD,
      MUSICIANS.SKREAM,
      MUSICIANS.PAUL_WOOLFORD,
      MUSICIANS.GREEN_VELVET
    ],
    venue: MUSIC_VENUES.STORE_STREET,
    company: [FRIENDS.ALEX_FAYE],
    dates: [new Date("2014-11-15")]
  },
  {
    headline: MUSICIANS.LA_ROUX,
    venue: MUSIC_VENUES.RITZ_MANCHESTER,
    company: [FRIENDS.EMMA_CODRINGTON],
    dates: [new Date("2014-11-16")]
  },
  {
    headline: MUSICIANS.LADY_GAGA,
    support: [MUSICIANS.LADY_STARLIGHT],
    venue: MUSIC_VENUES.SHEFFIELD_ARENA,
    company: [FRIENDS.GRACE_HULME],
    dates: [new Date("2014-11-20")]
  },
  {
    headline: MUSICIANS.LILY_ALLEN,
    venue: MUSIC_VENUES.APOLLO_MANCHESTER,
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    dates: [new Date("2014-11-25")]
  },
  {
    festival: FESTIVALS.WAREHOUSE_PROJECT,
    lineup: [MUSICIANS.MIDLAND, MUSICIANS.JOY_ORBISON, MUSICIANS.DUSKY],
    venue: MUSIC_VENUES.STORE_STREET,
    company: [
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.BECKY_MILLS,
      FRIENDS.NATALIE_LAMBERT
    ],
    dates: [new Date("2014-12-06")]
  }
];
