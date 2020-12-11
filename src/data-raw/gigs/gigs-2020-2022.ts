import {
  DATES,
  FRIENDS,
  MUSICIANS,
  TICKET_TYPES,
  MUSIC_VENUES
} from "@constants";
import { VIDEOS, PHOTOS } from "resources";

const {
  JERRY_EDWARDS,
  DARREN_TAYLOR,
  LEWIS_STEADMAN,
  LUCY_TWAITE,
  DAN_SPARROW,
  MEGAN_BLACKBURN,
  CAITLIN_MCCAIG,
  COBY_BLACKBURN,
  RYAN_MILLS,
  TOM_CHINDA_COUTTS,
  TONYA_FRANCE
} = FRIENDS;
const {
  O2_THE,
  NIGHT_TALES,
  LAFAYETTE,
  TOTTENHAM_HOTSPUR_STADIUM,
  HEAVEN,
  SHEPHERDS_BUSH_EMPIRE,
  LAYLOW,
  LONDON_PALLADIUM,
  OMEARA,
  MOTH_CLUB,
  ELECTRIC_BRIXTON,
  GARAGE_THE,
  ROUNDHOUSE,
  PRINTWORKS,
  ROYAL_ALBERT_HALL,
  HAMMERSMITH_APOLLO,
  FINSBURY_PARK,
  BRIXTON_ACADEMY
} = MUSIC_VENUES;
const {
  DICE_APP,
  TICKETWEB,
  AXS_MOBILE_APP,
  GIGS_AND_TOURS_POSTAL,
  SEE_TICKETS_POSTAL,
  TICKETMASTER_ETICKET,
  TICKETMASTER_POSTAL,
  SEE_TICKETS_PRINT_AT_HOME,
  DICE_POSTAL
} = TICKET_TYPES;

export const SEVDALIZA: IGig = {
  headline: MUSICIANS.SEVDALIZA,
  venue: ELECTRIC_BRIXTON,
  date: new Date("2021-04-15"),
  company: [DARREN_TAYLOR],
  maybe: true
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

export const GRACEY: IGig = {
  headline: MUSICIANS.GRACEY,
  venue: LAYLOW,
  video: VIDEOS.GIGS.GRACEY,
  date: DATES.GIGS.GRACEY,
  company: [DARREN_TAYLOR]
};

export const CHRISTINE_AND_THE_QUEENS_2020: IGig = {
  headline: MUSICIANS.CHRISTINE_AND_THE_QUEENS,
  venue: MOTH_CLUB,
  photos: PHOTOS.GIGS.CHRISTINE_AND_THE_QUEENS_2020,
  video: VIDEOS.GIGS.CHRISTINE_AND_THE_QUEENS_2020,
  date: DATES.GIGS.CHRISTINE_AND_THE_QUEENS_2020,
  favourite: true,
  company: [DARREN_TAYLOR],
  ticketType: GIGS_AND_TOURS_POSTAL
};

export const JOSEF_SALVAT_2020: IGig = {
  headline: MUSICIANS.JOSEF_SALVAT,
  photos: PHOTOS.GIGS.JOSEF_SALVAT_2020,
  venue: MOTH_CLUB,
  video: VIDEOS.GIGS.JOSEF_SALVAT_2020,
  date: DATES.GIGS.JOSEF_SALVAT_2020,
  company: [DARREN_TAYLOR]
};

export const KIM_PETRAS_2020: IGig = {
  headline: MUSICIANS.KIM_PETRAS,
  video: VIDEOS.GIGS.KIM_PETRAS_2020,
  support: [MUSICIANS.ALEX_CHAPMAN],
  venue: SHEPHERDS_BUSH_EMPIRE,
  date: DATES.GIGS.KIM_PETRAS_2020,
  company: [DARREN_TAYLOR]
};

export const NASTY_CHERRY: IGig = {
  headline: MUSICIANS.NASTY_CHERRY,
  venue: GARAGE_THE,
  photos: PHOTOS.GIGS.NASTY_CHERRY_2020,
  date: new Date("2020-03-03"),
  company: [DARREN_TAYLOR, MEGAN_BLACKBURN],
  ticketType: SEE_TICKETS_PRINT_AT_HOME
};

export const CAROLINE_POLACHEK_2020: IGig = {
  headline: MUSICIANS.CAROLINE_POLACHEK,
  video: VIDEOS.GIGS.CAROLINE_POLACHEK_2020,
  support: [MUSICIANS.SEGA_BODEGA],
  photos: PHOTOS.GIGS.CAROLINE_POLACHEK_2020,
  venue: HEAVEN,
  date: DATES.GIGS.CAROLINE_POLACHEK_2020,
  company: [DARREN_TAYLOR],
  ticketType: DICE_APP
};

export const GEORGIA: IGig = {
  headline: MUSICIANS.GEORGIA,
  support: [MUSICIANS.PROSPA],
  video: VIDEOS.GIGS.GEORGIA,
  photos: PHOTOS.GIGS.GEORGIA_2020,
  venue: HEAVEN,
  date: DATES.GIGS.GEORGIA,
  company: [DARREN_TAYLOR],
  ticketType: DICE_APP
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

export const DUSKY_2020: IGig = {
  headline: MUSICIANS.DUSKY,
  venue: NIGHT_TALES,
  date: new Date("2020-10-18"),
  company: [TONYA_FRANCE],
  ticketType: DICE_APP
};

export const RATIONALE: IGig = {
  headline: MUSICIANS.RATIONALE,
  venue: SHEPHERDS_BUSH_EMPIRE,
  date: new Date("2021-04-28"),
  company: [DARREN_TAYLOR],
  ticketType: SEE_TICKETS_POSTAL
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

export const THE_1975_2021: IGig = {
  headline: MUSICIANS._1975_THE,
  venue: FINSBURY_PARK,
  date: new Date("2021-07-10"),
  company: [
    DAN_SPARROW,
    LEWIS_STEADMAN,
    JERRY_EDWARDS,
    CAITLIN_MCCAIG,
    COBY_BLACKBURN
  ],
  ticketType: TICKETMASTER_ETICKET
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
