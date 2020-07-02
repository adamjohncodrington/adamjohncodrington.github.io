import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2009: Array<IGigCard> = [
  {
    headline: MUSICIANS.FALL_OUT_BOY,
    support: [MUSICIANS.HEY_MONDAY, MUSICIANS.KIDS_IN_GLASS_HOUSES],
    dates: [new Date("2009-03-05")],
    company: [FRIENDS.MUM, FRIENDS.MEGAN_BLACKBURN, FRIENDS.EMMA_CODRINGTON],
    venue: MUSIC_VENUES.ARENA_MANCHESTER
  },
  {
    headline: MUSICIANS.YOU_ME_AT_SIX,
    support: [MUSICIANS.EMAROSA, MUSICIANS.SPILL_CANVAS_THE],
    dates: [new Date("2009-03-07")],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    company: [FRIENDS.MUM, FRIENDS.MEGAN_BLACKBURN, FRIENDS.EMMA_CODRINGTON]
  },
  {
    headline: MUSICIANS.KATY_PERRY,
    support: [MUSICIANS.SLIIMY],
    favourite: true,
    dates: [new Date("2009-08-25")],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    company: [
      FRIENDS.MUM,
      FRIENDS.LOUISE_BLACKBURN,
      FRIENDS.MEGAN_BLACKBURN,
      FRIENDS.EMMA_CODRINGTON
    ]
  },
  {
    headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
    support: [MUSICIANS.XX_THE],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    dates: [new Date("2009-09-20")],
    favourite: true,
    company: [FRIENDS.DAD]
  },
  {
    headline: MUSICIANS.ALL_TIME_LOW,
    support: [MUSICIANS.FRIDAY_NIGHT_BOYS_THE, MUSICIANS.AUDITION_THE],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    dates: [new Date("2009-10-02")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN]
  },
  {
    headline: MUSICIANS.ARCTIC_MONKEYS,
    dates: [new Date("2009-11-22")],
    company: [FRIENDS.MUM, FRIENDS.DAD],
    venue: MUSIC_VENUES.ARENA_NOTTINGHAM
  },
  {
    headline: MUSICIANS.PARAMORE,
    support: [MUSICIANS.YOU_ME_AT_SIX],
    venue: MUSIC_VENUES.NIA_ARENA_BIRMINGHAM,
    dates: [new Date("2009-12-11")],
    company: [FRIENDS.MEGAN_BLACKBURN, FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
  }
];
