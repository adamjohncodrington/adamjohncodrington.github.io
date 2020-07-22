import { formatCountedListItems } from "utils";

import { INSTRUCTORS } from "./instructors";
import { STUDIOS } from "./studios";

export const POLE = {
  INSTRUCTORS: formatCountedListItems({
    countedListItems: INSTRUCTORS
  }),
  STUDIOS: formatCountedListItems({
    countedListItems: STUDIOS
  })
};
