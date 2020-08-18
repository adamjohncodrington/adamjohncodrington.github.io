import { TRIP_LEGS as DATA } from "data-raw";
import { isInFuture, splitCardsIntoYears } from "utils";

import { mapTripLegsToCards } from "./utils";

const past: ITripLeg[] = DATA.filter(
  ({ dates }: ITripLeg): boolean => !isInFuture(dates[0])
);
const sorted: ITripLeg[] = past.sort((a: ITripLeg, b: ITripLeg): number =>
  a.dates[0] > b.dates[0] ? 1 : -1
);

const cards: ICard[] = mapTripLegsToCards(sorted);

export const YEARS: ICard[][] = splitCardsIntoYears(cards);
