import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const SBTRKT_2012: IGig = {
  headline: MUSICIANS.SBTRKT,
  support: [MUSICIANS.DISCLOSURE],
  venue: MUSIC_VENUES.ROCK_CITY,
  company: [FRIENDS.TONYA_FRANCE],
  dates: [new Date("2012-02-28")]
};

export const FLORENCE_2012: IGig = {
  headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
  venue: MUSIC_VENUES.NEC_ARENA_BIRMINGHAM,
  company: [FRIENDS.DAD],
  dates: [new Date("2012-03-13")]
};

export const LITTLE_COMETS_2012_04: IGig = {
  headline: MUSICIANS.LITTLE_COMETS,
  venue: MUSIC_VENUES.COCKPIT_LEEDS,
  company: [FRIENDS.EMMA_CODRINGTON],
  dates: [new Date("2012-04-23")]
};

export const KATE_NASH_2012: IGig = {
  headline: MUSICIANS.KATE_NASH,
  venue: MUSIC_VENUES.BODEGA,
  company: [FRIENDS.TONYA_FRANCE, FRIENDS.SONYA_PARDI, FRIENDS.KIRSTEN_JACKSON],
  dates: [new Date("2012-06-22")]
};

export const MARINA_2012: IGig = {
  headline: MUSICIANS.MARINA,
  venue: MUSIC_VENUES.INSTITUTE_BIRMINGHAM,
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
  dates: [new Date("2012-06-29")],
  favourite: true
};

export const LADY_GAGA_2012: IGig = {
  headline: MUSICIANS.LADY_GAGA,
  venue: MUSIC_VENUES.TWICKENHAM_STADIUM,
  company: [FRIENDS.EMMA_CODRINGTON],
  dates: [new Date("2012-09-08")],
  favourite: true
};

export const NICKI_MINAJ: IGig = {
  headline: MUSICIANS.NICKI_MINAJ,
  support: [MUSICIANS.MISHA_B, MUSICIANS.TYGA],
  venue: MUSIC_VENUES.ARENA_NOTTINGHAM,
  company: [FRIENDS.ELLIE_SPANOVIC, FRIENDS.BLAINE_PEARSON],
  dates: [new Date("2012-10-21")]
};

export const LITTLE_COMETS_2012_10: IGig = {
  headline: MUSICIANS.LITTLE_COMETS,
  venue: MUSIC_VENUES.RESCUE_ROOMS,
  company: [FRIENDS.SARAH_WHITAKER, FRIENDS.BETH_SHEARS],
  dates: [new Date("2012-10-31")]
};

export const KILLERS: IGig = {
  headline: MUSICIANS.KILLERS_THE,
  venue: MUSIC_VENUES.SHEFFIELD_ARENA,
  company: [FRIENDS.DAD],
  dates: [new Date("2012-11-08")]
};

export const BEN_HOWARD: IGig = {
  headline: MUSICIANS.BEN_HOWARD,
  venue: MUSIC_VENUES.ROCK_CITY,
  company: [FRIENDS.STEVE_RICHARDS],
  dates: [new Date("2012-11-22")]
};

export const ELLIE_GOULDING_2012: IGig = {
  headline: MUSICIANS.ELLIE_GOULDING,
  venue: MUSIC_VENUES.ROCK_CITY,
  favourite: true,
  company: [FRIENDS.BLAINE_PEARSON, FRIENDS.JESS_SMITH, FRIENDS.ELLIE_GURKIN],
  dates: [new Date("2012-12-11")]
};
