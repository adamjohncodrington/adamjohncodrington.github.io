import { MAINS } from "./mains";
import { SAUCES } from "./sauces";
import { SIDES } from "./sides";
import { SWEETS } from "./sweets";
import { RECIPES_COMING_SOON } from "./recipes-coming-soon";

interface IRecipesData {
  CATEGORISED: Array<IRecipeGroup>;
  COMING_SOON: Array<ICountedListItem>;
}

const CATEGORISED: Array<IRecipeGroup> = [
  SAUCES,
  MAINS,
  SIDES,
  SWEETS
].sort((a: IRecipeGroup, b: IRecipeGroup) =>
  a.category > b.category ? 1 : -1
);

export const DATA_RECIPES: IRecipesData = {
  CATEGORISED,
  COMING_SOON: RECIPES_COMING_SOON
};
