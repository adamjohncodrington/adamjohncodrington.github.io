import { filterMiniCards } from "utils";

import { ACTORS } from "./actors";
import { FRIENDS } from "./friends";
import { PLAYS } from "./plays";
import { VENUES } from "./venues";
import { UP_NEXT } from "./up-next";
import { mapTheatreVisitsToCards } from "./utils";
import { YEARS } from "./years";

export const THEATRE = {
  ACTORS: filterMiniCards(ACTORS),
  FRIENDS: filterMiniCards(FRIENDS),
  PLAYS: filterMiniCards(PLAYS),
  VENUES: filterMiniCards(VENUES),
  UP_NEXT: mapTheatreVisitsToCards(UP_NEXT),
  YEARS
};
