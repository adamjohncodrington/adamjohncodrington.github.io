import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const BASTILLE: IGig = {
  headline: MUSICIANS.BASTILLE,
  venue: MUSIC_VENUES.ROCK_CITY,
  company: [FRIENDS.TONYA_FRANCE],
  dates: [new Date("2013-03-21")]
};

export const RIHANNA: IGig = {
  headline: MUSICIANS.RIHANNA,
  venue: MUSIC_VENUES.NEC_ARENA_BIRMINGHAM,
  company: [FRIENDS.JESS_SMITH],
  dates: [new Date("2013-07-18")],
  favourite: true
};

export const CHVRCHES_2013: IGig = {
  headline: MUSICIANS.CHVRCHES,
  venue: MUSIC_VENUES.RITZ_MANCHESTER,
  company: [FRIENDS.SIMAN_PONE],
  dates: [new Date("2013-10-14")]
};
