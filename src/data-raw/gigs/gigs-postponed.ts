import { FRIENDS, MUSICIANS, TICKET_TYPES, MUSIC_VENUES } from "@constants";

const { JERRY_EDWARDS, DARREN_TAYLOR, LEWIS_STEADMAN } = FRIENDS;
const { OVAL_SPACE, HEAVEN } = MUSIC_VENUES;

export const SOPHIE_2020: IGig = {
  headline: MUSICIANS.SOPHIE,
  support: [MUSICIANS.EARTHEATER],
  venue: OVAL_SPACE,
  company: [LEWIS_STEADMAN, JERRY_EDWARDS],
  ticketType: TICKET_TYPES.DICE_APP,
  date: new Date("2020-10-17")
};

export const ALLIE_X_2020: IGig = {
  headline: MUSICIANS.ALLIE_X,
  venue: HEAVEN,
  date: new Date("2020-06-04"),
  company: [DARREN_TAYLOR],
  ticketType: TICKET_TYPES.DICE_APP
};
