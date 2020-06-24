import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2008: Array<IGigCard> = [
  {
    headline: MUSICIANS.KATE_NASH,
    support: [MUSICIANS.BLACK_KIDS],
    venue: MUSIC_VENUES.WOLVERHAMPTON_CIVIC_HALL,
    company: [FRIENDS.DAD],
    dates: [new Date("2008-03-01")]
  },
  {
    headline: MUSICIANS.PANIC_AT_THE_DISCO,
    support: [MUSICIANS.METRO_STATION],
    venue: MUSIC_VENUES.ROCK_CITY,
    company: [FRIENDS.MEGAN, FRIENDS.MUM, FRIENDS.EMMA],
    dates: [new Date("2008-03-15")],
    favourite: true
  },
  {
    headline: MUSICIANS.ADELE,
    venue: MUSIC_VENUES.ALEXANDRA_THEATRE,
    company: [FRIENDS.MUM],
    dates: [new Date("2008-05-04")],
    favourite: true
  },
  {
    headline: MUSICIANS.BOYS_LIKE_GIRLS,
    support: [MUSICIANS.WE_THE_KINGS, MUSICIANS.CUTE_IS_WHAT_WE_AIM_FOR],
    venue: MUSIC_VENUES.ACADEMY_2_BIRMINGHAM,
    company: [FRIENDS.MUM, FRIENDS.EMMA, FRIENDS.MEGAN],
    dates: [new Date("2008-05-31")]
  },
  {
    headline: MUSICIANS.THE_ACADEMY_IS,
    support: [MUSICIANS.WE_THE_KINGS, MUSICIANS.THE_MAINE],
    venue: MUSIC_VENUES.BARFLY_BIRMINGHAM,
    company: [FRIENDS.MUM, FRIENDS.MEGAN, FRIENDS.EMMA],
    dates: [new Date("2008-09-20")]
  },
  {
    headline: MUSICIANS.FALL_OUT_BOY,
    support: [MUSICIANS.BOYS_LIKE_GIRLS, MUSICIANS.YOU_ME_AT_SIX],
    venue: MUSIC_VENUES.NEC_ARENA_BIRMINGHAM,
    dates: [new Date("2008-10-19")],
    company: [FRIENDS.MUM, FRIENDS.EMMA, FRIENDS.MEGAN]
  }
];
