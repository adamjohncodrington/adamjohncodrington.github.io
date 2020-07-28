import { formatMiniCards } from "utils";

import { CONTEMPORARY, EXOTIC, IMPROV } from "./videos";
import { INSTRUCTORS } from "./instructors";
import { PHOTOS } from "./photos";
import { SONGS } from "./songs";
import { STUDIOS } from "./studios";

export const POLE = {
  CONTEMPORARY,
  EXOTIC,
  IMPROV,
  INSTRUCTORS: formatMiniCards(INSTRUCTORS),
  PHOTOS,
  SONGS: formatMiniCards(SONGS),
  STUDIOS
};
