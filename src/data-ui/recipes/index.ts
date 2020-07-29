import { filterMiniCards } from "utils";

import { COMING_SOON } from "./coming-soon";
import { PHOTOS } from "./photos";

export const RECIPES = {
  COMING_SOON: filterMiniCards(COMING_SOON),
  PHOTOS
};
