import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";
import { VIDEOS } from "resources";

export const ARIANA_GRANDE: IGig = {
  headline: MUSICIANS.ARIANA_GRANDE,
  support: [MUSICIANS.RIXTON],
  venue: MUSIC_VENUES.ARENA_MANCHESTER,
  company: [FRIENDS.DAN_SPARROW],
  dates: [new Date("2015-06-04")]
};

export const NOEL_GALLAGHER: IGig = {
  headline: MUSICIANS.NOEL_GALLAGHERS_HIGH_FLYING_BIRDS,
  support: [MUSICIANS.JOHNNY_MARR],
  venue: MUSIC_VENUES.CASTLEFIELD_BOWL,
  company: [FRIENDS.DAD],
  dates: [new Date("2015-07-11")]
};

export const MIGUEL: IGig = {
  headline: MUSICIANS.MIGUEL,
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  dates: [new Date("2015-10-18")]
};

export const CHVRHCES: IGig = {
  headline: MUSICIANS.CHVRCHES,
  venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
  company: [FRIENDS.DAN_SPARROW],
  video: VIDEOS.GIGS.CHVRCHES_2015,
  dates: [new Date("2015-11-19")]
};

export const LISSIE: IGig = {
  headline: MUSICIANS.LISSIE,
  venue: MUSIC_VENUES.ACADEMY_2_MANCHESTER,
  video: VIDEOS.GIGS.LISSIE,
  dates: [new Date("2015-12-05")],
  company: [],
  favourite: true
};
