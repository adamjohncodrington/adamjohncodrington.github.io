import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2019: Array<IGig> = [
  {
    headline: MUSICIANS.THE_1975,
    venue: MUSIC_VENUES.O2_THE,
    dates: [new Date("2019-01-19")],
    company: [FRIENDS.JERRY_EDWARDS]
  },
  {
    headline: MUSICIANS.MAGGIE_ROGERS,
    youtubeId: "193waN4hMd4",
    support: [MUSICIANS.MALLRAT],
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2019-02-19")],
    company: [FRIENDS.DARREN_TAYLOR],
    favourite: true
  },
  {
    headline: MUSICIANS.TROYE_SIVAN,
    support: [MUSICIANS.LELAND],
    venue: MUSIC_VENUES.HAMMERSMITH_APOLLO,
    dates: [new Date("2019-02-28")],
    company: [FRIENDS.JERRY_EDWARDS]
  },
  {
    headline: MUSICIANS.LANY,
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2019-03-12")],
    company: [FRIENDS.JERRY_EDWARDS]
  },
  {
    headline: MUSICIANS.LEON,
    youtubeId: "ZDWHAMDoxWo",
    venue: MUSIC_VENUES.ISLINGTON_ASSEMBLY_HALL,
    dates: [new Date("2019-04-08")],
    company: [FRIENDS.DARREN_TAYLOR],
    favourite: true
  },
  {
    headline: MUSICIANS.BULOW,
    venue: MUSIC_VENUES.COURTYARD_THEATRE,
    dates: [new Date("2019-04-11")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.ROBYN,
    youtubeId: "onPD2Gzd0BQ",
    venue: MUSIC_VENUES.ALEXANDRA_PALACE,
    dates: [new Date("2019-04-12")],
    company: [FRIENDS.DAN_SPARROW, FRIENDS.RYAN_MILLS],
    favourite: true
  },
  {
    headline: MUSICIANS.BEARS_DEN,
    venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
    dates: [new Date("2019-04-23")],
    company: [FRIENDS.JAMIE_HALKET]
  },
  {
    headline: MUSICIANS.MARINA,
    venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
    youtubeId: "rvvJboVvG6U",
    dates: [new Date("2019-05-03")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.SASHA_SLOAN,
    venue: MUSIC_VENUES.DINGWALLS,
    dates: [new Date("2019-05-07")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.G_FLIP,
    venue: MUSIC_VENUES.GARAGE_THE,
    dates: [new Date("2019-05-15")],
    company: [FRIENDS.JERRY_EDWARDS]
  },
  {
    headline: MUSICIANS.FKA_TWIGS,
    venue: MUSIC_VENUES.ALEXANDRA_PALACE_THEATRE,
    dates: [new Date("2019-05-28")],
    company: [FRIENDS.DARREN_TAYLOR],
    favourite: true,
    youtubeId: "onq0QD8FMwg"
  },
  {
    headline: MUSICIANS.FLEETWOOD_MAC,
    support: [MUSICIANS.PRETENDERS],
    venue: MUSIC_VENUES.WEMBLEY_STADIUM,
    dates: [new Date("2019-06-16")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    headline: MUSICIANS.SOPHIE,
    youtubeId: "-ktoahuTfZQ",
    favourite: true,
    venue: MUSIC_VENUES.ROYAL_FESTIVAL_HALL,
    dates: [new Date("2019-08-10")],
    company: [FRIENDS.JERRY_EDWARDS]
  },
  {
    festival: FESTIVALS.MANCHESTER_PRIDE,
    lineup: [
      [
        MUSICIANS.BECKY_MILLS_HILL,
        MUSICIANS.BANANARAMA,
        MUSICIANS.TULISA,
        MUSICIANS.CHERYL,
        MUSICIANS.ARIANA_GRANDE
      ]
    ],
    venue: MUSIC_VENUES.MAYFIELD_DEPOT,
    dates: [new Date("2019-08-25")],
    company: [
      FRIENDS.DAN_SPARROW,
      FRIENDS.MARIA_TAYLOR,
      FRIENDS.ASH_MORETON,
      FRIENDS.SAM_BERRIE,
      FRIENDS.LINDSAY_ASPINALL
    ]
  },
  {
    headline: MUSICIANS.KIM_PETRAS,
    youtubeId: "F6OBvyUN-xE",
    venue: MUSIC_VENUES.HEAVEN,
    dates: [new Date("2019-08-27")],
    company: [FRIENDS.DARREN_TAYLOR, FRIENDS.JERRY_EDWARDS]
  },
  {
    festival: FESTIVALS.CHINGFEST,
    lineup: [[MUSICIANS.INCOGNITO, MUSICIANS.NAO]],
    venue: MUSIC_VENUES.RIDGEWAY_PARK,
    dates: [new Date("2019-08-31")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.MUNA,
    venue: MUSIC_VENUES.VILLAGE_UNDERGROUND,
    dates: [new Date("2019-09-10")],
    youtubeId: "b1GQKpH9nRY",
    company: [FRIENDS.EMMA_CODRINGTON]
  },
  {
    headline: MUSICIANS.JULIA_MICHAELS,
    youtubeId: "QjZxfJ5rMoI",
    venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
    dates: [new Date("2019-09-17")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.ELDERBROOK,
    venue: MUSIC_VENUES.EARTH,
    dates: [new Date("2019-10-12")],
    company: [
      FRIENDS.TONYA_FRANCE,
      FRIENDS.SONYA_PARDI,
      FRIENDS.LAURA_CAPECE_GALEOTA
    ]
  },
  {
    headline: MUSICIANS.CHARLI_XCX,
    youtubeId: "aWMtkdL7_5Q",
    support: [MUSICIANS.RINA_SAWAYAMA],
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2019-10-31")],
    company: [FRIENDS.DARREN_TAYLOR],
    favourite: true
  },
  {
    headline: MUSICIANS.BANKS,
    youtubeId: "2sp-iXxyxLg",
    support: [MUSICIANS.GLOWIE],
    venue: MUSIC_VENUES.ROUNDHOUSE,
    dates: [new Date("2019-11-04")],
    company: [FRIENDS.DARREN_TAYLOR],
    favourite: true
  },
  {
    headline: MUSICIANS.LAUV,
    youtubeId: "CWEoCdcltQ8",
    support: [MUSICIANS.CHELSEA_CUTLER],
    venue: MUSIC_VENUES.KENTISH_TOWN_FORUM,
    dates: [new Date("2019-11-05")],
    company: [FRIENDS.JERRY_EDWARDS, FRIENDS.POPPY_SMITH]
  },
  {
    festival: FESTIVALS.HOMOBLOC,
    lineup: [[MUSICIANS.ROMY, MUSICIANS.ROBYN, MUSICIANS.HORSE_MEAT_DISCO]],
    venue: MUSIC_VENUES.MAYFIELD_DEPOT,
    dates: [new Date("2019-11-09")],
    company: [FRIENDS.DAN_SPARROW, FRIENDS.MARIA_TAYLOR]
  },
  {
    headline: MUSICIANS.SABRINA_CLAUDIO,
    support: [MUSICIANS.OH_ANNIE_OH],
    venue: MUSIC_VENUES.ELECTRIC_BRIXTON,
    dates: [new Date("2019-11-19")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.ROBINSON,
    youtubeId: "msmiWt45P0A",
    support: [MUSICIANS.NAVVY],
    venue: MUSIC_VENUES.QUEEN_OF_HOXTON,
    dates: [new Date("2019-11-20")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.FKA_TWIGS,
    youtubeId: "ayQHCkqK04c",
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2019-11-25")],
    company: [
      FRIENDS.DARREN_TAYLOR,
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.MEGAN_BLACKBURN
    ]
  },
  {
    headline: MUSICIANS.NAAZ,
    youtubeId: "YYqQIxqo2y4",
    support: [MUSICIANS.DYLAN],
    venue: MUSIC_VENUES.CAMDEN_ASSEMBLY,
    dates: [new Date("2019-11-27")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.MUNA,
    support: [MUSICIANS.L_DEVINE],
    venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
    dates: [new Date("2019-12-03")],
    company: [FRIENDS.LEWIS_STEADMAN, FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.MELANIE_MARTINEZ,
    support: [MUSICIANS.NAAZ],
    venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
    dates: [new Date("2019-12-09")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    festival: FESTIVALS.AREA_10_NYE,
    lineup: [[MUSICIANS.MK]],
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2019-12-31")],
    company: [
      FRIENDS.TOM_CHINDA_COUTTS,
      FRIENDS.TONYA_FRANCE,
      FRIENDS.SONYA_PARDI
    ]
  }
];
