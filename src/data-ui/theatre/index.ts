import { mapTheatreVisitsToCards } from "data-factories";
import { formatMiniCards } from "utils";

import { ACTORS } from "./actors";
import { FRIENDS } from "./friends";
import { PLAYS } from "./plays";
import { VENUES } from "./venues";
import { UP_NEXT } from "./up-next";
import { YEARS } from "./years";

export const THEATRE = {
  ACTORS: formatMiniCards(ACTORS),
  FRIENDS: formatMiniCards(FRIENDS),
  PLAYS: formatMiniCards(PLAYS),
  VENUES: formatMiniCards(VENUES),
  UP_NEXT: mapTheatreVisitsToCards(UP_NEXT),
  YEARS: YEARS.map(
    (year: Array<ITheatreVisit>): Array<ICard> => mapTheatreVisitsToCards(year)
  )
};
