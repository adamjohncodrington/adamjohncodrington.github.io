import { formatBasicListItems } from "utils";

import { ACTORS } from "./actors";
import { FRIENDS } from "./friends";
import { PLAYS } from "./plays";
import { VENUES } from "./venues";
import { UP_NEXT } from "./up-next";
import { YEARS } from "./years";

export const THEATRE = {
  ACTORS: formatBasicListItems(ACTORS),
  FRIENDS: formatBasicListItems(FRIENDS, { isLeaderboard: true }),
  PLAYS: formatBasicListItems(PLAYS),
  VENUES: formatBasicListItems(VENUES),
  UP_NEXT,
  YEARS
};
