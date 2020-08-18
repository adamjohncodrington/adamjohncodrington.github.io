import { POLE_TRICKS_VIDEOS } from "data-raw";
import { filterMiniCards } from "utils";

import {
  CONTEMPORARY,
  EXOTIC,
  IMPROVISATION,
  QUARANTINE,
  SHOWCASE
} from "./routines";
import { INSTRUCTORS } from "./instructors";
import { PHOTOS } from "./photos";
import { SONGS } from "./songs";
import { STUDIOS } from "./studios";
import { YEARS } from "./years";
import { mapPoleRoutinesToCards, mapPoleTricksVideosToCards } from "./utils";

export const POLE = {
  CONTEMPORARY: mapPoleRoutinesToCards(CONTEMPORARY, { sort: "desc" }),
  QUARANTINE: mapPoleRoutinesToCards(QUARANTINE, { sort: "asc" }),
  SHOWCASE: mapPoleRoutinesToCards(SHOWCASE, { sort: "desc" }),
  EXOTIC: mapPoleRoutinesToCards(EXOTIC, { sort: "desc" }),
  IMPROVISATION: mapPoleRoutinesToCards(IMPROVISATION, { sort: "desc" }),
  INSTRUCTORS: filterMiniCards(INSTRUCTORS),
  PHOTOS,
  SONGS: filterMiniCards(SONGS),
  STUDIOS: filterMiniCards(STUDIOS),
  TRICKS: mapPoleTricksVideosToCards(POLE_TRICKS_VIDEOS, { sort: "desc" }),
  YEARS
};
