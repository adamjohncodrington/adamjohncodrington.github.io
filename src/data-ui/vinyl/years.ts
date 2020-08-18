import { VINYL_COLLECTION as DATA } from "data-raw";
import { splitCardsIntoYears } from "utils";

import { mapVinylsToCards } from "./utils";

const sorted: IVinyl[] = DATA.sort((a: IVinyl, b: IVinyl): number =>
  a.year > b.year ? 1 : -1
);

const cards: ICard[] = mapVinylsToCards(sorted, { hideYear: true });

export const YEARS: ICard[][] = splitCardsIntoYears(cards);
