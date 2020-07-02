import { THEATRE_VENUES } from "constant-objects";
import { getItemCounts } from "utils";

import { DATA } from "../data";

export const THEATRE_VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  THEATRE_VENUES
).map(
  (theatre: ITheatreVenue): ICountedListItem => ({
    text: theatre.name,
    ...getItemCounts({ item: { theatre }, data: { theatreCards: DATA.ALL } })
  })
);
