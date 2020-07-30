import { mapAlbumsToCards, mapVinylsToCards } from "data-factories";
import { VINYL_COLLECTION, VINYL_WISH_LIST } from "data-raw";
import { filterMiniCards } from "utils";

import { ARTWORK } from "./artwork";
import { COST } from "./cost";
import { COLORS } from "./colors";
import { GIFTS } from "./gifts";
import { MUSICIANS } from "./musicians";
import { RETAILERS } from "./retailers";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

export const VINYL = {
  ARTWORK,
  COLORS: mapVinylsToCards(COLORS, {
    hideSignedIcon: true,
    hideGiftSymbol: true
  }),
  COST,
  GIFTS: mapVinylsToCards(GIFTS, { hideGiftSymbol: true, showGiftFrom: true }),
  MUSICIANS: filterMiniCards(MUSICIANS),
  RETAILERS: filterMiniCards(RETAILERS),
  COLLECTION: mapVinylsToCards(VINYL_COLLECTION),
  SIGNED: mapVinylsToCards(SIGNED, { hideSignedIcon: true }),
  WISH_LIST: mapAlbumsToCards(VINYL_WISH_LIST),
  YEARS: YEARS.map(
    (year: Array<IVinyl>): Array<ICard> =>
      mapVinylsToCards(year, { hideYear: true })
  )
};
