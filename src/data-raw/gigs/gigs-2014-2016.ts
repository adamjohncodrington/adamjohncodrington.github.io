import { FRIENDS, MUSICIANS, MUSIC_VENUES, DATES } from "@constants";
import { VIDEOS } from "resources";

export const FOXES: Gig = {
  headline: MUSICIANS.FOXES,
  venue: MUSIC_VENUES.RUBY_LOUNGE,
  company: [FRIENDS.SIMAN_PONE],
  date: new Date("2014-03-08")
};

export const CLEAN_BANDIT_2014_05: Gig = {
  headline: MUSICIANS.CLEAN_BANDIT,
  venue: MUSIC_VENUES.ACADEMY_2_MANCHESTER,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  date: new Date("2014-05-07")
};

export const LORDE_2014: Gig = {
  headline: MUSICIANS.LORDE,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  company: [FRIENDS.TONYA_FRANCE],
  date: new Date("2014-06-05")
};

export const SBTRKT_2014: Gig = {
  headline: MUSICIANS.SBTRKT,
  venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
  company: [FRIENDS.THOM_STEPHANAKIS],
  date: new Date("2014-09-30")
};

export const CLEAN_BANDIT_2014_10: Gig = {
  headline: MUSICIANS.CLEAN_BANDIT,
  support: [MUSICIANS.YEARS_AND_YEARS],
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  date: new Date("2014-10-17")
};

export const LADY_GAGA_2014_10: Gig = {
  headline: MUSICIANS.LADY_GAGA,
  venue: MUSIC_VENUES.ARENA_MANCHESTER,
  company: [FRIENDS.SIMAN_PONE],
  date: new Date("2014-10-21")
};

export const SAM_SMITH: Gig = {
  headline: MUSICIANS.SAM_SMITH,
  support: [MUSICIANS.TORI_KELLY],
  venue: MUSIC_VENUES.ROCK_CITY,
  company: [FRIENDS.MUM],
  date: new Date("2014-10-28")
};

export const CHVRCHES_2014: Gig = {
  headline: MUSICIANS.CHVRCHES,
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  company: [FRIENDS.SIMAN_PONE],
  date: new Date("2014-11-06")
};

export const LA_ROUX: Gig = {
  headline: MUSICIANS.LA_ROUX,
  venue: MUSIC_VENUES.RITZ_MANCHESTER,
  company: [FRIENDS.EMMA_CODRINGTON],
  date: new Date("2014-11-16")
};

export const LADY_GAGA_2014_11: Gig = {
  headline: MUSICIANS.LADY_GAGA,
  support: [MUSICIANS.LADY_STARLIGHT],
  venue: MUSIC_VENUES.SHEFFIELD_ARENA,
  company: [FRIENDS.GRACE_HULME],
  date: new Date("2014-11-20")
};

export const LILY_ALLEN: Gig = {
  headline: MUSICIANS.LILY_ALLEN,
  venue: MUSIC_VENUES.APOLLO_MANCHESTER,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  date: new Date("2014-11-25")
};

export const ARIANA_GRANDE: Gig = {
  headline: MUSICIANS.ARIANA_GRANDE,
  support: [MUSICIANS.RIXTON],
  venue: MUSIC_VENUES.ARENA_MANCHESTER,
  company: [FRIENDS.DAN_SPARROW],
  date: new Date("2015-06-04")
};

export const NOEL_GALLAGHER: Gig = {
  headline: MUSICIANS.NOEL_GALLAGHERS_HIGH_FLYING_BIRDS,
  support: [MUSICIANS.JOHNNY_MARR],
  venue: MUSIC_VENUES.CASTLEFIELD_BOWL,
  company: [FRIENDS.DAD],
  date: new Date("2015-07-11")
};

export const MIGUEL: Gig = {
  headline: MUSICIANS.MIGUEL,
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  date: new Date("2015-10-18")
};

export const CHVRHCES: Gig = {
  headline: MUSICIANS.CHVRCHES,
  venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
  company: [FRIENDS.DAN_SPARROW],
  video: VIDEOS.GIGS.CHVRCHES_2015,
  date: DATES.GIGS.CHVRCHES_2015
};

export const LISSIE_2015: Gig = {
  headline: MUSICIANS.LISSIE,
  venue: MUSIC_VENUES.ACADEMY_2_MANCHESTER,
  video: VIDEOS.GIGS.LISSIE,
  date: DATES.GIGS.LISSIE_2015,
  company: [],
  favourite: true
};

export const HALSEY: Gig = {
  headline: MUSICIANS.HALSEY,
  support: [MUSICIANS.BORNS],
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  company: [FRIENDS.DAN_SPARROW],
  date: new Date("2016-02-22")
};

export const JOSEF_SALVAT_2016: Gig = {
  headline: MUSICIANS.JOSEF_SALVAT,
  venue: MUSIC_VENUES.GORILLA,
  video: VIDEOS.GIGS.JOSEF_SALVAT_2016,
  favourite: true,
  company: [],
  date: DATES.GIGS.JOSEF_SALVAT_2016
};

export const BEYONCE_2016: Gig = {
  headline: MUSICIANS.BEYONCE,
  venue: MUSIC_VENUES.WEMBLEY_STADIUM,
  video: VIDEOS.GIGS.BEYONCE_2016,
  company: [FRIENDS.EMMA_CODRINGTON],
  date: DATES.GIGS.BEYONCE_2016,
  favourite: true
};

export const ROOSEVELT: Gig = {
  headline: MUSICIANS.ROOSEVELT,
  video: VIDEOS.GIGS.ROOSEVELT,
  venue: MUSIC_VENUES.XOYO,
  company: [FRIENDS.TONYA_FRANCE],
  date: DATES.GIGS.ROOSEVELT
};

export const TROYE_SIVAN_2016: Gig = {
  headline: MUSICIANS.TROYE_SIVAN,
  venue: MUSIC_VENUES.ACADEMY_MANCHESTER,
  video: VIDEOS.GIGS.TROYE_SIVAN_2016,
  company: [FRIENDS.DAN_SPARROW],
  date: DATES.GIGS.TROYE_SIVAN_2016
};

export const TOURIST: Gig = {
  headline: MUSICIANS.TOURIST,
  venue: MUSIC_VENUES.DEAF_INSTITUTE,
  video: VIDEOS.GIGS.TOURIST_2016,
  company: [FRIENDS.DAN_SPARROW],
  date: DATES.GIGS.TOURIST_2016
};
