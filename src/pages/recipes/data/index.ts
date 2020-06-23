import { MAINS } from "./mains";
import { SAUCES } from "./sauces";
import { SIDES } from "./sides";
import { SWEETS } from "./sweets";

export const CATEGORISED: Array<IRecipeGroup> = [MAINS, SIDES, SAUCES, SWEETS];

export { RECIPES_COMING_SOON as COMING_SOON } from "./recipes-coming-soon";
