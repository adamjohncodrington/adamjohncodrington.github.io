import { mapAlbumsToCards } from "data-factories";
import { VINYL_COLLECTION, VINYL_WISH_LIST } from "data-raw";
import { formatMiniCards, sortVinyls } from "utils";

import { MUSICIANS } from "./musicians";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

export const VINYL = {
  MUSICIANS: formatMiniCards(MUSICIANS),
  COLLECTION: sortVinyls(VINYL_COLLECTION),
  SIGNED: mapAlbumsToCards(SIGNED),
  WISH_LIST: mapAlbumsToCards(VINYL_WISH_LIST),
  YEARS: YEARS.map(
    (year: Array<IAlbum>): Array<ICard> => mapAlbumsToCards(year)
  )
};
