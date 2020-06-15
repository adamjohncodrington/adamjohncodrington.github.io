import { PLAYS, THEATRE_VENUES, FRIENDS, ACTORS } from "../../constants";

export const THEATRE_2018: Array<ITheatreData> = [
  {
    play: PLAYS.FROZEN,
    theatre: THEATRE_VENUES.ROYAL_HAYMARKET,
    dates: [new Date("2018-04-14")],
    company: [FRIENDS.MUM, FRIENDS.EMMA],
    cast: [ACTORS.SURANNE_JONES, ACTORS.NINA_SOSANYA, ACTORS.JASON_WATKINS]
  },
  {
    play: PLAYS.EVERYBODYS_TALKING_ABOUT_JAMIE,
    cast: [ACTORS.JOHN_MCCREA],
    theatre: THEATRE_VENUES.APOLLO,
    dates: [new Date("2018-05-12")],
    company: [FRIENDS.SIAN]
  },
  {
    play: PLAYS.CONSENT,
    cast: [ACTORS.SIAN_CLIFFORD, ACTORS.ADAM_JAMES, ACTORS.LEE_INGLEBY],
    theatre: THEATRE_VENUES.HAROLD_PINTER,
    dates: [new Date("2018-06-30")],
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  },
  {
    play: PLAYS.THAT_GIRL,
    cast: [ACTORS.HATTY_JONES],
    theatre: THEATRE_VENUES.OLD_RED_LION,
    dates: [new Date("2018-09-05")],
    company: [
      FRIENDS.JHC,
      FRIENDS.JOE,
      FRIENDS.JAMIE,
      FRIENDS.LEWIS,
      FRIENDS.DOM
    ]
  },
  {
    play: PLAYS.DUST,
    theatre: THEATRE_VENUES.TRAFALGAR_STUDIOS,
    cast: [ACTORS.MILLY_THOMAS],
    dates: [new Date("2018-10-08")],
    company: [FRIENDS.MUM, FRIENDS.EMMA],
    favourite: true
  },
  {
    play: PLAYS.INHERITANCE,
    theatre: THEATRE_VENUES.NOEL_COWARD,
    dates: [new Date("2018-10-27")],
    company: [FRIENDS.MUM],
    favourite: true
  }
];
