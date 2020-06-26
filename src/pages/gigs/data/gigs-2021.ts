import {
  FRIENDS,
  FESTIVALS,
  MUSICIANS,
  TICKET_TYPES,
  MUSIC_VENUES
} from "@constants";

export const GIGS_2021: Array<IGigCard> = [
  {
    festival: FESTIVALS.MIGHTY_HOOPLA,
    venue: MUSIC_VENUES.BROCKWELL_PARK,
    dates: [new Date("2021-06-05")],
    company: [
      FRIENDS.TONYA,
      FRIENDS.MARIA,
      FRIENDS.TOM,
      FRIENDS.RYAN,
      FRIENDS.DARREN,
      FRIENDS.SIAN,
      FRIENDS.CAITLIN,
      FRIENDS.DAN
    ],
    ticketType: TICKET_TYPES.KABOODLE_ETICKET
  },
  {
    headline: MUSICIANS[1975],
    venue: MUSIC_VENUES.FINSBURY_PARK,
    dates: [new Date("2021-07-10")],
    company: [
      FRIENDS.DAN,
      FRIENDS.LEWIS,
      FRIENDS.JERRY,
      FRIENDS.CAITLIN,
      FRIENDS.COBY_B
    ],
    ticketType: TICKET_TYPES.TICKETMASTER_ETICKET
  },
  {
    headline: MUSICIANS.LADY_GAGA,
    venue: MUSIC_VENUES.TOTTENHAM_HOTSPUR_STADIUM,
    dates: [new Date("2021-07-30")],
    company: [FRIENDS.RYAN, FRIENDS.DAN, FRIENDS.TOM]
  }
];
