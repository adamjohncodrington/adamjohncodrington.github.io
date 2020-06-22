import { FRIENDS, FESTIVALS, MUSICIANS, MUSIC_VENUES } from "CONSTANTS";

export const GIGS_2007: Array<IGigData> = [
  {
    headline: MUSICIANS.FALL_OUT_BOY,
    support: [MUSICIANS.COBRA_STARSHIP],
    dates: [new Date("2007-04-03")],
    venue: MUSIC_VENUES.APOLLO_MANCHESTER,
    company: [FRIENDS.MUM, FRIENDS.EMMA, FRIENDS.MEGAN]
  },
  {
    festival: FESTIVALS.DECAYDANCE,
    lineup: [
      MUSICIANS.COBRA_STARSHIP,
      MUSICIANS.THE_ACADEMY_IS,
      MUSICIANS.GYM_CLASS_HEROES,
      MUSICIANS.PANIC_AT_THE_DISCO,
      MUSICIANS.FALL_OUT_BOY
    ],
    dates: [new Date("2007-08-22")],
    venue: MUSIC_VENUES.HAMMERSMITH_APOLLO,
    company: [FRIENDS.MUM, FRIENDS.EMMA, FRIENDS.MEGAN],
    favourite: true
  }
];
