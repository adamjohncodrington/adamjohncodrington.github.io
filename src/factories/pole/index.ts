import { formatMiniCards, formatCards } from "utils";

import { IMPROV, EXOTIC, CONTEMPORARY } from "./videos";
import { INSTRUCTORS } from "./instructors";
import { STUDIOS } from "./studios";

export const POLE = {
  EXOTIC: formatCards(EXOTIC),
  CONTEMPORARY: formatCards(CONTEMPORARY),
  IMPROV: formatCards(IMPROV),
  INSTRUCTORS: formatMiniCards(INSTRUCTORS),
  STUDIOS: formatMiniCards(STUDIOS)
};
