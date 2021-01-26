import { PLAYS, THEATRE_VENUES, FRIENDS } from "@constants";

export const UGLY_LIES_THE_BONE: TheatreVisit = {
  play: PLAYS.UGLY_LIES_THE_BONE,
  theatre: THEATRE_VENUES.NATIONAL,
  date: new Date("2017-03-25"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
};

export const KINKY_BOOTS: TheatreVisit = {
  play: PLAYS.KINKY_BOOTS,
  theatre: THEATRE_VENUES.ADELPHI,
  date: new Date("2017-05-23"),
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const MATILDA: TheatreVisit = {
  play: PLAYS.MATILDA,
  theatre: THEATRE_VENUES.CAMBRIDGE,
  date: new Date("2017-06-07"),
  company: [FRIENDS.SIAN_RODWAY_SMITH, FRIENDS.LUKE_STERN]
};

export const YOUNG_MARX: TheatreVisit = {
  play: PLAYS.YOUNG_MARX,
  theatre: THEATRE_VENUES.BRIDGE,
  date: new Date("2017-10-24"),
  company: [
    FRIENDS.JHC,
    FRIENDS.JOE_EDWARDS,
    FRIENDS.JAMIE_HALKET,
    FRIENDS.AISHA_SAEED
  ]
};

export const FERRYMAM: TheatreVisit = {
  play: PLAYS.FERRYMAN_THE,
  favourite: true,
  theatre: THEATRE_VENUES.GIELGUD,
  date: new Date("2017-11-26"),
  company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
};
