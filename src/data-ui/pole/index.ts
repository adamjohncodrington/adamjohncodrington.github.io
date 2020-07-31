import { mapPoleRoutinesToCards } from "MIGRATE_FOLDER_CONTENTS";
import { filterMiniCards } from "utils";

import { CONTEMPORARY, EXOTIC, IMPROV } from "./videos";
import { INSTRUCTORS } from "./instructors";
import { PHOTOS } from "./photos";
import { SONGS } from "./songs";
import { STUDIOS } from "./studios";

export const POLE = {
  CONTEMPORARY: mapPoleRoutinesToCards(CONTEMPORARY),
  EXOTIC: mapPoleRoutinesToCards(EXOTIC),
  IMPROV: mapPoleRoutinesToCards(IMPROV),
  INSTRUCTORS: filterMiniCards(INSTRUCTORS),
  PHOTOS,
  SONGS: filterMiniCards(SONGS),
  STUDIOS
};
