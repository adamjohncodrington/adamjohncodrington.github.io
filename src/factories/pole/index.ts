import { formatCountedListItems } from "utils";

import { INSTRUCTORS } from "./instructors";
import { STUDIOS } from "./studios";

export const POLE = {
  INSTRUCTORS: formatCountedListItems(INSTRUCTORS),
  STUDIOS: formatCountedListItems(STUDIOS)
};
