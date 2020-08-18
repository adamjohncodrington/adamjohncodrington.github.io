import { POLE_TRICKS_VIDEOS, POLE_ROUTINES } from "data-raw";
import { sortCards, splitCardsIntoYears } from "utils";

import { mapPoleRoutinesToCards, mapPoleTricksVideosToCards } from "./utils";

const all: ICard[] = sortCards([
  ...mapPoleTricksVideosToCards(POLE_TRICKS_VIDEOS, {
    sort: "asc",
    showCategorySymbol: true
  }),
  ...mapPoleRoutinesToCards(POLE_ROUTINES, {
    sort: "asc",
    showCategorySymbol: true
  })
]);

export const YEARS: ICard[][] = splitCardsIntoYears(all);
