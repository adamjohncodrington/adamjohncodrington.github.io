import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "_constants";

export const GIGS_2013: Array<IGigData> = [
  {
    headline: MUSICIANS.BASTILLE,
    venue: MUSIC_VENUES.ROCK_CITY,
    company: [FRIENDS.TONYA],
    dates: [new Date("2013-03-21")]
  },
  {
    headline: MUSICIANS.RIHANNA,
    venue: MUSIC_VENUES.NEC_ARENA_BIRMINGHAM,
    company: [FRIENDS.JESS],
    dates: [new Date("2013-07-18")],
    favourite: true
  },
  {
    headline: MUSICIANS.CHRVCHES,
    venue: MUSIC_VENUES.RITZ_MANCHESTER,
    company: [FRIENDS.SIMAN],
    dates: [new Date("2013-10-14")]
  }
];
