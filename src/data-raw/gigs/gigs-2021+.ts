import {
  FRIENDS,
  MUSICIANS,
  TICKET_TYPES,
  MUSIC_VENUES as VENUES
} from "@constants";

const {
  JERRY_EDWARDS,
  DARREN_TAYLOR,
  LEWIS_STEADMAN,
  LUCY_TWAITE,
  DAN_SPARROW,
  RYAN_MILLS,
  TOM_CHINDA_COUTTS,
  TONYA_FRANCE,
  HARRIET_BOYLE
} = FRIENDS;

export const CELESTE: Gig = {
  headline: MUSICIANS.CELESTE,
  venue: VENUES.ROUNDHOUSE,
  date: new Date("2022-04-21"),
  company: [DARREN_TAYLOR],
  ticketType: TICKET_TYPES.ROUNDHOUSE_COLLECT_AT_VENUE
};

export const ARLO_PARKS: Gig = {
  headline: MUSICIANS.ARLO_PARKS,
  venue: VENUES.SHEPHERDS_BUSH_EMPIRE,
  date: new Date("2021-11-03"),
  company: [JERRY_EDWARDS, LEWIS_STEADMAN, HARRIET_BOYLE],
  ticketType: TICKET_TYPES.TICKETMASTER_ETICKET
};

export const SEVDALIZA: Gig = {
  headline: MUSICIANS.SEVDALIZA,
  venue: VENUES.ELECTRIC_BRIXTON,
  date: new Date("2022-05-06"),
  company: [DARREN_TAYLOR]
};

export const RINA_SAWAYAMA: Gig = {
  headline: MUSICIANS.RINA_SAWAYAMA,
  venue: VENUES.ELECTRIC_BRIXTON,
  date: new Date("2021-11-16"),
  company: [DARREN_TAYLOR]
};

export const HOLLY_HUMBERSTONE: Gig = {
  headline: MUSICIANS.HOLLY_HUMBERSTONE,
  venue: VENUES.OMEARA,
  date: new Date("2021-06-10"),
  company: [DARREN_TAYLOR],
  ticketType: TICKET_TYPES.TICKETWEB
};

export const DAGNY: Gig = {
  headline: MUSICIANS.DAGNY,
  venue: VENUES.LAFAYETTE,
  date: new Date("2022-01-17"),
  company: [DARREN_TAYLOR],
  ticketType: TICKET_TYPES.SEE_TICKETS_PRINT_AT_HOME
};

export const LANE_8: Gig = {
  headline: MUSICIANS.LANE_8,
  venue: VENUES.PRINTWORKS,
  date: new Date("2021-12-09"),
  company: [TONYA_FRANCE],
  ticketType: TICKET_TYPES.DICE_APP
};

export const JON_HOPKINS: Gig = {
  headline: MUSICIANS.JON_HOPKINS,
  venue: VENUES.ROYAL_ALBERT_HALL,
  date: new Date("2021-11-23"),
  company: [TONYA_FRANCE],
  ticketType: TICKET_TYPES.ROYAL_ALBERT_HALL_PDF
};

export const HAIM: Gig = {
  headline: MUSICIANS.HAIM,
  support: [MUSICIANS.GEORGIA],
  venue: VENUES.O2_THE,
  date: new Date("2021-06-18"),
  company: [DARREN_TAYLOR, LEWIS_STEADMAN, JERRY_EDWARDS],
  ticketType: TICKET_TYPES.AXS_MOBILE_APP
};

export const JESSIE_WARE: Gig = {
  headline: MUSICIANS.JESSIE_WARE,
  venue: VENUES.BRIXTON_ACADEMY,
  date: new Date("2021-12-13"),
  company: [DARREN_TAYLOR, LUCY_TWAITE],
  ticketType: TICKET_TYPES.TICKETWEB
};

export const ELLIE_GOULDING_2021: Gig = {
  headline: MUSICIANS.ELLIE_GOULDING,
  venue: VENUES.HAMMERSMITH_APOLLO,
  date: new Date("2021-10-17"),
  company: [DAN_SPARROW],
  ticketType: TICKET_TYPES.TICKETMASTER_POSTAL
};

export const LADY_GAGA_2021: Gig = {
  headline: MUSICIANS.LADY_GAGA,
  venue: VENUES.TOTTENHAM_HOTSPUR_STADIUM,
  date: new Date("2021-07-30"),
  company: [RYAN_MILLS, DAN_SPARROW, TOM_CHINDA_COUTTS],
  ticketType: TICKET_TYPES.TICKETMASTER_POSTAL
};

export const SOPHIE_ELLIS_BEXTOR: Gig = {
  headline: MUSICIANS.SOPHIE_ELLIS_BEXTOR,
  venue: VENUES.LONDON_PALLADIUM,
  date: new Date("2022-03-30"),
  company: [DARREN_TAYLOR],
  ticketType: TICKET_TYPES.TICKETMASTER_POSTAL
};

// export const CARIBOU: Gig = {
//   headline: MUSICIANS.CARIBOU,
//   venue: VENUES.BRIXTON_ACADEMY,
//   company: [DARREN_TAYLOR],
//   ticketType: TICKET_TYPES.TICKETMASTER_ETICKET
// };

export const RATIONALE: Gig = {
  headline: MUSICIANS.RATIONALE,
  venue: VENUES.SHEPHERDS_BUSH_EMPIRE,
  date: new Date("2022-03-31"),
  company: [DARREN_TAYLOR],
  ticketType: TICKET_TYPES.SEE_TICKETS_POSTAL
};

export const GRIFF: Gig = {
  headline: MUSICIANS.GRIFF,
  venue: VENUES.HEAVEN,
  date: new Date("2021-10-27"),
  company: [DARREN_TAYLOR, JERRY_EDWARDS],
  ticketType: TICKET_TYPES.SEE_TICKETS_POSTAL
};

export const JUNGLE: Gig = {
  headline: MUSICIANS.JUNGLE,
  venue: VENUES.BRIXTON_ACADEMY,
  date: new Date("2021-09-01"),
  company: [DARREN_TAYLOR, JERRY_EDWARDS, LEWIS_STEADMAN],
  ticketType: TICKET_TYPES.DICE_APP
};

export const BAYNK: Gig = {
  headline: MUSICIANS.BAYNK,
  venue: VENUES.XOYO,
  date: new Date("2021-11-19"),
  company: [DARREN_TAYLOR, JERRY_EDWARDS, LEWIS_STEADMAN],
  ticketType: TICKET_TYPES.GIGS_AND_TOURS_POSTAL
};
