import { FRIENDS, MUSICIANS, MUSIC_VENUES, DATES } from "@constants";
import { VIDEOS } from "resources";

export const FOXES: IGig = {
  headline: MUSICIANS.FOXES,
  venue: MUSIC_VENUES.RUBY_LOUNGE,
  company: [FRIENDS.SIMAN_PONE],
  dates: [new Date("2014-03-08")]
};

export const CLEAN_BANDIT_2014_05: IGig = {
  headline: MUSICIANS.CLEAN_BANDIT,
  venue: MUSIC_VENUES.ACADEMY_2_MANCHESTER,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  dates: [new Date("2014-05-07")]
};

export const LORDE_2014: IGig = {
  headline: MUSICIANS.LORDE,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  company: [FRIENDS.TONYA_FRANCE],
  dates: [new Date("2014-06-05")]
};

export const SBTRKT_2014: IGig = {
  headline: MUSICIANS.SBTRKT,
  venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
  company: [FRIENDS.THOM_STEPHANAKIS],
  dates: [new Date("2014-09-30")]
};

export const CLEAN_BANDIT_2014_10: IGig = {
  headline: MUSICIANS.CLEAN_BANDIT,
  support: [MUSICIANS.YEARS_AND_YEARS],
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  dates: [new Date("2014-10-17")]
};

export const LADY_GAGA_2014_10: IGig = {
  headline: MUSICIANS.LADY_GAGA,
  venue: MUSIC_VENUES.ARENA_MANCHESTER,
  company: [FRIENDS.SIMAN_PONE],
  dates: [new Date("2014-10-21")]
};

export const SAM_SMITH: IGig = {
  headline: MUSICIANS.SAM_SMITH,
  support: [MUSICIANS.TORI_KELLY],
  venue: MUSIC_VENUES.ROCK_CITY,
  company: [FRIENDS.MUM],
  dates: [new Date("2014-10-28")]
};

export const CHVRCHES_2014: IGig = {
  headline: MUSICIANS.CHVRCHES,
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  company: [FRIENDS.SIMAN_PONE],
  dates: [new Date("2014-11-06")]
};

export const LA_ROUX: IGig = {
  headline: MUSICIANS.LA_ROUX,
  venue: MUSIC_VENUES.RITZ_MANCHESTER,
  company: [FRIENDS.EMMA_CODRINGTON],
  dates: [new Date("2014-11-16")]
};

export const LADY_GAGA_2014_11: IGig = {
  headline: MUSICIANS.LADY_GAGA,
  support: [MUSICIANS.LADY_STARLIGHT],
  venue: MUSIC_VENUES.SHEFFIELD_ARENA,
  company: [FRIENDS.GRACE_HULME],
  dates: [new Date("2014-11-20")]
};

export const LILY_ALLEN: IGig = {
  headline: MUSICIANS.LILY_ALLEN,
  venue: MUSIC_VENUES.APOLLO_MANCHESTER,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  dates: [new Date("2014-11-25")]
};

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
  dates: [DATES.GIGS.CHVRCHES_2015]
};

export const LISSIE_2015: IGig = {
  headline: MUSICIANS.LISSIE,
  venue: MUSIC_VENUES.ACADEMY_2_MANCHESTER,
  video: VIDEOS.GIGS.LISSIE,
  dates: [DATES.GIGS.LISSIE_2015],
  company: [],
  favourite: true
};

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
  dates: [DATES.GIGS.JOSEF_SALVAT_2016]
};

export const BEYONCE_2016: IGig = {
  headline: MUSICIANS.BEYONCE,
  venue: MUSIC_VENUES.WEMBLEY_STADIUM,
  video: VIDEOS.GIGS.BEYONCE_2016,
  company: [FRIENDS.EMMA_CODRINGTON],
  dates: [DATES.GIGS.BEYONCE_2016],
  favourite: true
};

export const ROOSEVELT: IGig = {
  headline: MUSICIANS.ROOSEVELT,
  video: VIDEOS.GIGS.ROOSEVELT,
  venue: MUSIC_VENUES.XOYO,
  company: [FRIENDS.TONYA_FRANCE],
  dates: [DATES.GIGS.ROOSEVELT]
};

export const TROYE_SIVAN_2016: IGig = {
  headline: MUSICIANS.TROYE_SIVAN,
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  video: VIDEOS.GIGS.TROYE_SIVAN_2016,
  company: [FRIENDS.DAN_SPARROW],
  dates: [DATES.GIGS.TROYE_SIVAN_2016]
};

export const TOURIST: IGig = {
  headline: MUSICIANS.TOURIST,
  venue: MUSIC_VENUES.DEAF_INSTITUTE,
  video: VIDEOS.GIGS.TOURIST_2016,
  company: [FRIENDS.DAN_SPARROW],
  dates: [DATES.GIGS.TOURIST_2016]
};
