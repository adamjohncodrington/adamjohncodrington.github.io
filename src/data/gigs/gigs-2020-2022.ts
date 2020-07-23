import {
  DATES,
  FRIENDS,
  MUSICIANS,
  TICKET_TYPES,
  MUSIC_VENUES
} from "@constants";
import { VIDEOS } from "resources";

//   headline: MUSICIANS.ALLIE_X,
//   venue: MUSIC_VENUES.HEAVEN,
//   dates: [new Date("2020-06-04"),
//   company: FRIENDS.DARREN_TAYLOR,
//   ticketType: TICKET_TYPES.DICE

export const CELESTE: IGig = {
  headline: MUSICIANS.CELESTE,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2020-08-11")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const GRACEY: IGig = {
  headline: MUSICIANS.GRACEY,
  venue: MUSIC_VENUES.LAYLOW,
  video: VIDEOS.GIGS.GRACEY,
  dates: [DATES.GIGS.GRACEY],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const CHRISTINE_AND_THE_QUEENS_2020: IGig = {
  headline: MUSICIANS.CHRISTINE_AND_THE_QUEENS,
  venue: MUSIC_VENUES.MOTH_CLUB,
  video: VIDEOS.GIGS.CHRISTINE_AND_THE_QUEENS_2020,
  dates: [DATES.GIGS.CHRISTINE_AND_THE_QUEENS_2020],
  favourite: true,
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.GIGS_AND_TOURS_POSTAL
};

export const JOSEF_SALVAT_2020: IGig = {
  headline: MUSICIANS.JOSEF_SALVAT,
  venue: MUSIC_VENUES.MOTH_CLUB,
  video: VIDEOS.GIGS.JOSEF_SALVAT_2020,
  dates: [DATES.GIGS.JOSEF_SALVAT_2020],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const KIM_PETRAS_2020: IGig = {
  headline: MUSICIANS.KIM_PETRAS,
  video: VIDEOS.GIGS.KIM_PETRAS_2020,
  support: [MUSICIANS.ALEX_CHAPMAN],
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [DATES.GIGS.KIM_PETRAS_2020],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const NASTY_CHERRY: IGig = {
  headline: MUSICIANS.NASTY_CHERRY,
  venue: MUSIC_VENUES.GARAGE_THE,
  dates: [new Date("2020-03-03")],
  company: [FRIENDS.DARREN_TAYLOR, FRIENDS.MEGAN_BLACKBURN],
  ticketType: TICKET_TYPES.SEE_TICKETS_PRINT_AT_HOME
};

export const CAROLINE_POLACHEK_2020: IGig = {
  headline: MUSICIANS.CAROLINE_POLACHEK,
  video: VIDEOS.GIGS.CAROLINE_POLACHEK_2020,
  support: [MUSICIANS.SEGA_BODEGA],
  venue: MUSIC_VENUES.HEAVEN,
  dates: [DATES.GIGS.CAROLINE_POLACHEK_2020],
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.DICE
};

export const GEORGIA: IGig = {
  headline: MUSICIANS.GEORGIA,
  video: VIDEOS.GIGS.GEORGIA,
  venue: MUSIC_VENUES.HEAVEN,
  dates: [DATES.GIGS.GEORGIA],
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.DICE
};

export const CARIBOU: IGig = {
  headline: MUSICIANS.CARIBOU,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2020-09-13")],
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.TICKETMASTER_ETICKET
};

export const SOPHIE_2020: IGig = {
  headline: MUSICIANS.SOPHIE,
  support: [MUSICIANS.EARTHEATER],
  venue: MUSIC_VENUES.OVAL_SPACE,
  dates: [new Date("2020-10-17")],
  company: [FRIENDS.LEWIS_STEADMAN, FRIENDS.JERRY_EDWARDS],
  ticketType: TICKET_TYPES.DICE
};

export const LANE_8: IGig = {
  headline: MUSICIANS.LANE_8,
  venue: MUSIC_VENUES.PRINTWORKS,
  dates: [new Date("2020-10-25")],
  company: [FRIENDS.TONYA_FRANCE],
  ticketType: TICKET_TYPES.DICE
};

export const JON_HOPKINS: IGig = {
  headline: MUSICIANS.JON_HOPKINS,
  venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
  dates: [new Date("2020-12-04")],
  company: [FRIENDS.TONYA_FRANCE]
};

export const RATIONALE: IGig = {
  headline: MUSICIANS.RATIONALE,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2021-04-28")],
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.SEE_TICKETS_POSTAL
};

export const JESSIE_WARE: IGig = {
  headline: MUSICIANS.JESSIE_WARE,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2021-04-26")],
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.TICKETWEB
};

export const ELLIE_GOULDING_2021: IGig = {
  headline: MUSICIANS.ELLIE_GOULDING,
  venue: MUSIC_VENUES.HAMMERSMITH_APOLLO,
  dates: [new Date("2021-05-06")],
  company: [FRIENDS.DAN_SPARROW],
  ticketType: TICKET_TYPES.TICKETMASTER_POSTAL
};

export const THE_1975_2021: IGig = {
  headline: MUSICIANS._1975_THE,
  venue: MUSIC_VENUES.FINSBURY_PARK,
  dates: [new Date("2021-07-10")],
  company: [
    FRIENDS.DAN_SPARROW,
    FRIENDS.LEWIS_STEADMAN,
    FRIENDS.JERRY_EDWARDS,
    FRIENDS.CAITLIN_MCCAIG,
    FRIENDS.COBY_BLACKBURN
  ],
  ticketType: TICKET_TYPES.TICKETMASTER_ETICKET
};

export const LADY_GAGA_2021: IGig = {
  headline: MUSICIANS.LADY_GAGA,
  venue: MUSIC_VENUES.TOTTENHAM_HOTSPUR_STADIUM,
  dates: [new Date("2021-07-30")],
  company: [FRIENDS.RYAN_MILLS, FRIENDS.DAN_SPARROW, FRIENDS.TOM_CHINDA_COUTTS]
};

export const SOPHIE_ELLIS_BEXTOR: IGig = {
  headline: MUSICIANS.SOPHIE_ELLIS_BEXTOR,
  venue: MUSIC_VENUES.LONDON_PALLADIUM,
  dates: [new Date("2021-05-13")],
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.TICKETMASTER_POSTAL
};
