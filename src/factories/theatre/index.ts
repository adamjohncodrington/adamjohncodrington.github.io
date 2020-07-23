import { formatCountedListItems } from "utils";

import { ACTORS } from "./actors";
import { FRIENDS } from "./friends";
import { PLAYS } from "./plays";
import { VENUES } from "./venues";
import { UP_NEXT } from "./up-next";
import { YEARS } from "./years";

export const THEATRE = {
  ACTORS: formatCountedListItems(ACTORS),
  FRIENDS: formatCountedListItems(FRIENDS, { isLeaderboard: true }),
  PLAYS: formatCountedListItems(PLAYS),
  VENUES: formatCountedListItems(VENUES),
  UP_NEXT,
  YEARS
};
