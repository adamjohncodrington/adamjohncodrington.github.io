import { THEATRE as DATA } from "data-raw";
import { isInFuture, splitCardsIntoYears } from "utils";

import { mapTheatreVisitsToCards } from "./utils";

const past: ITheatreVisit[] = DATA.filter(
  ({ date }: ITheatreVisit): boolean => !isInFuture(date)
);

const sorted: ITheatreVisit[] = past.sort(
  (a: ITheatreVisit, b: ITheatreVisit): number => (a.date > b.date ? 1 : -1)
);

const cards: ICard[] = mapTheatreVisitsToCards(sorted);

export const YEARS: ICard[][] = splitCardsIntoYears(cards);
