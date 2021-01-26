import { THEATRE as DATA } from "data-raw";
import { isInFuture, splitCardsIntoYears } from "utils";

import { mapTheatreVisitsToCards } from "./utils";

const past: TheatreVisit[] = DATA.filter(
  ({ date }: TheatreVisit): boolean => !isInFuture(date)
);

const sorted: TheatreVisit[] = past.sort(
  (a: TheatreVisit, b: TheatreVisit): number => (a.date > b.date ? 1 : -1)
);

const cards: ICard[] = mapTheatreVisitsToCards(sorted);

export const YEARS: ICard[][] = splitCardsIntoYears(cards);
