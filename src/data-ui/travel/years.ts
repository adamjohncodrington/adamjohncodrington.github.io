import { TRIP_LEGS as DATA } from "data-raw";
import { isInFuture, splitCardsIntoYears } from "utils";

import { mapTripLegsToCards } from "./utils";

const past: TripLeg[] = DATA.filter(
  ({ dates }: TripLeg): boolean => !isInFuture(dates[0])
);
const sorted: TripLeg[] = past.sort((a: TripLeg, b: TripLeg): number =>
  a.dates[0] > b.dates[0] ? 1 : -1
);

const cards: CardProps[] = mapTripLegsToCards(sorted);

export const YEARS: CardProps[][] = splitCardsIntoYears(cards);
