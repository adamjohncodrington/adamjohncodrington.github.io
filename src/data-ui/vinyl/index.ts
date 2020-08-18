import { VINYL_COLLECTION, VINYL_WISH_LIST, VINYL_ORDERED } from "data-raw";
import { filterMiniCards } from "utils";

import { ARTWORK } from "./artwork";
import { COSTS } from "./costs";
import { COLORED } from "./colored";
import { GIFTS } from "./gifts";
import { MUSICIANS } from "./musicians";
import { RETAILERS } from "./retailers";
import { SIGNED } from "./signed";
import { mapAlbumsToCards, mapVinylsToCards } from "./utils";
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
  //TODO: add this to site, and LEON to wish list
  ORDERED: mapVinylsToCards(VINYL_ORDERED),
  SIGNED: mapVinylsToCards(SIGNED, { hideSignedIcon: true }),
  WISH_LIST: mapAlbumsToCards(VINYL_WISH_LIST),
  YEARS
};
