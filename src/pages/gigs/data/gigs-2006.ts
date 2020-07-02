import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "constant-objects";

export const GIGS_2006: Array<IGigCard> = [
  {
    headline: MUSICIANS.ALL_AMERICAN_REJECTS_THE,
    dates: [new Date("2006-09-23")],
    venue: MUSIC_VENUES.APOLLO_MANCHESTER,
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
