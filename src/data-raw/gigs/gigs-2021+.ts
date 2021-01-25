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
  OVAL_SPACE,
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

export const SEVDALIZA: IGig = {
  headline: MUSICIANS.SEVDALIZA,
  venue: ELECTRIC_BRIXTON,
  date: new Date("2021-04-15"),
  company: [DARREN_TAYLOR],
  maybe: true
};

export const SOPHIE_2020: IGig = {
  headline: MUSICIANS.SOPHIE,
  support: [MUSICIANS.EARTHEATER],
  venue: OVAL_SPACE,
  company: [LEWIS_STEADMAN, JERRY_EDWARDS],
  ticketType: TICKET_TYPES.DICE_APP,
  date: new Date("2021-10-01")
};

export const RINA_SAWAYAMA: IGig = {
  headline: MUSICIANS.RINA_SAWAYAMA,
  venue: ROUNDHOUSE,
  date: new Date("2021-11-17"),
  company: [DARREN_TAYLOR]
};

export const HOLLY_HUMBERSTONE: IGig = {
  headline: MUSICIANS.HOLLY_HUMBERSTONE,
  venue: OMEARA,
  date: new Date("2021-06-10"),
  company: [DARREN_TAYLOR],
  ticketType: TICKETWEB
};

export const DAGNY: IGig = {
  headline: MUSICIANS.DAGNY,
  venue: LAFAYETTE,
  date: new Date("2021-04-12"),
  company: [DARREN_TAYLOR],
  maybe: true
};

export const LANE_8: IGig = {
  headline: MUSICIANS.LANE_8,
  venue: PRINTWORKS,
  date: new Date("2021-12-09"),
  company: [TONYA_FRANCE],
  ticketType: DICE_APP
};

export const JON_HOPKINS: IGig = {
  headline: MUSICIANS.JON_HOPKINS,
  venue: ROYAL_ALBERT_HALL,
  date: new Date("2021-11-13"),
  company: [TONYA_FRANCE]
};

export const HAIM: IGig = {
  headline: MUSICIANS.HAIM,
  support: [MUSICIANS.GEORGIA],
  venue: O2_THE,
  date: new Date("2021-06-18"),
  company: [DARREN_TAYLOR, LEWIS_STEADMAN, JERRY_EDWARDS],
  ticketType: AXS_MOBILE_APP
};

export const JESSIE_WARE: IGig = {
  headline: MUSICIANS.JESSIE_WARE,
  venue: BRIXTON_ACADEMY,
  date: new Date("2021-04-25"),
  company: [DARREN_TAYLOR, LUCY_TWAITE],
  ticketType: TICKETWEB
};

export const ELLIE_GOULDING_2021: IGig = {
  headline: MUSICIANS.ELLIE_GOULDING,
  venue: HAMMERSMITH_APOLLO,
  date: new Date("2021-05-06"),
  company: [DAN_SPARROW],
  ticketType: TICKETMASTER_POSTAL
};

export const LADY_GAGA_2021: IGig = {
  headline: MUSICIANS.LADY_GAGA,
  venue: TOTTENHAM_HOTSPUR_STADIUM,
  date: new Date("2021-07-30"),
  company: [RYAN_MILLS, DAN_SPARROW, TOM_CHINDA_COUTTS]
};

export const SOPHIE_ELLIS_BEXTOR: IGig = {
  headline: MUSICIANS.SOPHIE_ELLIS_BEXTOR,
  venue: LONDON_PALLADIUM,
  date: new Date("2021-05-13"),
  company: [DARREN_TAYLOR],
  ticketType: TICKETMASTER_POSTAL
};

export const CARIBOU: IGig = {
  headline: MUSICIANS.CARIBOU,
  venue: BRIXTON_ACADEMY,
  date: new Date("2021-05-10"),
  company: [DARREN_TAYLOR],
  ticketType: TICKETMASTER_ETICKET
};

export const RATIONALE: IGig = {
  headline: MUSICIANS.RATIONALE,
  venue: SHEPHERDS_BUSH_EMPIRE,
  date: new Date("2022-03-31"),
  company: [DARREN_TAYLOR],
  ticketType: SEE_TICKETS_POSTAL
};
