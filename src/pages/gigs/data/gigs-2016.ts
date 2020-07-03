import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2016: Array<IGigCard> = [
  {
    headline: MUSICIANS.HALSEY,
    support: [MUSICIANS.BORNS],
    venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
    company: [FRIENDS.DAN_SPARROW],
    dates: [new Date("2016-02-22")]
  },
  {
    headline: MUSICIANS.JOSEF_SALVAT,
    venue: MUSIC_VENUES.GORILLA,
    favourite: true,
    company: [],
    dates: [new Date("2016-03-06")]
  },
  {
    headline: MUSICIANS.TROYE_SIVAN,
    venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
    company: [FRIENDS.DAN_SPARROW],
    dates: [new Date("2016-04-18")]
  },
  {
    headline: MUSICIANS.TOURIST,
    venue: MUSIC_VENUES.DEAF_INSTITUTE,
    company: [FRIENDS.DAN_SPARROW],
    dates: [new Date("2016-05-10")]
  },
  {
    festival: FESTIVALS.GLASTONBURY,
    lineup: [
      MUSICIANS.NAO,
      MUSICIANS.CHRISTINE_AND_THE_QUEENS,
      MUSICIANS.AURORA,
      MUSICIANS.DAUGHTER,
      MUSICIANS.DISCLOSURE,
      MUSICIANS.CARL_COX,
      MUSICIANS.FOUR_TET,
      MUSICIANS.MACEO_PLEX,
      MUSICIANS.ALESSIA_CARA,
      MUSICIANS.TOM_ODELL,
      MUSICIANS.THE_1975,
      MUSICIANS.WILL_YOUNG,
      MUSICIANS.ADELE,
      MUSICIANS.RALEIGH_RITCHIE,
      MUSICIANS.YEARS_AND_YEARS,
      MUSICIANS.ELLIE_GOULDING,
      MUSICIANS.GRIMES
    ],
    venue: MUSIC_VENUES.WORTHY_FARM,
    company: [
      FRIENDS.TONYA_FRANCE,
      FRIENDS.ELLIE_GURKIN,
      FRIENDS.GRACE_HULME,
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.ELLIE_PEARCE,
      FRIENDS.THOM_STEPHANAKIS
    ],
    dates: [new Date("2016-06-24"), new Date("2016-06-26")]
  },
  {
    headline: MUSICIANS.BEYONCE,
    venue: MUSIC_VENUES.WEMBLEY_STADIUM,
    company: [FRIENDS.EMMA_CODRINGTON],
    dates: [new Date("2016-07-03")],
    favourite: true
  },
  {
    festival: FESTIVALS.LOVEBOX,
    lineup: [
      MUSICIANS.MO,
      MUSICIANS.RITON,
      MUSICIANS.DIPLO,
      MUSICIANS.PAUL_WOOLFORD,
      MUSICIANS.HEIDI,
      MUSICIANS.HANNAH_WANTS,
      MUSICIANS.JORIS_VOORN,
      MUSICIANS.MAJOR_LAZER
    ],
    venue: MUSIC_VENUES.VICTORIA_PARK,
    company: [
      FRIENDS.TONYA_FRANCE,
      FRIENDS.TOM_CHINDA_COUTTS,
      FRIENDS.RYAN_MILLS,
      FRIENDS.LAURA_CAPECE_GALEOTA,
      FRIENDS.LUKE_JONES,
      FRIENDS.ALICE_RODER
    ],
    dates: [new Date("2016-07-15")]
  },
  {
    festival: FESTIVALS.DEFECTED_BRISTOL,
    lineup: [MUSICIANS.MK],
    venue: MUSIC_VENUES.MOTION,
    dates: [new Date("2016-07-30")],
    company: [FRIENDS.CHELSEA_CUNNINGHAM, FRIENDS.SARAH_WHITAKER]
  },
  {
    festival: FESTIVALS.BRIGHTON_PRIDE,
    lineup: [
      MUSICIANS.DUA_LIPA,
      MUSICIANS.CARLY_RAE_JEPSEN,
      MUSICIANS.SISTER_SLEDGE
    ],
    venue: MUSIC_VENUES.PRESTON_PARK,
    company: [
      FRIENDS.ELLIE_GURKIN,
      FRIENDS.POOJA_DHIR,
      FRIENDS.GRACE_HULME,
      FRIENDS.SIAN_RODWAY_SMITH,
      FRIENDS.TONYA_FRANCE,
      FRIENDS.ALICE_RODER
    ],
    dates: [new Date("2016-08-06")]
  },
  {
    festival: FESTIVALS.V_FESTIVAL,
    lineup: [
      MUSICIANS.MIKE_POSNER,
      MUSICIANS.MNEK,
      MUSICIANS.ZARA_LARSSON,
      MUSICIANS.PHILIP_GEORGE,
      MUSICIANS.JESS_GLYNNE,
      MUSICIANS.FLIGHT_FACILITIES,
      MUSICIANS.SIA,
      MUSICIANS.JUSTIN_BIEBER
    ],
    venue: MUSIC_VENUES.WESTON_PARK,
    company: [FRIENDS.SARAH_WHITAKER, FRIENDS.CHELSEA_CUNNINGHAM],
    dates: [new Date("2016-08-21")]
  },
  {
    festival: FESTIVALS.WAREHOUSE_PROJECT,
    lineup: [MUSICIANS.DUSKY, MUSICIANS.DANIEL_AVERY],
    venue: MUSIC_VENUES.STORE_STREET,
    company: [FRIENDS.DAN_SPARROW],
    dates: [new Date("2016-09-30")]
  },
  {
    headline: MUSICIANS.ROOSEVELT,
    venue: MUSIC_VENUES.XOYO,
    company: [FRIENDS.TONYA_FRANCE],
    dates: [new Date("2016-11-24")]
  }
];
