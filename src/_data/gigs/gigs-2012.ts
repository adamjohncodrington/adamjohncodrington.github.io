import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "_constants";

export const GIGS_2012: Array<IGigData> = [
  {
    headline: MUSICIANS.SBTRKT,
    support: [MUSICIANS.DISCLOSURE],
    venue: MUSIC_VENUES.ROCK_CITY,
    company: [FRIENDS.TONYA],
    dates: [new Date("2012-02-28")]
  },
  {
    headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
    venue: MUSIC_VENUES.NEC_ARENA_BIRMINGHAM,
    company: [FRIENDS.DAD],
    dates: [new Date("2012-03-13")]
  },
  {
    headline: MUSICIANS.LITTLE_COMETS,
    venue: MUSIC_VENUES.COCKPIT_LEEDS,
    company: [FRIENDS.EMMA],
    dates: [new Date("2012-04-23")]
  },
  {
    headline: MUSICIANS.KATE_NASH,
    venue: MUSIC_VENUES.BODEGA,
    company: [FRIENDS.TONYA, FRIENDS.SONYA, FRIENDS.KIRSTEN],
    dates: [new Date("2012-06-22")]
  },
  {
    headline: MUSICIANS.MARINA,
    venue: MUSIC_VENUES.INSTITUTE_BIRMINGHAM,
    company: [FRIENDS.MUM, FRIENDS.EMMA],
    dates: [new Date("2012-06-29")],
    favourite: true
  },
  {
    headline: MUSICIANS.LADY_GAGA,
    venue: MUSIC_VENUES.TWICKENHAM_STADIUM,
    company: [FRIENDS.EMMA],
    dates: [new Date("2012-09-08")],
    favourite: true
  },
  {
    headline: MUSICIANS.NICKI_MINAJ,
    support: [MUSICIANS.MISHA_B, MUSICIANS.TYGA],
    venue: MUSIC_VENUES.ARENA_NOTTINGHAM,
    company: [FRIENDS.ELLIE_S, FRIENDS.BLAINE],
    dates: [new Date("2012-10-21")]
  },
  {
    headline: MUSICIANS.LITTLE_COMETS,
    venue: MUSIC_VENUES.RESCUE_ROOMS,
    company: [FRIENDS.SARAH_W, FRIENDS.BETH_SH],
    dates: [new Date("2012-10-31")]
  },
  {
    headline: MUSICIANS.THE_KILLERS,
    venue: MUSIC_VENUES.SHEFFIELD_ARENA,
    company: [FRIENDS.DAD],
    dates: [new Date("2012-11-08")]
  },
  {
    headline: MUSICIANS.BEN_HOWARD,
    venue: MUSIC_VENUES.ROCK_CITY,
    company: [FRIENDS.STEVE_R],
    dates: [new Date("2012-11-22")]
  },
  {
    headline: MUSICIANS.ELLIE_GOULDING,
    venue: MUSIC_VENUES.ROCK_CITY,
    favourite: true,
    company: [FRIENDS.BLAINE, FRIENDS.JESS, FRIENDS.ELLIE_G],
    dates: [new Date("2012-12-11")]
  }
];
