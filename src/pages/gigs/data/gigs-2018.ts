import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const KYGO: IGig = {
  headline: MUSICIANS.KYGO,
  support: [MUSICIANS.GRYFFIN, MUSICIANS.SEEB],
  venue: MUSIC_VENUES.O2_THE,
  dates: [new Date("2018-02-25")],
  //youtubeId: "59OAEOL05dw",
  company: [FRIENDS.TONYA_FRANCE]
};

export const CODE_THE: IGig = {
  headline: MUSICIANS.CODE_THE,
  venue: MUSIC_VENUES.CORSICA_STUDIOS,
  dates: [new Date("2018-03-07")],
  //youtubeId: "xSS9YiCzqWw",
  company: [FRIENDS.JERRY_EDWARDS, FRIENDS.JAMIE_HALKET, FRIENDS.DOM_COYNE]
};

export const GEORGE_FTIZGERALD: IGig = {
  headline: MUSICIANS.GEORGE_FITZGERALD,
  venue: MUSIC_VENUES.ISLINGTON_ASSEMBLY_HALL,
  //youtubeId: "cGQD-nAo4Vc",
  dates: [new Date("2018-03-27")],
  company: [FRIENDS.TONYA_FRANCE]
};

export const AQUILO: IGig = {
  headline: MUSICIANS.AQUILO,
  venue: MUSIC_VENUES.OVAL_SPACE,
  dates: [new Date("2018-04-19")],
  //youtubeId: "ts7L_aQBvbQ",
  company: [FRIENDS.JAMIE_HALKET]
};

export const TWO_FEET: IGig = {
  headline: MUSICIANS.TWO_FEET,
  venue: MUSIC_VENUES.ELECTROWERKZ,
  //youtubeId: "EVP4BbbcFxE",
  dates: [new Date("2018-05-24")],
  company: [FRIENDS.JERRY_EDWARDS]
};

export const KIM_PETRAS_2018: IGig = {
  headline: MUSICIANS.KIM_PETRAS,
  venue: MUSIC_VENUES.COURTYARD_THEATRE,
  dates: [new Date("2018-05-25")],
  company: [FRIENDS.JERRY_EDWARDS],
  //youtubeId: "hks5LRHlgLE",
  favourite: true
};

export const HAIM_2018: IGig = {
  headline: MUSICIANS.HAIM,
  support: [MUSICIANS.MAGGIE_ROGERS],
  venue: MUSIC_VENUES.ALEXANDRA_PALACE,
  dates: [new Date("2018-06-15")],
  company: [
    FRIENDS.EMMA_CODRINGTON,
    FRIENDS.BECKY_MILLS,
    FRIENDS.CAITLIN_MCCAIG
  ]
};

export const ON_THE_RUN_II: IGig = {
  festival: FESTIVALS.ON_THE_RUN_II,
  lineup: [[MUSICIANS.JAY_Z, MUSICIANS.BEYONCE]],
  venue: MUSIC_VENUES.LONDON_STADIUM,
  dates: [new Date("2018-06-16")],
  //youtubeId: "_Oj9VOXXu2o",
  company: [FRIENDS.TONYA_FRANCE]
};

export const TAYLOR_SWIFT_2018: IGig = {
  headline: MUSICIANS.TAYLOR_SWIFT,
  support: [MUSICIANS.CHARLI_XCX, MUSICIANS.CAMILA_CABELLO],
  venue: MUSIC_VENUES.WEMBLEY_STADIUM,
  dates: [new Date("2018-06-22")],
  company: [FRIENDS.DAN_SPARROW],
  favourite: true
};

export const NOTION_SUMMER_PARTY: IGig = {
  festival: FESTIVALS.NOTION_SUMMER_PARTY,
  lineup: [
    [
      MUSICIANS.M_0,
      MUSICIANS.BONDAX,
      MUSICIANS.RITON,
      MUSICIANS.KAH_LO,
      MUSICIANS.ANNE_MARIE,
      MUSICIANS.MO
    ]
  ],
  venue: MUSIC_VENUES.TROXY,
  dates: [new Date("2018-07-27")],
  company: [FRIENDS.LUKE_JONES]
};

export const BRIGHTON_PRIDE_2018: IGig = {
  festival: FESTIVALS.BRIGHTON_PRIDE,
  lineup: [[MUSICIANS.BRITNEY_SPEARS]],
  venue: MUSIC_VENUES.PRESTON_PARK,
  dates: [new Date("2018-08-04")],
  company: [
    FRIENDS.TONYA_FRANCE,
    FRIENDS.SONYA_PARDI,
    FRIENDS.TOM_CHINDA_COUTTS,
    FRIENDS.RYAN_MILLS,
    FRIENDS.SIAN_RODWAY_SMITH
  ]
};

export const SOFI_TUKKER: IGig = {
  headline: MUSICIANS.SOFI_TUKKER,
  venue: MUSIC_VENUES.KOKO,
  dates: [new Date("2018-09-17")],
  company: [FRIENDS.TONYA_FRANCE]
};

export const LAUV_2018: IGig = {
  headline: MUSICIANS.LAUV,
  venue: MUSIC_VENUES.KOKO,
  dates: [new Date("2018-09-18")],
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
};

export const RALPH_2018: IGig = {
  headline: MUSICIANS.RALPH,
  venue: MUSIC_VENUES.OLD_BLUE_LAST,
  dates: [new Date("2018-10-15")],
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const RAINBOW_KITTEN_SURPRISE: IGig = {
  headline: MUSICIANS.RAINBOW_KITTEN_SURPRISE,
  venue: MUSIC_VENUES.HEAVEN,
  dates: [new Date("2018-10-31")],
  company: [FRIENDS.JAMIE_HALKET]
};

export const LYKKE_LI_2018: IGig = {
  headline: MUSICIANS.LYKKE_LI,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2018-11-04")],
  company: [FRIENDS.EMMA_CODRINGTON],
  favourite: true
};

export const FLORENCE_2018: IGig = {
  headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
  venue: MUSIC_VENUES.O2_THE,
  dates: [new Date("2018-11-21")],
  company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN]
};

export const YOU_ME_AT_SIX_2018: IGig = {
  headline: MUSICIANS.YOU_ME_AT_SIX,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2018-12-03")],
  company: [FRIENDS.EMMA_CODRINGTON]
};
