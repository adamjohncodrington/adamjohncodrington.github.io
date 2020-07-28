import { formatMiniCards } from "utils";

import { IMPROV, EXOTIC, CONTEMPORARY } from "./videos";
import { INSTRUCTORS } from "./instructors";
import { SONGS } from "./songs";
import { STUDIOS } from "./studios";

export const POLE = {
  EXOTIC,
  CONTEMPORARY,
  IMPROV,
  INSTRUCTORS: formatMiniCards(INSTRUCTORS),
  SONGS: formatMiniCards(SONGS),
  STUDIOS
};
