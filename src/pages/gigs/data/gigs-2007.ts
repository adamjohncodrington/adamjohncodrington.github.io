import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const FOB_2007: IGig = {
  headline: MUSICIANS.FALL_OUT_BOY,
  support: [MUSICIANS.COBRA_STARSHIP],
  dates: [new Date("2007-04-03")],
  venue: MUSIC_VENUES.APOLLO_MANCHESTER,
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN]
};
