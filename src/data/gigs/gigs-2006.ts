import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "CONSTANTS";

export const GIGS_2006: Array<IGigData> = [
  {
    headline: MUSICIANS.ALL_AMERICAN_REJECTS,
    dates: [new Date("2006-09-23")],
    venue: MUSIC_VENUES.APOLLO_MANCHESTER,
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  }
];
