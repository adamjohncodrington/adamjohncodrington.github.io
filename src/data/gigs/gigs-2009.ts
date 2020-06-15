import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "../../constants";

export const GIGS_2009: Array<IGigData> = [
  {
    headline: MUSICIANS.FALL_OUT_BOY,
    support: [MUSICIANS.HEY_MONDAY, MUSICIANS.KIDS_IN_GLASS_HOUSES],
    dates: [new Date("2009-03-05")],
    company: [FRIENDS.MUM, FRIENDS.MEGAN, FRIENDS.EMMA],
    venue: MUSIC_VENUES.ARENA_MANCHESTER
  },
  {
    headline: MUSICIANS.YOU_ME_AT_SIX,
    support: [MUSICIANS.EMAROSA, MUSICIANS.THE_SPILL_CANVAS],
    dates: [new Date("2009-03-07")],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    company: [FRIENDS.MUM, FRIENDS.MEGAN, FRIENDS.EMMA]
  },
  {
    headline: MUSICIANS.KATY_PERRY,
    support: [MUSICIANS.SLIIMY],
    favourite: true,
    dates: [new Date("2009-08-25")],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    company: [FRIENDS.MUM, FRIENDS.LOUISE, FRIENDS.MEGAN, FRIENDS.EMMA]
  },
  {
    headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
    support: [MUSICIANS.THE_XX],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    dates: [new Date("2009-09-20")],
    favourite: true,
    company: [FRIENDS.DAD]
  },
  {
    headline: MUSICIANS.ALL_TIME_LOW,
    support: [MUSICIANS.THE_FRIDAY_NIGHT_BOYS, MUSICIANS.AUDITION],
    venue: MUSIC_VENUES.ACADEMY_BIRMINGHAM,
    dates: [new Date("2009-10-02")],
    company: [FRIENDS.MUM, FRIENDS.EMMA, FRIENDS.MEGAN]
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
    company: [FRIENDS.MEGAN, FRIENDS.EMMA, FRIENDS.MUM]
  }
];
