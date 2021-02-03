import { VINYL_COLLECTION as DATA } from "data-raw";
import { splitCardsIntoYears } from "utils";

import { mapVinylsToCards } from "./utils";

const sorted: Vinyl[] = DATA.sort((a: Vinyl, b: Vinyl): number =>
  a.year > b.year ? 1 : -1
);

const cards: CardProps[] = mapVinylsToCards(sorted, { hideYear: true });

export const YEARS: CardProps[][] = splitCardsIntoYears(cards);
