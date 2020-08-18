import { POLE_TRICKS_VIDEOS, POLE_ROUTINES } from "data-raw";
import { sortCards } from "utils";

import { mapPoleRoutinesToCards, mapPoleTricksVideosToCards } from "./utils";

const all: ICard[] = sortCards([
  ...mapPoleTricksVideosToCards(POLE_TRICKS_VIDEOS, { sort: "asc" }),
  ...mapPoleRoutinesToCards(POLE_ROUTINES, { sort: "asc" })
]);

export const YEARS: ICard[][] = [all];
