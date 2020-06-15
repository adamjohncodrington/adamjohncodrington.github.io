import { PLAYS, THEATRE_VENUES, FRIENDS, ACTORS } from "../../constants";

export const THEATRE_2019: Array<ITheatreData> = [
  {
    play: PLAYS.WICKED,
    theatre: THEATRE_VENUES.APOLLO_VICTORIA,
    dates: [new Date("2019-01-12")],
    company: [FRIENDS.DAN, FRIENDS.MARIA]
  },
  {
    play: PLAYS.LEAVE_TO_REMAIN,
    theatre: THEATRE_VENUES.LYRIC,
    dates: [new Date("2019-01-22")],
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  },
  {
    play: PLAYS.HOME_IM_DARLING,
    cast: [ACTORS.KATHERINE_PARKINSON],
    theatre: THEATRE_VENUES.DUKE_OF_YORKS,
    dates: [new Date("2019-03-04")],
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  },
  {
    play: PLAYS.MIDSUMMER_NIGHTS_DREAM,
    cast: [
      ACTORS.GWENDOLINE_CHRISITE,
      ACTORS.DAVID_MOORST,
      ACTORS.OLIVER_CHRIS,
      ACTORS.HAMMED_ANIMASHAUN
    ],
    theatre: THEATRE_VENUES.BRIDGE,
    dates: [new Date("2019-08-08")],
    company: [FRIENDS.JHC, FRIENDS.JERRY, FRIENDS.JOE, FRIENDS.LEWIS]
  },
  {
    play: PLAYS.SON,
    cast: [ACTORS.LAURIE_KYNASTON],
    theatre: THEATRE_VENUES.DUKE_OF_YORKS,
    dates: [new Date("2019-09-28")],
    company: [FRIENDS.MUM]
  },
  {
    play: PLAYS.LOST_UNFOUND,
    theatre: THEATRE_VENUES.WHITE_BEAR,
    dates: [new Date("2019-10-09")],
    company: [FRIENDS.JERRY, FRIENDS.LEWIS, FRIENDS.DOM, FRIENDS.JAMIE]
  },

  {
    play: PLAYS.LUNGS,
    theatre: THEATRE_VENUES.OLD_VIC,
    cast: [ACTORS.CLAIRE_FOY, ACTORS.MATT_SMITH],
    dates: [new Date("2019-10-26")],
    company: [FRIENDS.MUM, FRIENDS.EMMA],
    favourite: true
  },
  {
    play: PLAYS.AFTERGLOW,
    cast: [ACTORS.PETER_MCPHERSON, ACTORS.ADI_CHUGH, ACTORS.BENJAMIN_ALUWIHARE],
    theatre: THEATRE_VENUES.WATERLOO_EAST,
    dates: [new Date("2019-11-30")],
    company: [FRIENDS.DAN]
  }
];
