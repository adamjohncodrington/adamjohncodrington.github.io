import {
  FRIENDS,
  FESTIVALS,
  MUSICIANS,
  TICKET_TYPES,
  MUSIC_VENUES
} from "../../constants";

export const GIGS_2021: Array<IGigData> = [
  {
    event: FESTIVALS.MIGHTY_HOOPLA,
    //TODO: confirm lineup retrospectively
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
    // favourite: true,
    //TODO: confirm the support lineup retrospectively
    // support: [MUSICIANS.CHARLI_XCX, MUSICIANS.CLAIRO, MUSICIANS.PALE_WAVES],
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
  }
];
