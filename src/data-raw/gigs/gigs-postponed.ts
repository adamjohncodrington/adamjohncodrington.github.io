import { FRIENDS, MUSICIANS, TICKET_TYPES, MUSIC_VENUES } from "@constants";

export const ALLIE_X_2020: IGig = {
  headline: MUSICIANS.ALLIE_X,
  venue: MUSIC_VENUES.HEAVEN,
  date: new Date("2020-06-04"),
  company: [FRIENDS.DARREN_TAYLOR],
  ticketType: TICKET_TYPES.DICE_APP
};
