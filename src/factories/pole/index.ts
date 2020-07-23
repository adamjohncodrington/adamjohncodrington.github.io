import { formatCountedListItems, formatVideoCards } from "utils";

import { IMPROV } from "./improv";
import { INSTRUCTORS } from "./instructors";
import { STUDIOS } from "./studios";

export const POLE = {
  IMPROV: formatVideoCards(IMPROV),
  INSTRUCTORS: formatCountedListItems(INSTRUCTORS),
  STUDIOS: formatCountedListItems(STUDIOS)
};
