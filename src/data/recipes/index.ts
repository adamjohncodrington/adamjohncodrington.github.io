import { MAINS } from "./mains";
import { SAUCES } from "./sauces";
import { SIDES } from "./sides";
import { SWEETS } from "./sweets";
import { RECIPES_COMING_SOON } from "./recipes-coming-soon";

interface IRecipesData {
  CATEGORISED: Array<IRecipeGroup>;
  COMING_SOON: Array<ICountedListItem>;
}

export const DATA_RECIPES: IRecipesData = {
  CATEGORISED: [MAINS, SIDES, SAUCES, SWEETS],
  COMING_SOON: RECIPES_COMING_SOON
};
