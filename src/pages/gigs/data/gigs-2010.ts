import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2010: Array<IGig> = [
  {
    headline: MUSICIANS.YOU_ME_AT_SIX,
    support: [MUSICIANS.WE_THE_KINGS, MUSICIANS.FOREVER_THE_SICKEST_KIDS],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    dates: [new Date("2010-03-09")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN]
  },
  {
    headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
    support: [MUSICIANS.DRUMS_THE],
    venue: MUSIC_VENUES.WOLVERHAMPTON_CIVIC_HALL,
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM],
    dates: [new Date("2010-05-10")]
  },
  {
    headline: MUSICIANS.PALOMA_FAITH,
    support: [MUSICIANS.ELIZA_DOOLITTLE],
    venue: MUSIC_VENUES.DE_MONTFORT_HALL,
    company: [FRIENDS.MUM],
    dates: [new Date("2010-11-05")]
  },
  {
    headline: MUSICIANS.MARINA,
    venue: MUSIC_VENUES.TRENT_UNIVERSITY_NOTTINGHAM,
    company: [FRIENDS.MUM],
    dates: [new Date("2010-11-07")]
  },
  {
    headline: MUSICIANS.ELLIE_GOULDING,
    support: [MUSICIANS.SUNDAY_GIRL],
    venue: MUSIC_VENUES.ENGINE_SHED,
    company: [FRIENDS.DAD],
    dates: [new Date("2010-11-08")]
  },
  {
    headline: MUSICIANS.PARAMORE,
    support: [MUSICIANS.B_O_B],
    venue: MUSIC_VENUES.SHEFFIELD_ARENA,
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN, FRIENDS.MUM],
    dates: [new Date("2010-11-11")]
  }
];
