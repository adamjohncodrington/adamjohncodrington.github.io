import { PLAYS, THEATRE_VENUES, FRIENDS } from "CONSTANTS";

export const THEATRE_2017: Array<ITheatreData> = [
  {
    play: PLAYS.UGLY_LIES_THE_BONE,
    theatre: THEATRE_VENUES.NATIONAL,
    dates: [new Date("2017-03-25")],
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  },
  {
    play: PLAYS.KINKY_BOOTS,
    theatre: THEATRE_VENUES.ADELPHI,
    dates: [new Date("2017-05-23")],
    company: [FRIENDS.SIAN]
  },
  {
    play: PLAYS.MATILDA,
    theatre: THEATRE_VENUES.CAMBRIDGE,
    dates: [new Date("2017-06-07")],
    company: [FRIENDS.SIAN, FRIENDS.LUKE_S]
  },
  {
    play: PLAYS.YOUNG_MARX,
    theatre: THEATRE_VENUES.BRIDGE,
    dates: [new Date("2017-10-24")],
    company: [FRIENDS.JHC, FRIENDS.JOE, FRIENDS.JAMIE, FRIENDS.AISHA]
  },
  {
    play: PLAYS.FERRYMAN,
    favourite: true,
    theatre: THEATRE_VENUES.GIELGUD,
    dates: [new Date("2017-11-26")],
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  }
];
