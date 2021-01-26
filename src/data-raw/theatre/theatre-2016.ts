import { PLAYS, THEATRE_VENUES, FRIENDS } from "@constants";

export const MIDSUMMER_NIGHTS_DREAM_2016: TheatreVisit = {
  play: PLAYS.MIDSUMMER_NIGHTS_DREAM,
  theatre: THEATRE_VENUES.ROYAL_SHAKESPEARE,
  date: new Date("2016-06-17"),
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const _1984: TheatreVisit = {
  play: PLAYS._1984,
  theatre: THEATRE_VENUES.PLAYHOUSE,
  date: new Date("2016-08-13"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
  favourite: true
};
