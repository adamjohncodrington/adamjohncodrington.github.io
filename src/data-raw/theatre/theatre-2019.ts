import { PLAYS, THEATRE_VENUES, FRIENDS, ACTORS } from "@constants";

export const LEAVE_TO_REMAIN: TheatreVisit = {
  play: PLAYS.LEAVE_TO_REMAIN,
  theatre: THEATRE_VENUES.LYRIC,
  date: new Date("2019-01-22"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
};

export const HOME_IM_DARLING: TheatreVisit = {
  play: PLAYS.HOME_IM_DARLING,
  cast: [ACTORS.KATHERINE_PARKINSON],
  theatre: THEATRE_VENUES.DUKE_OF_YORKS,
  date: new Date("2019-03-04"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
};

export const WICKED: TheatreVisit = {
  play: PLAYS.WICKED,
  theatre: THEATRE_VENUES.APOLLO_VICTORIA,
  date: new Date("2019-01-12"),
  company: [FRIENDS.DAN_SPARROW, FRIENDS.MARIA_TAYLOR]
};

export const MIDSUMMER_NIGHTS_DREAM_2019: TheatreVisit = {
  play: PLAYS.MIDSUMMER_NIGHTS_DREAM,
  cast: [
    ACTORS.GWENDOLINE_CHRISITE,
    ACTORS.DAVID_MOORST,
    ACTORS.OLIVER_CHRIS,
    ACTORS.HAMMED_ANIMASHAUN
  ],
  theatre: THEATRE_VENUES.BRIDGE,
  date: new Date("2019-08-08"),
  company: [
    FRIENDS.JHC,
    FRIENDS.JERRY_EDWARDS,
    FRIENDS.JOE_EDWARDS,
    FRIENDS.LEWIS_STEADMAN
  ]
};

export const SON_THE: TheatreVisit = {
  play: PLAYS.SON_THE,
  cast: [ACTORS.LAURIE_KYNASTON],
  theatre: THEATRE_VENUES.DUKE_OF_YORKS,
  date: new Date("2019-09-28"),
  company: [FRIENDS.MUM]
};

export const LOST_UNFOUND: TheatreVisit = {
  play: PLAYS.LOST_UNFOUND,
  theatre: THEATRE_VENUES.WHITE_BEAR,
  date: new Date("2019-10-09"),
  company: [
    FRIENDS.JERRY_EDWARDS,
    FRIENDS.LEWIS_STEADMAN,
    FRIENDS.DOM_COYNE,
    FRIENDS.JAMIE_HALKET
  ]
};

export const LUNGS: TheatreVisit = {
  play: PLAYS.LUNGS,
  theatre: THEATRE_VENUES.OLD_VIC,
  cast: [ACTORS.CLAIRE_FOY, ACTORS.MATT_SMITH],
  date: new Date("2019-10-26"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
  favourite: true
};

export const AFTERGLOW: TheatreVisit = {
  play: PLAYS.AFTERGLOW,
  cast: [ACTORS.PETER_MCPHERSON, ACTORS.ADI_CHUGH, ACTORS.BENJAMIN_ALUWIHARE],
  theatre: THEATRE_VENUES.WATERLOO_EAST,
  date: new Date("2019-11-30"),
  company: [FRIENDS.DAN_SPARROW]
};
