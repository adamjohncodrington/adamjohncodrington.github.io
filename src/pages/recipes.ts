import { DATA_RECIPES } from "../data";
import { mapRecipeCategoriesToPageSections } from "../utils/global";

const sections: Array<IPageSection> = mapRecipeCategoriesToPageSections(
  DATA_RECIPES.CATEGORISED
);

export const PAGE_DATA_RECIPES: IPageData = {
  sections
};
