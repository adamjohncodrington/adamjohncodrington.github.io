import { mapAlbumsToCards, mapVinylsToCards } from "data-factories";
import { VINYL_COLLECTION, VINYL_WISH_LIST } from "data-raw";
import { filterMiniCards } from "utils";

import { COST } from "./cost";
import { COLORS } from "./colors";
import { MUSICIANS } from "./musicians";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

export const VINYL = {
  COLORS: mapVinylsToCards(COLORS, { hideSignedIcon: true }),
  COST,
  MUSICIANS: filterMiniCards(MUSICIANS),
  COLLECTION: mapVinylsToCards(VINYL_COLLECTION),
  SIGNED: mapVinylsToCards(SIGNED, { hideSignedIcon: true }),
  WISH_LIST: mapAlbumsToCards(VINYL_WISH_LIST),
  YEARS: YEARS.map(
    (year: Array<IVinyl>): Array<ICard> =>
      mapVinylsToCards(year, { hideYear: true })
  )
};
