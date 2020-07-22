import { formatCountedListItems } from "utils";

import { INSTRUCTORS_LIST_ITEMS } from "./instructors";
import { STUDIOS_LIST_ITEMS } from "./studios";

export const FACTORY = {
  INSTRUCTORS: formatCountedListItems({
    countedListItems: INSTRUCTORS_LIST_ITEMS
  }),
  STUDIOS: formatCountedListItems({
    countedListItems: STUDIOS_LIST_ITEMS
  })
};
