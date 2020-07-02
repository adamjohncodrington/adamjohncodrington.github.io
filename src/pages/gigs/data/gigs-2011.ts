import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";

export const GIGS_2011: Array<IGigCard> = [
  {
    headline: MUSICIANS.KATE_NASH,
    support: [MUSICIANS.BRIGITTE_APHRODITE],
    venue: MUSIC_VENUES.ROCK_CITY,
    company: [FRIENDS.TONYA_FRANCE, FRIENDS.KIRSTEN_JACKSON],
    dates: [new Date("2011-03-22")],
    favourite: true
  },
  {
    headline: MUSICIANS.KATY_PERRY,
    venue: MUSIC_VENUES.ARENA_NOTTINGHAM,
    company: [
      FRIENDS.JESS_SMITH,
      FRIENDS.BLAINE_PEARSON,
      FRIENDS.ELLIE_SPANOVIC,
      FRIENDS.POOJA_DHIR
    ],
    dates: [new Date("2011-03-30")]
  },
  {
    headline: MUSICIANS.ADELE,
    support: [MUSICIANS.MICHAEL_KIWANUKA],
    venue: MUSIC_VENUES.INSTITUTE_BIRMINGHAM,
    company: [FRIENDS.MUM],
    dates: [new Date("2011-04-18")]
  },
  {
    headline: MUSICIANS.ADELE,
    support: [MUSICIANS.AMOS_LEE],
    venue: MUSIC_VENUES.DE_MONTFORT_HALL,
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM],
    dates: [new Date("2011-09-13")]
  }
];
