import { PLAYS, THEATRE_VENUES, FRIENDS } from "@constants";

export const THEATRE_2016: Array<ITheatreCard> = [
  {
    play: PLAYS.MIDSUMMER_NIGHTS_DREAM,
    theatre: THEATRE_VENUES.ROYAL_SHAKESPEARE,
    date: new Date("2016-06-17"),
    company: [FRIENDS.SIAN]
  },
  {
    play: PLAYS[1984],
    theatre: THEATRE_VENUES.PLAYHOUSE,
    date: new Date("2016-08-13"),
    company: [FRIENDS.MUM, FRIENDS.EMMA],
    favourite: true
  }
];
