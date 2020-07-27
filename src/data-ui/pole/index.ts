import { formatMiniCards } from "utils";

import { IMPROV, EXOTIC, CONTEMPORARY } from "./videos";
import { INSTRUCTORS } from "./instructors";
import { STUDIOS } from "./studios";

export const POLE = {
  EXOTIC,
  CONTEMPORARY,
  IMPROV,
  INSTRUCTORS: formatMiniCards(INSTRUCTORS),
  STUDIOS
};
