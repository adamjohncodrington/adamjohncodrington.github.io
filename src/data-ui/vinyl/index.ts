import { VINYL_COLLECTION } from "data-raw";
import { filterMiniCards } from "utils";

import { ARTWORK } from "./artwork";
import { COSTS } from "./costs";
import { COLORED } from "./colored";
import { GIFTS } from "./gifts";
import { MUSICIANS } from "./musicians";
import { RETAILERS } from "./retailers";
import { SIGNED } from "./signed";
import { mapVinylsToCards } from "./utils";
import { YEARS } from "./years";

export const VINYL = {
  ARTWORK,
  COLORED: mapVinylsToCards(COLORED, {
    hideSignedIcon: true,
    hideGiftSymbol: true
  }),
  COSTS,
  GIFTS: mapVinylsToCards(GIFTS, {
    hideGiftSymbol: true,
    showGiftFrom: true,
    hideColorSymbol: true
  }),
  MUSICIANS: filterMiniCards(MUSICIANS),
  RETAILERS: filterMiniCards(RETAILERS),
  COLLECTION: mapVinylsToCards(VINYL_COLLECTION, {
    hideColorSymbol: true,
    hideGiftSymbol: true,
    hideSignedIcon: true
  }),
  SIGNED: mapVinylsToCards(SIGNED, { hideSignedIcon: true }),
  YEARS
};
