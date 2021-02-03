import { FRIENDS, MUSICIANS, TICKET_TYPES, MUSIC_VENUES } from "@constants";

const {
  JERRY_EDWARDS,
  DARREN_TAYLOR,
  LEWIS_STEADMAN,
  LUCY_TWAITE,
  DAN_SPARROW,
  RYAN_MILLS,
  TOM_CHINDA_COUTTS,
  TONYA_FRANCE
} = FRIENDS;
const {
  O2_THE,
  LAFAYETTE,
  TOTTENHAM_HOTSPUR_STADIUM,
  SHEPHERDS_BUSH_EMPIRE,
  LONDON_PALLADIUM,
  OMEARA,
  ELECTRIC_BRIXTON,
  ROUNDHOUSE,
  PRINTWORKS,
  ROYAL_ALBERT_HALL,
  HAMMERSMITH_APOLLO,
  BRIXTON_ACADEMY
} = MUSIC_VENUES;
const {
  DICE_APP,
  TICKETWEB,
  AXS_MOBILE_APP,
  SEE_TICKETS_POSTAL,
  TICKETMASTER_ETICKET,
  TICKETMASTER_POSTAL
} = TICKET_TYPES;

export const CELESTE: Gig = {
  headline: MUSICIANS.CELESTE,
  venue: ROUNDHOUSE,
  date: new Date("2022-04-21"),
  company: [DARREN_TAYLOR]
};

export const SEVDALIZA: Gig = {
  headline: MUSICIANS.SEVDALIZA,
  venue: ELECTRIC_BRIXTON,
  date: new Date("2021-04-15"),
  company: [DARREN_TAYLOR]
};

export const RINA_SAWAYAMA: Gig = {
  headline: MUSICIANS.RINA_SAWAYAMA,
  venue: ROUNDHOUSE,
  date: new Date("2021-11-17"),
  company: [DARREN_TAYLOR]
};

export const HOLLY_HUMBERSTONE: Gig = {
  headline: MUSICIANS.HOLLY_HUMBERSTONE,
  venue: OMEARA,
  date: new Date("2021-06-10"),
  company: [DARREN_TAYLOR],
  ticketType: TICKETWEB
};

export const DAGNY: Gig = {
  headline: MUSICIANS.DAGNY,
  venue: LAFAYETTE,
  date: new Date("2021-04-12"),
  company: [DARREN_TAYLOR]
};

export const LANE_8: Gig = {
  headline: MUSICIANS.LANE_8,
  venue: PRINTWORKS,
  date: new Date("2021-12-09"),
  company: [TONYA_FRANCE],
  ticketType: DICE_APP
};

export const JON_HOPKINS: Gig = {
  headline: MUSICIANS.JON_HOPKINS,
  venue: ROYAL_ALBERT_HALL,
  date: new Date("2021-11-13"),
  company: [TONYA_FRANCE]
};

export const HAIM: Gig = {
  headline: MUSICIANS.HAIM,
  support: [MUSICIANS.GEORGIA],
  venue: O2_THE,
  date: new Date("2021-06-18"),
  company: [DARREN_TAYLOR, LEWIS_STEADMAN, JERRY_EDWARDS],
  ticketType: AXS_MOBILE_APP
};

export const JESSIE_WARE: Gig = {
  headline: MUSICIANS.JESSIE_WARE,
  venue: BRIXTON_ACADEMY,
  date: new Date("2021-04-25"),
  company: [DARREN_TAYLOR, LUCY_TWAITE],
  ticketType: TICKETWEB
};

export const ELLIE_GOULDING_2021: Gig = {
  headline: MUSICIANS.ELLIE_GOULDING,
  venue: HAMMERSMITH_APOLLO,
  date: new Date("2021-05-06"),
  company: [DAN_SPARROW],
  ticketType: TICKETMASTER_POSTAL
};

export const LADY_GAGA_2021: Gig = {
  headline: MUSICIANS.LADY_GAGA,
  venue: TOTTENHAM_HOTSPUR_STADIUM,
  date: new Date("2021-07-30"),
  company: [RYAN_MILLS, DAN_SPARROW, TOM_CHINDA_COUTTS]
};

export const SOPHIE_ELLIS_BEXTOR: Gig = {
  headline: MUSICIANS.SOPHIE_ELLIS_BEXTOR,
  venue: LONDON_PALLADIUM,
  date: new Date("2021-05-13"),
  company: [DARREN_TAYLOR],
  ticketType: TICKETMASTER_POSTAL
};

export const CARIBOU: Gig = {
  headline: MUSICIANS.CARIBOU,
  venue: BRIXTON_ACADEMY,
  date: new Date("2021-05-10"),
  company: [DARREN_TAYLOR],
  ticketType: TICKETMASTER_ETICKET
};

export const RATIONALE: Gig = {
  headline: MUSICIANS.RATIONALE,
  venue: SHEPHERDS_BUSH_EMPIRE,
  date: new Date("2022-03-31"),
  company: [DARREN_TAYLOR],
  ticketType: SEE_TICKETS_POSTAL
};
