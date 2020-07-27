import { formatMiniCards, formatVideoCards } from "utils";

import { IMPROV, EXOTIC, CONTEMPORARY } from "./videos";
import { INSTRUCTORS } from "./instructors";
import { STUDIOS } from "./studios";

export const POLE = {
  EXOTIC: formatVideoCards(EXOTIC),
  CONTEMPORARY: formatVideoCards(CONTEMPORARY),
  IMPROV: formatVideoCards(IMPROV),
  INSTRUCTORS: formatMiniCards(INSTRUCTORS),
  STUDIOS: formatMiniCards(STUDIOS)
};
