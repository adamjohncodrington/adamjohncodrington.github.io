import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2015: Array<IGigCard> = [
  {
    festival: FESTIVALS.TRANSMISSION,
    lineup: [MUSICIANS.TEN_WALLS, MUSICIANS.DUSKY, MUSICIANS.YOUSEF],
    venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
    company: [FRIENDS.CHLOE_WHITE, FRIENDS.AMY_BAGNI, FRIENDS.BETH_SPELLER],
    dates: [new Date("2015-02-07")]
  },
  {
    festival: FESTIVALS.TRIBAL_SESSIONS,
    lineup: [MUSICIANS.JOSH_BUTLER, MUSICIANS.BONTAN, MUSICIANS.GREEN_VELVET],
    venue: MUSIC_VENUES.SANKEYS,
    company: [FRIENDS.TONYA_FRANCE, FRIENDS.ALEX_FAYE],
    dates: [new Date("2015-02-13")]
  },
  {
    festival: FESTIVALS.TRANSMISSION,
    lineup: [MUSICIANS.JAX_JONES, MUSICIANS.DUKE_DUMONT, MUSICIANS.BLONDE],
    venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
    company: [FRIENDS.BETH_SPELLER],
    dates: [new Date("2015-02-27")]
  },
  {
    festival: FESTIVALS.TRANSMISSION,
    lineup: [MUSICIANS.EATS_EVERYTHING, MUSICIANS.CARL_COX],
    venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
    company: [FRIENDS.SONYA_PARDI, FRIENDS.TONYA_FRANCE, FRIENDS.ALEX_FAYE],
    dates: [new Date("2015-04-03")]
  },
  {
    headline: MUSICIANS.ARIANA_GRANDE,
    support: [MUSICIANS.RIXTON],
    venue: MUSIC_VENUES.ARENA_MANCHESTER,
    company: [FRIENDS.DAN_SPARROW],
    dates: [new Date("2015-06-04")]
  },
  {
    festival: FESTIVALS.PARKLIFE,
    lineup: [
      MUSICIANS.BONDAX,
      MUSICIANS.JUSTIN_MARTIN,
      MUSICIANS.JULIO_BASHMORE,
      MUSICIANS.TENSNAKE,
      MUSICIANS.JAMES_BAY,
      MUSICIANS.MK,
      MUSICIANS.DANIEL_AVERY,
      MUSICIANS.BAAUER,
      MUSICIANS.DUSKY,
      MUSICIANS.DAVID_RODIGAN,
      MUSICIANS.GEORGE_FITZGERALD,
      MUSICIANS.KAYTRANADA,
      MUSICIANS.TEN_WALLS
    ],
    venue: MUSIC_VENUES.HEATON_PARK,
    company: [
      FRIENDS.SONYA_PARDI,
      FRIENDS.TONYA_FRANCE,
      FRIENDS.AMY_BAGNI,
      FRIENDS.ELLE_OLDROYD,
      FRIENDS.CHLOE_WHITE
    ],
    dates: [new Date("2015-06-06"), new Date("2015-06-07")]
  },
  {
    festival: FESTIVALS.GLASTONBURY,
    lineup: [
      MUSICIANS.JAMES_BAY,
      MUSICIANS.MARY_J_BLIGE,
      MUSICIANS.SBTRKT,
      MUSICIANS.CARIBOU,
      MUSICIANS.FLORENCE_AND_THE_MACHINE,
      MUSICIANS.MACEO_PLEX,
      MUSICIANS.DUSKY,
      MUSICIANS.SKREAM,
      MUSICIANS.GEORGE_EZRA,
      MUSICIANS.YEARS_AND_YEARS,
      MUSICIANS.JESSIE_WARE,
      MUSICIANS.BEN_HOWARD,
      MUSICIANS.KANYE_WEST,
      MUSICIANS.JAMIE_JONES,
      MUSICIANS.FOUR_TET,
      MUSICIANS.SMYTHS_THE,
      MUSICIANS.SOAK,
      MUSICIANS.SEINABO_SEY,
      MUSICIANS.CHARLI_XCX,
      MUSICIANS.GROOVE_ARMADA,
      MUSICIANS.JAMIE_T,
      MUSICIANS.CHEMICAL_BROTHERS_THE
    ],
    venue: MUSIC_VENUES.WORTHY_FARM,
    company: [
      FRIENDS.TONYA_FRANCE,
      FRIENDS.GRACE_HULME,
      FRIENDS.ELLIE_GURKIN,
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.THOM_STEPHANAKIS,
      FRIENDS.FANNY_LINDQVIST,
      FRIENDS.HANNA_FROGNER
    ],
    dates: [new Date("2015-06-26"), new Date("2015-06-28")]
  },
  {
    headline: MUSICIANS.NOEL_GALLAGHERS_HIGH_FLYING_BIRDS,
    support: [MUSICIANS.JOHNNY_MARR],
    venue: MUSIC_VENUES.CASTLEFIELD_BOWL,
    company: [FRIENDS.DAD],
    dates: [new Date("2015-07-11")]
  },
  {
    headline: MUSICIANS.MIGUEL,
    venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    dates: [new Date("2015-10-18")]
  },
  {
    headline: MUSICIANS.CHRVCHES,
    venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
    company: [FRIENDS.DAN_SPARROW],
    dates: [new Date("2015-11-19")]
  },
  {
    headline: MUSICIANS.LISSIE,
    venue: MUSIC_VENUES.ACADEMY_2_MANCHESTER,
    dates: [new Date("2015-12-05")],
    company: [],
    favourite: true
  },
  {
    festival: FESTIVALS.FABRIC_NYE,
    lineup: [MUSICIANS.GEORGE_FITZGERALD, MUSICIANS.EATS_EVERYTHING],
    venue: MUSIC_VENUES.FABRIC,
    company: [
      FRIENDS.TONYA_FRANCE,
      FRIENDS.SONYA_PARDI,
      FRIENDS.FANNY_LINDQVIST,
      FRIENDS.HANNA_FROGNER,
      FRIENDS.LAURA_CAPECE_GALEOTA
    ],
    dates: [new Date("2015-12-31")]
  }
];
