import { MAINS } from "./mains";
import { SAUCES } from "./sauces";
import { SIDES } from "./sides";
import { SWEETS } from "./sweets";
import * as comingSoon from "./coming-soon";

const COMING_SOON: string[] = Object.values(comingSoon);

export const RECIPES = { MAINS, SAUCES, SIDES, SWEETS, COMING_SOON };
