import {
  FRIENDS,
  MUSICIANS,
  TICKET_TYPES,
  MUSIC_VENUES
} from "constant-objects";

export const GIGS_2020: Array<IGigCard> = [
  {
    headline: MUSICIANS.GRACEY,
    venue: MUSIC_VENUES.LAYLOW,
    dates: [new Date("2020-01-28")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.JOSEF_SALVAT,
    venue: MUSIC_VENUES.MOTH_CLUB,
    dates: [new Date("2020-02-05")],
    company: [FRIENDS.DARREN_TAYLOR]
  },
  {
    headline: MUSICIANS.KIM_PETRAS,
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
    dates: [new Date("2020-03-07")],
    favourite: true,
    company: [FRIENDS.DARREN_TAYLOR],
    ticketType: TICKET_TYPES.GIGS_AND_TOURS_POSTAL
  },
  {
    headline: MUSICIANS.CAROLINE_POLACHEK,
    support: [MUSICIANS.SEGA_BODEGA],
    venue: MUSIC_VENUES.HEAVEN,
    dates: [new Date("2020-03-11")],
    company: [FRIENDS.DARREN_TAYLOR],
    ticketType: TICKET_TYPES.DICE
  },
  {
    headline: MUSICIANS.GEORGIA,
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
  // {
  //   festival: FESTIVALS.MAD_COOL,
  //   lineup: [MUSICIANS.TWENTY_ONE_PILOTS],
  //   venue: MUSIC_VENUES.IFEMA_MADRID,
  //   dates: [new Date("2020-07-08")],
  //   company: [FRIENDS.DAN_SPARROW],
  //   ticketType: TICKET_TYPES.FESTICKET_PDF
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
