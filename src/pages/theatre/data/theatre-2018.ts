import { PLAYS, THEATRE_VENUES, FRIENDS, ACTORS } from "@constants";

export const EVERYBODYS_TALKING_ABOUT_JAMIE: ITheatreVisit = {
  play: PLAYS.EVERYBODYS_TALKING_ABOUT_JAMIE,
  cast: [ACTORS.JOHN_MCCREA],
  theatre: THEATRE_VENUES.APOLLO,
  date: new Date("2018-05-12"),
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const CONSENT: ITheatreVisit = {
  play: PLAYS.CONSENT,
  cast: [ACTORS.SIAN_CLIFFORD, ACTORS.ADAM_JAMES, ACTORS.LEE_INGLEBY],
  theatre: THEATRE_VENUES.HAROLD_PINTER,
  date: new Date("2018-06-30"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
};

export const THAT_GIRL: ITheatreVisit = {
  play: PLAYS.THAT_GIRL,
  cast: [ACTORS.HATTY_JONES],
  theatre: THEATRE_VENUES.OLD_RED_LION,
  date: new Date("2018-09-05"),
  company: [
    FRIENDS.JHC,
    FRIENDS.JOE_EDWARDS,
    FRIENDS.JAMIE_HALKET,
    FRIENDS.LEWIS_STEADMAN,
    FRIENDS.DOM_COYNE
  ]
};

export const DUST: ITheatreVisit = {
  play: PLAYS.DUST,
  theatre: THEATRE_VENUES.TRAFALGAR_STUDIOS,
  cast: [ACTORS.MILLY_THOMAS],
  date: new Date("2018-10-08"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
  favourite: true
};

export const INHERITANCE: ITheatreVisit = {
  play: PLAYS.INHERITANCE_THE,
  theatre: THEATRE_VENUES.NOEL_COWARD,
  date: new Date("2018-10-27"),
  company: [FRIENDS.MUM],
  favourite: true
};

export const FROZEN: ITheatreVisit = {
  play: PLAYS.FROZEN,
  theatre: THEATRE_VENUES.ROYAL_HAYMARKET,
  date: new Date("2018-04-14"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
  cast: [ACTORS.SURANNE_JONES, ACTORS.NINA_SOSANYA, ACTORS.JASON_WATKINS]
};
