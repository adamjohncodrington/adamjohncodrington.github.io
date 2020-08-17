import { POLE_TRICKS_VIDEOS, POLE_ROUTINES } from "data-raw";

import { mapPoleRoutinesToCards, mapPoleTricksVideosToCards } from "./utils";

export const YEARS: ICard[] = [
  ...mapPoleTricksVideosToCards(POLE_TRICKS_VIDEOS),
  ...mapPoleRoutinesToCards(POLE_ROUTINES)
];
