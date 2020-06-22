import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "CONSTANTS";

export const GIGS_2018: Array<IGigData> = [
  {
    headline: MUSICIANS.KYGO,
    support: [MUSICIANS.GRYFFIN, MUSICIANS.SEEB],
    venue: MUSIC_VENUES.THE_O2,
    dates: [new Date("2018-02-25")],
    company: [FRIENDS.TONYA]
  },
  {
    headline: MUSICIANS.CODE,
    venue: MUSIC_VENUES.CORSICA_STUDIOS,
    dates: [new Date("2018-03-07")],
    company: [FRIENDS.JERRY, FRIENDS.JAMIE, FRIENDS.DOM]
  },
  {
    headline: MUSICIANS.GEORGE_FITZGERALD,
    venue: MUSIC_VENUES.ISLINGTON_ASSEMBLY_HALL,
    dates: [new Date("2018-03-27")],
    company: [FRIENDS.TONYA]
  },
  {
    headline: MUSICIANS.AQUILO,
    venue: MUSIC_VENUES.OVAL_SPACE,
    dates: [new Date("2018-04-19")],
    company: [FRIENDS.JAMIE]
  },
  {
    headline: MUSICIANS.TWO_FEET,
    venue: MUSIC_VENUES.ELECTROWERKZ,
    dates: [new Date("2018-05-24")],
    company: [FRIENDS.JERRY]
  },
  {
    headline: MUSICIANS.KIM_PETRAS,
    venue: MUSIC_VENUES.COURTYARD_THEATRE,
    dates: [new Date("2018-05-25")],
    company: [FRIENDS.JERRY],
    favourite: true
  },
  {
    headline: MUSICIANS.HAIM,
    support: [MUSICIANS.MAGGIE_ROGERS],
    venue: MUSIC_VENUES.ALEXANDRA_PALACE,
    dates: [new Date("2018-06-15")],
    company: [FRIENDS.EMMA, FRIENDS.BECKY, FRIENDS.CAITLIN]
  },
  {
    festival: FESTIVALS.ON_THE_RUN_II,
    lineup: [MUSICIANS.JAY_Z, MUSICIANS.BEYONCE],
    venue: MUSIC_VENUES.LONDON_STADIUM,
    dates: [new Date("2018-06-16")],
    company: [FRIENDS.TONYA]
  },
  {
    headline: MUSICIANS.TAYLOR_SWIFT,
    support: [MUSICIANS.CHARLI_XCX, MUSICIANS.CAMILA_CABELLO],
    venue: MUSIC_VENUES.WEMBLEY_STADIUM,
    dates: [new Date("2018-06-22")],
    company: [FRIENDS.DAN],
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
    company: [FRIENDS.LUKE_J]
  },
  {
    festival: FESTIVALS.BRIGHTON_PRIDE,
    lineup: [MUSICIANS.BRITNEY_SPEARS],
    venue: MUSIC_VENUES.PRESTON_PARK,
    dates: [new Date("2018-08-04")],
    company: [
      FRIENDS.TONYA,
      FRIENDS.SONYA,
      FRIENDS.TOM,
      FRIENDS.RYAN,
      FRIENDS.SIAN
    ]
  },
  {
    headline: MUSICIANS.SOFI_TUKKER,
    venue: MUSIC_VENUES.KOKO,
    dates: [new Date("2018-09-17")],
    company: [FRIENDS.TONYA]
  },
  {
    headline: MUSICIANS.LAUV,
    venue: MUSIC_VENUES.KOKO,
    dates: [new Date("2018-09-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  },
  {
    headline: MUSICIANS.RALPH,
    venue: MUSIC_VENUES.OLD_BLUE_LAST,
    dates: [new Date("2018-10-15")],
    company: [FRIENDS.DARREN],
    favourite: true
  },
  {
    headline: MUSICIANS.RAINBOW_KITTEN_SURPRISE,
    venue: MUSIC_VENUES.HEAVEN,
    dates: [new Date("2018-10-31")],
    company: [FRIENDS.JAMIE]
  },
  {
    headline: MUSICIANS.LYKKE_LI,
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2018-11-04")],
    company: [FRIENDS.EMMA],
    favourite: true
  },
  {
    headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
    venue: MUSIC_VENUES.THE_O2,
    dates: [new Date("2018-11-21")],
    company: [FRIENDS.EMMA, FRIENDS.MEGAN]
  },
  {
    headline: MUSICIANS.YOU_ME_AT_SIX,
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2018-12-03")],
    company: [FRIENDS.EMMA]
  }
];
