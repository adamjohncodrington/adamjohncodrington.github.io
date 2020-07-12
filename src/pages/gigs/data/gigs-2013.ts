import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2013: Array<IGig> = [
  {
    headline: MUSICIANS.BASTILLE,
    venue: MUSIC_VENUES.ROCK_CITY,
    company: [FRIENDS.TONYA_FRANCE],
    dates: [new Date("2013-03-21")]
  },
  {
    headline: MUSICIANS.RIHANNA,
    venue: MUSIC_VENUES.NEC_ARENA_BIRMINGHAM,
    company: [FRIENDS.JESS_SMITH],
    dates: [new Date("2013-07-18")],
    favourite: true
  },
  {
    headline: MUSICIANS.CHRVCHES,
    venue: MUSIC_VENUES.RITZ_MANCHESTER,
    company: [FRIENDS.SIMAN_PONE],
    dates: [new Date("2013-10-14")]
  }
];
