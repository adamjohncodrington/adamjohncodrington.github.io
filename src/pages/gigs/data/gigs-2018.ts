import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2018: Array<IGigCard> = [
  {
    headline: MUSICIANS.KYGO,
    support: [MUSICIANS.GRYFFIN, MUSICIANS.SEEB],
    venue: MUSIC_VENUES.O2_THE,
    dates: [new Date("2018-02-25")],
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    headline: MUSICIANS.CODE_THE,
    venue: MUSIC_VENUES.CORSICA_STUDIOS,
    dates: [new Date("2018-03-07")],
    company: [FRIENDS.JERRY_EDWARDS, FRIENDS.JAMIE_HALKET, FRIENDS.DOM_COYNE]
  },
  {
    headline: MUSICIANS.GEORGE_FITZGERALD,
    venue: MUSIC_VENUES.ISLINGTON_ASSEMBLY_HALL,
    dates: [new Date("2018-03-27")],
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    headline: MUSICIANS.AQUILO,
    venue: MUSIC_VENUES.OVAL_SPACE,
    dates: [new Date("2018-04-19")],
    company: [FRIENDS.JAMIE_HALKET]
  },
  {
    headline: MUSICIANS.TWO_FEET,
    venue: MUSIC_VENUES.ELECTROWERKZ,
    dates: [new Date("2018-05-24")],
    company: [FRIENDS.JERRY_EDWARDS]
  },
  {
    headline: MUSICIANS.KIM_PETRAS,
    venue: MUSIC_VENUES.COURTYARD_THEATRE,
    dates: [new Date("2018-05-25")],
    company: [FRIENDS.JERRY_EDWARDS],
    favourite: true
  },
  {
    headline: MUSICIANS.HAIM,
    support: [MUSICIANS.MAGGIE_ROGERS],
    venue: MUSIC_VENUES.ALEXANDRA_PALACE,
    dates: [new Date("2018-06-15")],
    company: [
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.BECKY_MILLS,
      FRIENDS.CAITLIN_MCCAIG
    ]
  },
  {
    festival: FESTIVALS.ON_THE_RUN_II,
    lineup: [MUSICIANS.JAY_Z, MUSICIANS.BEYONCE],
    venue: MUSIC_VENUES.LONDON_STADIUM,
    dates: [new Date("2018-06-16")],
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    headline: MUSICIANS.TAYLOR_SWIFT,
    support: [MUSICIANS.CHARLI_XCX, MUSICIANS.CAMILA_CABELLO],
    venue: MUSIC_VENUES.WEMBLEY_STADIUM,
    dates: [new Date("2018-06-22")],
    company: [FRIENDS.DAN_SPARROW],
    favourite: true
  },
  {
    festival: FESTIVALS.NOTION_SUMMER_PARTY,
    lineup: [
      MUSICIANS.M_0,
      MUSICIANS.BONDAX,
      MUSICIANS.RITON,
      MUSICIANS.KAH_LO,
      MUSICIANS.ANNE_MARIE,
      MUSICIANS.MO
    ],
    venue: MUSIC_VENUES.TROXY,
    dates: [new Date("2018-07-27")],
    company: [FRIENDS.LUKE_JONES]
  },
  {
    festival: FESTIVALS.BRIGHTON_PRIDE,
    lineup: [MUSICIANS.BRITNEY_SPEARS],
    venue: MUSIC_VENUES.PRESTON_PARK,
    dates: [new Date("2018-08-04")],
    company: [
      FRIENDS.TONYA_FRANCE,
      FRIENDS.SONYA_PARDI,
      FRIENDS.TOM_CHINDA_COUTTS,
      FRIENDS.RYAN_MILLS,
      FRIENDS.SIAN_RODWAY_SMITH
    ]
  },
  {
    headline: MUSICIANS.SOFI_TUKKER,
    venue: MUSIC_VENUES.KOKO,
    dates: [new Date("2018-09-17")],
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    headline: MUSICIANS.LAUV,
    venue: MUSIC_VENUES.KOKO,
    dates: [new Date("2018-09-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  },
  {
    headline: MUSICIANS.RALPH,
    venue: MUSIC_VENUES.OLD_BLUE_LAST,
    dates: [new Date("2018-10-15")],
    company: [FRIENDS.DARREN_TAYLOR],
    favourite: true
  },
  {
    headline: MUSICIANS.RAINBOW_KITTEN_SURPRISE,
    venue: MUSIC_VENUES.HEAVEN,
    dates: [new Date("2018-10-31")],
    company: [FRIENDS.JAMIE_HALKET]
  },
  {
    headline: MUSICIANS.LYKKE_LI,
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2018-11-04")],
    company: [FRIENDS.EMMA_CODRINGTON],
    favourite: true
  },
  {
    headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
    venue: MUSIC_VENUES.O2_THE,
    dates: [new Date("2018-11-21")],
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN]
  },
  {
    headline: MUSICIANS.YOU_ME_AT_SIX,
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2018-12-03")],
    company: [FRIENDS.EMMA_CODRINGTON]
  }
];
