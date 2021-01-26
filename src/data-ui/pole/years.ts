import { POLE_TRICKS_VIDEOS, POLE_ROUTINES } from "data-raw";
import { sortCards, splitCardsIntoYears } from "utils";

import { mapPoleRoutinesToCards, mapPoleTricksVideosToCards } from "./utils";

const all: CardProps[] = sortCards([
  ...mapPoleTricksVideosToCards(POLE_TRICKS_VIDEOS, {
    addIndex: false,
    sort: "asc",
    showCategorySymbol: true
  }),
  ...mapPoleRoutinesToCards(POLE_ROUTINES, {
    sort: "asc",
    showCategorySymbol: true
  })
]);

export const YEARS: CardProps[][] = splitCardsIntoYears(all);
