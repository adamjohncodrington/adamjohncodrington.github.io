import { FRIENDS, MUSICIANS, TICKET_TYPES, MUSIC_VENUES } from "@constants";
import { YOUTUBE } from "resources";

const CELESTE_SHEPHERDS_BUSH: IGig = {
  headline: MUSICIANS.CELESTE,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2020-08-11")],
  company: [FRIENDS.DARREN_TAYLOR]
};

const GRACEY_LAYLOW: IGig = {
  headline: MUSICIANS.GRACEY,
  venue: MUSIC_VENUES.LAYLOW,
  youtubeVideo: YOUTUBE.GIGS.GRACEY,
  dates: [new Date("2020-01-28")],
  company: [FRIENDS.DARREN_TAYLOR]
};

const CHRISTINE_MOTH_CLUB: IGig = {
  headline: MUSICIANS.CHRISTINE_AND_THE_QUEENS,
  venue: MUSIC_VENUES.MOTH_CLUB,
  youtubeVideo: YOUTUBE.GIGS.CHRISTINE_AND_THE_QUEENS,
  dates: [new Date("2020-03-07")],
  favourite: true,
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.GIGS_AND_TOURS_POSTAL
};

const JOSEF_SALVAT_2020: IGig = {
  headline: MUSICIANS.JOSEF_SALVAT,
  venue: MUSIC_VENUES.MOTH_CLUB,
  youtubeVideo: YOUTUBE.GIGS.JOSEF_SALVAT_2020,
  dates: [new Date("2020-02-05")],
  company: [FRIENDS.DARREN_TAYLOR]
};

const KIM_PETRAS_2020: IGig = {
  headline: MUSICIANS.KIM_PETRAS,
  youtubeVideo: YOUTUBE.GIGS.KIM_PETRAS_2020,
  support: [MUSICIANS.ALEX_CHAPMAN],
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2020-02-11")],
  company: [FRIENDS.DARREN_TAYLOR]
};

const NASTY_CHERRY: IGig = {
  headline: MUSICIANS.NASTY_CHERRY,
  venue: MUSIC_VENUES.GARAGE_THE,
  dates: [new Date("2020-03-03")],
  company: [FRIENDS.DARREN_TAYLOR, FRIENDS.MEGAN_BLACKBURN],
  ticketType: TICKET_TYPES.SEE_TICKETS_PRINT_AT_HOME
};

const CAROLINE_POLACHEK: IGig = {
  headline: MUSICIANS.CAROLINE_POLACHEK,
  youtubeVideo: YOUTUBE.GIGS.CAROLINE_POLACHEK,
  support: [MUSICIANS.SEGA_BODEGA],
  venue: MUSIC_VENUES.HEAVEN,
  dates: [new Date("2020-03-11")],
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.DICE
};

const GEORGIA: IGig = {
  headline: MUSICIANS.GEORGIA,
  youtubeVideo: YOUTUBE.GIGS.GEORGIA,
  venue: MUSIC_VENUES.HEAVEN,
  dates: [new Date("2020-03-12")],
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.DICE
};

export const GIGS_2020: Array<IGig> = [
  CELESTE_SHEPHERDS_BUSH,
  GRACEY_LAYLOW,
  CHRISTINE_MOTH_CLUB,
  JOSEF_SALVAT_2020,
  KIM_PETRAS_2020,
  NASTY_CHERRY,
  CAROLINE_POLACHEK,
  GEORGIA,

  // {
  //   headline: MUSICIANS.ALLIE_X,
  //   venue: MUSIC_VENUES.HEAVEN,
  //   dates: [new Date("2020-06-04"),
  //   company: FRIENDS.DARREN_TAYLOR,
  //   ticketType: TICKET_TYPES.DICE,
  // },
  {
    headline: MUSICIANS.CARIBOU,
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2020-09-13")],
    company: [FRIENDS.DARREN_TAYLOR],
    ticketType: TICKET_TYPES.TICKETMASTER_ETICKET
  },
  {
    headline: MUSICIANS.SOPHIE,
    support: [MUSICIANS.EARTHEATER],
    venue: MUSIC_VENUES.OVAL_SPACE,
    dates: [new Date("2020-10-17")],
    company: [FRIENDS.LEWIS_STEADMAN, FRIENDS.JERRY_EDWARDS],
    ticketType: TICKET_TYPES.DICE
  },
  {
    headline: MUSICIANS.LANE_8,
    venue: MUSIC_VENUES.PRINTWORKS,
    dates: [new Date("2020-10-25")],
    company: [FRIENDS.TONYA_FRANCE],
    ticketType: TICKET_TYPES.DICE
  },
  {
    headline: MUSICIANS.JON_HOPKINS,
    venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
    dates: [new Date("2020-12-04")],
    company: [FRIENDS.TONYA_FRANCE]
  }
];
