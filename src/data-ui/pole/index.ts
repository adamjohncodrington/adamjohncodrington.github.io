import { POLE_TRICKS_VIDEOS } from "data-raw";
import { filterMiniCards } from "utils";

import { CONTEMPORARY, EXOTIC, IMPROVISATION, QUARANTINE } from "./routines";
import { INSTRUCTORS } from "./instructors";
import { PHOTOS } from "./photos";
import { SONGS } from "./songs";
import { STUDIOS } from "./studios";
import { mapPoleRoutinesToCards, mapPoleTricksVideosToCards } from "./utils";

export const POLE = {
  CONTEMPORARY: mapPoleRoutinesToCards(CONTEMPORARY),
  QUARANTINE: mapPoleRoutinesToCards(QUARANTINE),
  EXOTIC: mapPoleRoutinesToCards(EXOTIC),
  IMPROVISATION: mapPoleRoutinesToCards(IMPROVISATION),
  INSTRUCTORS: filterMiniCards(INSTRUCTORS),
  PHOTOS,
  SONGS: filterMiniCards(SONGS),
  STUDIOS: filterMiniCards(STUDIOS),
  TRICKS: mapPoleTricksVideosToCards(POLE_TRICKS_VIDEOS)
};
