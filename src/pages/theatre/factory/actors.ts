import { ACTORS } from "constant-objects";
import { getItemCounts } from "utils";

import { DATA } from "../data";

export const ACTORS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  ACTORS
).map(
  (actor: IActor): ICountedListItem => ({
    text: actor.name,
    favourite: actor.favourite,
    ...getItemCounts({ item: { actor }, data: { theatreCards: DATA.ALL } })
  })
);
