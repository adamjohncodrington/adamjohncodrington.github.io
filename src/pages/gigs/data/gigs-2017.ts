import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "@constants";
import { VIDEOS } from "resources";

export const JONAS_BLUE: IGig = {
  headline: MUSICIANS.JONAS_BLUE,
  venue: MUSIC_VENUES.MINISTRY_OF_SOUND,
  dates: [new Date("2017-01-28")],
  company: [
    FRIENDS.ALICE_RODER,
    FRIENDS.TOM_CHINDA_COUTTS,
    FRIENDS.RYAN_MILLS,
    FRIENDS.LAURA_CAPECE_GALEOTA
  ]
};

export const LYVES: IGig = {
  headline: MUSICIANS.LYVES,
  venue: MUSIC_VENUES.SERVANT_JAZZ_QUARTERS,
  dates: [new Date("2017-02-20")],
  video: VIDEOS.GIGS.LYVES,
  company: []
};

export const DUSKY: IGig = {
  headline: MUSICIANS.DUSKY,
  venue: MUSIC_VENUES.ELECTRIC_BRIXTON,
  dates: [new Date("2017-02-24")],
  favourite: true,
  company: [
    FRIENDS.TONYA_FRANCE,
    FRIENDS.TOM_CHINDA_COUTTS,
    FRIENDS.CAITLIN_MCCAIG,
    FRIENDS.RYAN_MILLS
  ]
};

export const MARTIN_SOLVEIG: IGig = {
  headline: MUSICIANS.MARTIN_SOLVEIG,
  support: [MUSICIANS.JAX_JONES],
  dates: [new Date("2017-03-10")],
  venue: MUSIC_VENUES.EGG,
  company: [FRIENDS.TONYA_FRANCE]
};

export const BANKS_2017: IGig = {
  headline: MUSICIANS.BANKS,
  dates: [new Date("2017-03-13")],
  venue: MUSIC_VENUES.ROUNDHOUSE,
  video: VIDEOS.GIGS.BANKS_2017,
  company: [
    FRIENDS.BECKY_MILLS,
    FRIENDS.EMMA_CODRINGTON,
    FRIENDS.MEGAN_BLACKBURN
  ]
};

export const TOVE_LO: IGig = {
  headline: MUSICIANS.TOVE_LO,
  support: [MUSICIANS.BROODS],
  dates: [new Date("2017-03-17")],
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  company: [FRIENDS.DAN_SPARROW],
  video: VIDEOS.GIGS.TOVE_LO
};

export const MUNA_2017: IGig = {
  headline: MUSICIANS.MUNA,
  dates: [new Date("2017-03-28")],
  video: VIDEOS.GIGS.MUNA_2017,
  venue: MUSIC_VENUES.HOXTON_SQUARE_BAR_AND_KITCHEN,
  company: [FRIENDS.LUKE_STERN],
  favourite: true
};

export const JORJA_SMITH: IGig = {
  headline: MUSICIANS.JORJA_SMITH,
  video: VIDEOS.GIGS.JORJA_SMITH,
  dates: [new Date("2017-04-03")],
  venue: MUSIC_VENUES.VILLAGE_UNDERGROUND,
  company: [FRIENDS.LUKE_STERN]
};

export const VERITE: IGig = {
  headline: MUSICIANS.VERITE,
  video: VIDEOS.GIGS.VERITE,
  dates: [new Date("2017-04-06")],
  venue: MUSIC_VENUES.ELECTROWERKZ,
  company: [FRIENDS.TONYA_FRANCE]
};

export const FRANCES: IGig = {
  headline: MUSICIANS.FRANCES,
  video: VIDEOS.GIGS.FRANCES,
  dates: [new Date("2017-04-07")],
  venue: MUSIC_VENUES.INSTITUTE_BIRMINGHAM,
  company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
};

export const JONES: IGig = {
  headline: MUSICIANS.JONES,
  dates: [new Date("2017-05-03")],
  //youtubeId: "7WRudCbbXl8",
  venue: MUSIC_VENUES.HOXTON_HALL,
  company: [FRIENDS.LUKE_STERN]
};

export const BETSY: IGig = {
  headline: MUSICIANS.BETSY,
  //youtubeId: "3Tri20SZIyw",
  dates: [new Date("2017-05-15")],
  venue: MUSIC_VENUES.MOTH_CLUB,
  company: [FRIENDS.LUKE_STERN]
};

export const ALMA: IGig = {
  headline: MUSICIANS.ALMA,
  dates: [new Date("2017-05-16")],
  venue: MUSIC_VENUES.OSLO_HACKNEY,
  //youtubeId: "swBApwCoEGY",
  company: [FRIENDS.LUKE_STERN]
};

export const BETTY_WHO: IGig = {
  headline: MUSICIANS.BETTY_WHO,
  dates: [new Date("2017-05-17")],
  //youtubeId: "gzccsq6FR7A",
  venue: MUSIC_VENUES.ZIGFRID_VON_UNDERBELLY,
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const PARAMORE_2017: IGig = {
  headline: MUSICIANS.PARAMORE,
  //youtubeId: "4yCEwRyXc6s",
  dates: [new Date("2017-06-19")],
  venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
  company: [FRIENDS.LUKE_STERN],
  favourite: true
};

export const SIGRID: IGig = {
  headline: MUSICIANS.SIGRID,
  dates: [new Date("2017-09-13")],
  venue: MUSIC_VENUES.SCALA,
  //youtubeId: "o0WcLEYO3EA",
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const ALLIE_X: IGig = {
  headline: MUSICIANS.ALLIE_X,
  dates: [new Date("2017-09-18")],
  venue: MUSIC_VENUES.OMEARA,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  //youtubeId: "jY1TrVD966s",
  favourite: true
};

export const LORDE_2017: IGig = {
  headline: MUSICIANS.LORDE,
  dates: [new Date("2017-09-27")],
  //youtubeId: "UTWTPj2AwIE",
  favourite: true,
  venue: MUSIC_VENUES.ALEXANDRA_PALACE,
  company: [FRIENDS.LUKE_STERN, FRIENDS.CAITLIN_MCCAIG, FRIENDS.CAITY_DALBY]
};

export const MURA_MASA: IGig = {
  headline: MUSICIANS.MURA_MASA,
  dates: [new Date("2017-10-19")],
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  //youtubeId: "lP5PXTTMRuY",
  company: [FRIENDS.LUKE_STERN]
};

export const FREYA_RIDINGS: IGig = {
  headline: MUSICIANS.FREYA_RIDINGS,
  //youtubeId: "PqEYdOy4ozI",
  dates: [new Date("2017-10-26")],
  venue: MUSIC_VENUES.ST_GILES_IN_THE_FIELD,
  company: [FRIENDS.TONYA_FRANCE]
};

export const PVRIS: IGig = {
  headline: MUSICIANS.PVRIS,
  //youtubeId: "h3YCpEnU-NI",
  dates: [new Date("2017-11-30")],
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  company: [FRIENDS.LUKE_STERN]
};

export const LOVEBOX_2017: IGig = {
  festival: FESTIVALS.LOVEBOX,
  lineup: [
    [
      MUSICIANS.JOE_GODDARD,
      MUSICIANS.RUFUS_DU_SOL,
      MUSICIANS.BICEP,
      MUSICIANS.JAMIE_XX,
      MUSICIANS.EATS_EVERYTHING,
      MUSICIANS.FRANK_OCEAN
    ]
  ],
  dates: [new Date("2017-07-14")],
  venue: MUSIC_VENUES.VICTORIA_PARK,
  company: [
    FRIENDS.TONYA_FRANCE,
    FRIENDS.TOM_CHINDA_COUTTS,
    FRIENDS.RYAN_MILLS,
    FRIENDS.CAITLIN_MCCAIG,
    FRIENDS.ALICE_RODER
  ]
};

export const BRIGHTON_PRIDE_2017: IGig = {
  festival: FESTIVALS.BRIGHTON_PRIDE,
  lineup: [[MUSICIANS.BECKY_MILLS_HILL, MUSICIANS.YEARS_AND_YEARS]],
  dates: [new Date("2017-08-05")],
  venue: MUSIC_VENUES.PRESTON_PARK,
  company: [
    FRIENDS.LUKE_STERN,
    FRIENDS.TONYA_FRANCE,
    FRIENDS.SONYA_PARDI,
    FRIENDS.TOM_CHINDA_COUTTS,
    FRIENDS.RYAN_MILLS,
    FRIENDS.LAURA_CAPECE_GALEOTA
  ]
};

export const BESTIVAL: IGig = {
  festival: FESTIVALS.BESTIVAL,
  lineup: [
    [
      MUSICIANS.ALMA,
      MUSICIANS.LITTLE_DRAGON,
      MUSICIANS.KOLSCH,
      MUSICIANS.XX_THE,
      MUSICIANS.MACEO_PLEX,
      MUSICIANS.JOE_GODDARD
    ],
    [
      MUSICIANS.FOURS,
      MUSICIANS.ANNA_OF_THE_NORTH,
      MUSICIANS.LUCY_ROSE,
      MUSICIANS.DIZZEE_RASCAL,
      MUSICIANS.DUSKY,
      MUSICIANS.CHARLOTTE_CHURCH
    ],
    [MUSICIANS.SOUL_WAX, MUSICIANS.PET_SHOP_BOYS]
  ],
  dates: [
    new Date("2017-09-08"),
    new Date("2017-09-09"),
    new Date("2017-09-10")
  ],
  venue: MUSIC_VENUES.LULWORTH_ESTATE,
  //youtubeId: "uFjIdpIjY8Y",
  company: [
    FRIENDS.TONYA_FRANCE,
    FRIENDS.RYAN_MILLS,
    FRIENDS.DAN_SPARROW,
    FRIENDS.MARIA_TAYLOR,
    FRIENDS.CAITLIN_MCCAIG,
    FRIENDS.CAITY_DALBY
  ]
};
