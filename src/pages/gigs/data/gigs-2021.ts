import {
  FRIENDS,
  FESTIVALS,
  MUSICIANS,
  TICKET_TYPES,
  MUSIC_VENUES
} from "@constants";

export const GIGS_2021: Array<IGigCard> = [
  {
    headline: MUSICIANS.JESSIE_WARE,
    venue: MUSIC_VENUES.BRIXTON_ACADEMY,
    dates: [new Date("2021-04-26")],
    company: [FRIENDS.DARREN_TAYLOR],
    ticketType: TICKET_TYPES.TICKETWEB
  },
  {
    festival: FESTIVALS.MIGHTY_HOOPLA,
    venue: MUSIC_VENUES.BROCKWELL_PARK,
    dates: [new Date("2021-06-05")],
    company: [
      FRIENDS.TONYA_FRANCE,
      FRIENDS.MARIA_TAYLOR,
      FRIENDS.TOM_CHINDA_COUTTS,
      FRIENDS.RYAN_MILLS,
      FRIENDS.DARREN_TAYLOR,
      FRIENDS.SIAN_RODWAY_SMITH,
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.DAN_SPARROW
    ],
    ticketType: TICKET_TYPES.KABOODLE_ETICKET
  },
  {
    headline: MUSICIANS.THE_1975,
    venue: MUSIC_VENUES.FINSBURY_PARK,
    dates: [new Date("2021-07-10")],
    company: [
      FRIENDS.DAN_SPARROW,
      FRIENDS.LEWIS_STEADMAN,
      FRIENDS.JERRY_EDWARDS,
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.COBY_BLACKBURN
    ],
    ticketType: TICKET_TYPES.TICKETMASTER_ETICKET
  },
  {
    headline: MUSICIANS.LADY_GAGA,
    venue: MUSIC_VENUES.TOTTENHAM_HOTSPUR_STADIUM,
    dates: [new Date("2021-07-30")],
    company: [
      FRIENDS.RYAN_MILLS,
      FRIENDS.DAN_SPARROW,
      FRIENDS.TOM_CHINDA_COUTTS
    ]
  }
];
