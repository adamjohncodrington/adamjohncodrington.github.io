import {
  FRIENDS,
  MUSICIANS,
  TICKET_TYPES,
  MUSIC_VENUES
} from "../../constants";

export const GIGS_2020: Array<IGigData> = [
  {
    headline: MUSICIANS.GRACEY,
    venue: MUSIC_VENUES.LAYLOW,
    dates: [new Date("2020-01-28")],
    company: [FRIENDS.DARREN]
  },
  {
    headline: MUSICIANS.JOSEF_SALVAT,
    venue: MUSIC_VENUES.MOTH_CLUB,
    dates: [new Date("2020-02-05")],
    company: [FRIENDS.DARREN]
  },
  {
    headline: MUSICIANS.KIM_PETRAS,
    support: [MUSICIANS.ALEX_CHAPMAN],
    venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
    dates: [new Date("2020-02-11")],
    company: [FRIENDS.DARREN]
  },
  {
    headline: MUSICIANS.NASTY_CHERRY,
    venue: MUSIC_VENUES.THE_GARAGE,
    dates: [new Date("2020-03-03")],
    company: [FRIENDS.DARREN, FRIENDS.MEGAN],
    ticketType: TICKET_TYPES.SEE_TICKETS_PRINT_AT_HOME
  },
  {
    headline: MUSICIANS.CHRISTINE_AND_THE_QUEENS,
    venue: MUSIC_VENUES.MOTH_CLUB,
    dates: [new Date("2020-03-07")],
    favourite: true,
    company: [FRIENDS.DARREN],
    ticketType: TICKET_TYPES.GIGS_AND_TOURS_POSTAL
  },
  {
    headline: MUSICIANS.CAROLINE_POLACHEK,
    support: [MUSICIANS.SEGA_BODEGA],
    venue: MUSIC_VENUES.HEAVEN,
    dates: [new Date("2020-03-11")],
    company: [FRIENDS.DARREN],
    ticketType: TICKET_TYPES.DICE
  },
  {
    headline: MUSICIANS.GEORGIA,
    venue: MUSIC_VENUES.HEAVEN,
    dates: [new Date("2020-03-12")],
    company: [FRIENDS.DARREN],
    ticketType: TICKET_TYPES.DICE
  },
  // {
  //   headline: MUSICIANS.ALLIE_X,
  //   venue: MUSIC_VENUES.HEAVEN,
  //   dates: [new Date("2020-06-04"),
  //   company: FRIENDS.DARREN,
  //   ticketType: TICKET_TYPES.DICE,
  // },
  // {
  //   event: FESTIVALS.MAD_COOL,
  //   lineup: [MUSICIANS.TWENTY_ONE_PILOTS],
  //   venue: MUSIC_VENUES.IFEMA_MADRID,
  //   dates: [new Date("2020-07-08")],
  //   company: [FRIENDS.DAN],
  //   ticketType: TICKET_TYPES.FESTICKET_PDF
  // },
  // {
  //   headline: MUSICIANS.LADY_GAGA,
  //   venue: MUSIC_VENUES.TOTTENHAM_HOTSPUR_STADIUM,
  //   dates: [new Date("2020-07-30")],
  //   company: [FRIENDS.RYAN, FRIENDS.DAN, FRIENDS.TOM]
  // },
  {
    headline: MUSICIANS.CARIBOU,
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2020-09-13")],
    company: [FRIENDS.DARREN],
    ticketType: TICKET_TYPES.TICKETMASTER_ETICKET
  },
  {
    headline: MUSICIANS.SOPHIE,
    support: [MUSICIANS.EARTHEATER],
    venue: MUSIC_VENUES.OVAL_SPACE,
    dates: [new Date("2020-10-17")],
    company: [FRIENDS.LEWIS, FRIENDS.JERRY],
    ticketType: TICKET_TYPES.DICE
  },
  {
    headline: MUSICIANS.LANE_8,
    venue: MUSIC_VENUES.PRINTWORKS,
    dates: [new Date("2020-10-25")],
    company: [FRIENDS.TONYA],
    ticketType: TICKET_TYPES.DICE
  },
  {
    headline: MUSICIANS.JON_HOPKINS,
    venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
    dates: [new Date("2020-12-04")],
    company: [FRIENDS.TONYA]
  }
];
