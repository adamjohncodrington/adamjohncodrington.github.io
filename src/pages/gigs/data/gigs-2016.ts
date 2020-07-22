import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";
import { VIDEOS } from "resources";

export const HALSEY: IGig = {
  headline: MUSICIANS.HALSEY,
  support: [MUSICIANS.BORNS],
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  company: [FRIENDS.DAN_SPARROW],
  dates: [new Date("2016-02-22")]
};

export const JOSEF_SALVAT_2016: IGig = {
  headline: MUSICIANS.JOSEF_SALVAT,
  venue: MUSIC_VENUES.GORILLA,
  video: VIDEOS.GIGS.JOSEF_SALVAT_2016,
  favourite: true,
  company: [],
  dates: [new Date("2016-03-06")]
};

export const TROYE_SIVAN_2016: IGig = {
  headline: MUSICIANS.TROYE_SIVAN,
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  video: VIDEOS.GIGS.TROYE_SIVAN_2016,
  company: [FRIENDS.DAN_SPARROW],
  dates: [new Date("2016-04-18")]
};

export const TOURIST: IGig = {
  headline: MUSICIANS.TOURIST,
  venue: MUSIC_VENUES.DEAF_INSTITUTE,
  video: VIDEOS.GIGS.TOURIST,
  company: [FRIENDS.DAN_SPARROW],
  dates: [new Date("2016-05-10")]
};
