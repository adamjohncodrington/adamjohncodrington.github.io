import { MUSIC_VENUES } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

export const VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  MUSIC_VENUES
).map(
  (musicVenue: IMusicVenue): ICountedListItem => ({
    text: musicVenue.name,
    favourite: musicVenue.favourite,
    ...getItemCounts({ item: { musicVenue }, data: { gigCards: DATA.ALL } })
  })
);
