import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2017: Array<IGig> = [
  {
    headline: MUSICIANS.JONAS_BLUE,
    venue: MUSIC_VENUES.MINISTRY_OF_SOUND,
    dates: [new Date("2017-01-28")],
    company: [
      FRIENDS.ALICE_RODER,
      FRIENDS.TONYA_FRANCE,
      FRIENDS.TOM_CHINDA_COUTTS,
      FRIENDS.RYAN_MILLS,
      FRIENDS.LAURA_CAPECE_GALEOTA
    ]
  },
  {
    headline: MUSICIANS.LYVES,
    venue: MUSIC_VENUES.SERVANT_JAZZ_QUARTERS,
    dates: [new Date("2017-02-20")],
    company: []
  },
  {
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
  },
  {
    headline: MUSICIANS.MARTIN_SOLVEIG,
    support: [MUSICIANS.JAX_JONES],
    dates: [new Date("2017-03-10")],
    venue: MUSIC_VENUES.EGG,
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    headline: MUSICIANS.BANKS,
    dates: [new Date("2017-03-13")],
    venue: MUSIC_VENUES.ROUNDHOUSE,
    company: [
      FRIENDS.BECKY_MILLS,
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.MEGAN_BLACKBURN
    ]
  },
  {
    headline: MUSICIANS.TOVE_LO,
    support: [MUSICIANS.BROODS],
    dates: [new Date("2017-03-17")],
    venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
    company: [FRIENDS.DAN_SPARROW]
  },
  {
    headline: MUSICIANS.MUNA,
    dates: [new Date("2017-03-28")],
    venue: MUSIC_VENUES.HOXTON_SQUARE_BAR_AND_KITCHEN,
    company: [FRIENDS.LUKE_STERN],
    favourite: true
  },
  {
    headline: MUSICIANS.JORJA_SMITH,
    dates: [new Date("2017-04-03")],
    venue: MUSIC_VENUES.VILLAGE_UNDERGROUND,
    company: [FRIENDS.LUKE_STERN]
  },
  {
    headline: MUSICIANS.VERITE,
    dates: [new Date("2017-04-06")],
    venue: MUSIC_VENUES.ELECTROWERKZ,
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    headline: MUSICIANS.FRANCES,
    dates: [new Date("2017-04-07")],
    venue: MUSIC_VENUES.INSTITUTE_BIRMINGHAM,
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
  },
  {
    headline: MUSICIANS.JONES,
    dates: [new Date("2017-05-03")],
    venue: MUSIC_VENUES.HOXTON_HALL,
    company: [FRIENDS.LUKE_STERN]
  },
  {
    headline: MUSICIANS.BETSY,
    dates: [new Date("2017-05-15")],
    venue: MUSIC_VENUES.MOTH_CLUB,
    company: [FRIENDS.LUKE_STERN]
  },
  {
    headline: MUSICIANS.ALMA,
    dates: [new Date("2017-05-16")],
    venue: MUSIC_VENUES.OSLO_HACKNEY,
    company: [FRIENDS.LUKE_STERN]
  },
  {
    headline: MUSICIANS.BETTY_WHO,
    dates: [new Date("2017-05-17")],
    venue: MUSIC_VENUES.ZIGFRID_VON_UNDERBELLY,
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  },
  {
    headline: MUSICIANS.PARAMORE,
    dates: [new Date("2017-06-19")],
    venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
    company: [FRIENDS.LUKE_STERN],
    favourite: true
  },
  {
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
  },
  {
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
  },
  {
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
    company: [
      FRIENDS.TONYA_FRANCE,
      FRIENDS.RYAN_MILLS,
      FRIENDS.DAN_SPARROW,
      FRIENDS.MARIA_TAYLOR,
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.CAITY_DALBY
    ]
  },
  {
    headline: MUSICIANS.SIGRID,
    dates: [new Date("2017-09-13")],
    venue: MUSIC_VENUES.SCALA,
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  },
  {
    headline: MUSICIANS.ALLIE_X,
    dates: [new Date("2017-09-18")],
    venue: MUSIC_VENUES.OMEARA,
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    favourite: true
  },
  {
    headline: MUSICIANS.LORDE,
    dates: [new Date("2017-09-27")],
    favourite: true,
    venue: MUSIC_VENUES.ALEXANDRA_PALACE,
    company: [FRIENDS.LUKE_STERN, FRIENDS.CAITLIN_MCCAIG, FRIENDS.CAITY_DALBY]
  },
  {
    headline: MUSICIANS.MURA_MASA,
    dates: [new Date("2017-10-19")],
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    company: [FRIENDS.LUKE_STERN]
  },
  {
    headline: MUSICIANS.FREYA_RIDINGS,
    dates: [new Date("2017-10-26")],
    venue: MUSIC_VENUES.ST_GILES_IN_THE_FIELD,
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    headline: MUSICIANS.PVRIS,
    dates: [new Date("2017-11-30")],
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    company: [FRIENDS.LUKE_STERN]
  }
];
