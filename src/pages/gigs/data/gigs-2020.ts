import { FRIENDS, MUSICIANS, TICKET_TYPES, MUSIC_VENUES } from "@constants";
import { YOUTUBE_GRACEY, YOUTUBE_JOSEF_SALVAT_2020 } from "resources";

const CELESTE_SHEPHERDS_BUSH: IGig = {
  headline: MUSICIANS.CELESTE,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2020-08-11")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const GIGS_2020: Array<IGig> = [
  CELESTE_SHEPHERDS_BUSH,

  {
    headline: MUSICIANS.GRACEY,
    venue: MUSIC_VENUES.LAYLOW,
    youtubeVideo: YOUTUBE_GRACEY,
    dates: [new Date("2020-01-28")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.JOSEF_SALVAT,
    venue: MUSIC_VENUES.MOTH_CLUB,
    youtubeVideo: YOUTUBE_JOSEF_SALVAT_2020,
    dates: [new Date("2020-02-05")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.KIM_PETRAS,
    //youtubeId: "DisC3P5vbp0",
    support: [MUSICIANS.ALEX_CHAPMAN],
    venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
    dates: [new Date("2020-02-11")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.NASTY_CHERRY,
    venue: MUSIC_VENUES.GARAGE_THE,
    dates: [new Date("2020-03-03")],
    company: [FRIENDS.DARREN_TAYLOR, FRIENDS.MEGAN_BLACKBURN],
    ticketType: TICKET_TYPES.SEE_TICKETS_PRINT_AT_HOME
  },
  {
    headline: MUSICIANS.CHRISTINE_AND_THE_QUEENS,
    venue: MUSIC_VENUES.MOTH_CLUB,
    //youtubeId: "AzVwaTDg50w",
    dates: [new Date("2020-03-07")],
    favourite: true,
    company: [FRIENDS.DARREN_TAYLOR],
    ticketType: TICKET_TYPES.GIGS_AND_TOURS_POSTAL
  },
  {
    headline: MUSICIANS.CAROLINE_POLACHEK,
    //youtubeId: "iWLxqOLHIRA",
    support: [MUSICIANS.SEGA_BODEGA],
    venue: MUSIC_VENUES.HEAVEN,
    dates: [new Date("2020-03-11")],
    company: [FRIENDS.DARREN_TAYLOR],
    ticketType: TICKET_TYPES.DICE
  },
  {
    headline: MUSICIANS.GEORGIA,
    //youtubeId: "t4x0jvdmpJw",
    venue: MUSIC_VENUES.HEAVEN,
    dates: [new Date("2020-03-12")],
    company: [FRIENDS.DARREN_TAYLOR],
    ticketType: TICKET_TYPES.DICE
  },
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
