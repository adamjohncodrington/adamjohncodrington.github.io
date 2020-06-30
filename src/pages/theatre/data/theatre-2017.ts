import { PLAYS, THEATRE_VENUES, FRIENDS } from "@constants";

export const THEATRE_2017: Array<ITheatreCard> = [
  {
    play: PLAYS.UGLY_LIES_THE_BONE,
    theatre: THEATRE_VENUES.NATIONAL,
    date: new Date("2017-03-25"),
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  },
  {
    play: PLAYS.KINKY_BOOTS,
    theatre: THEATRE_VENUES.ADELPHI,
    date: new Date("2017-05-23"),
    company: [FRIENDS.SIAN]
  },
  {
    play: PLAYS.MATILDA,
    theatre: THEATRE_VENUES.CAMBRIDGE,
    date: new Date("2017-06-07"),
    company: [FRIENDS.SIAN, FRIENDS.LUKE_S]
  },
  {
    play: PLAYS.YOUNG_MARX,
    theatre: THEATRE_VENUES.BRIDGE,
    date: new Date("2017-10-24"),
    company: [FRIENDS.JHC, FRIENDS.JOE, FRIENDS.JAMIE, FRIENDS.AISHA]
  },
  {
    play: PLAYS.FERRYMAN,
    favourite: true,
    theatre: THEATRE_VENUES.GIELGUD,
    date: new Date("2017-11-26"),
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  }
];
