import { VINYL_PURCHASED as DATA } from "data-raw";
import { splitCardsIntoYears } from "utils";

import { mapVinylsToCards } from "./utils";

const sorted: IVinyl[] = DATA.sort((a: IVinyl, b: IVinyl): number =>
  a.year > b.year ? 1 : -1
);

const cards: CardProps[] = mapVinylsToCards(sorted, { hideYear: true });

export const YEARS: CardProps[][] = splitCardsIntoYears(cards);
