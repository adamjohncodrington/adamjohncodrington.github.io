import { PLAYS, THEATRE_VENUES, FRIENDS, ACTORS } from "@constants";

export const THEATRE_2020: Array<ITheatreCard> = [
  {
    play: PLAYS.WAITRESS,
    theatre: THEATRE_VENUES.ADELPHI,
    date: new Date("2020-02-18"),
    company: [FRIENDS.DARREN],
    cast: [ACTORS.SARA_BAREILLES]
  },
  {
    play: PLAYS.UNCLE_VANYA,
    theatre: THEATRE_VENUES.HAROLD_PINTER,
    date: new Date("2020-02-19"),
    cast: [ACTORS.AIMEE_LOU_WOOD],
    company: [FRIENDS.MUM]
  }
  // {
  //   play: PLAYS["4000_MILES"],
  //   theatre: THEATRE_VENUES.OLD_VIC,
  //   date:new Date("2020-05-09"),
  //   cast: ACTORS.TIMOTHEE_CHALAMET,
  //   company: [FRIENDS.MUM, FRIENDS.EMMA]
  // }
];
