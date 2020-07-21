import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const KATE_NASH_2008: IGig = {
  headline: MUSICIANS.KATE_NASH,
  support: [MUSICIANS.BLACK_KIDS],
  venue: MUSIC_VENUES.WOLVERHAMPTON_CIVIC_HALL,
  company: [FRIENDS.DAD],
  dates: [new Date("2008-03-01")]
};

export const PANIC_AT_THE_DISCO: IGig = {
  headline: MUSICIANS.PANIC_AT_THE_DISCO,
  support: [MUSICIANS.METRO_STATION],
  venue: MUSIC_VENUES.ROCK_CITY,
  company: [FRIENDS.MEGAN_BLACKBURN, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
  dates: [new Date("2008-03-15")],
  favourite: true
};

export const ADELE_2008: IGig = {
  headline: MUSICIANS.ADELE,
  venue: MUSIC_VENUES.ALEXANDRA_THEATRE,
  company: [FRIENDS.MUM],
  dates: [new Date("2008-05-04")],
  favourite: true
};

export const BOYS_LIKE_GIRLS: IGig = {
  headline: MUSICIANS.BOYS_LIKE_GIRLS,
  support: [MUSICIANS.WE_THE_KINGS, MUSICIANS.CUTE_IS_WHAT_WE_AIM_FOR],
  venue: MUSIC_VENUES.ACADEMY_2_BIRMINGHAM,
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN],
  dates: [new Date("2008-05-31")]
};

export const ACADEMY_IS: IGig = {
  headline: MUSICIANS.ACADEMY_IS_THE,
  support: [MUSICIANS.WE_THE_KINGS, MUSICIANS.MAINE_THE],
  venue: MUSIC_VENUES.BARFLY_BIRMINGHAM,
  company: [FRIENDS.MUM, FRIENDS.MEGAN_BLACKBURN, FRIENDS.EMMA_CODRINGTON],
  dates: [new Date("2008-09-20")]
};

export const FALL_OUT_BOY_2008: IGig = {
  headline: MUSICIANS.FALL_OUT_BOY,
  support: [MUSICIANS.BOYS_LIKE_GIRLS, MUSICIANS.YOU_ME_AT_SIX],
  venue: MUSIC_VENUES.NEC_ARENA_BIRMINGHAM,
  dates: [new Date("2008-10-19")],
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN]
};
