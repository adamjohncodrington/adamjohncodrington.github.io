import { PAGE_SECTION_IDS } from "@constants";
import { DATA_RECIPES } from "data";

import { mapRecipeGroupsToSections } from "./factory";

const SECTIONS_RECIPE_GROUPS: Array<IPageSection> = mapRecipeGroupsToSections(
  DATA_RECIPES.CATEGORISED
);

const SECTION_COMING_SOON: IPageSection = {
  details: PAGE_SECTION_IDS.RECIPES_COMING_SOON,
  data: DATA_RECIPES.COMING_SOON
};

const sections: Array<IPageSection> = [
  ...SECTIONS_RECIPE_GROUPS,
  SECTION_COMING_SOON
];

export const PAGE_RECIPES: IPageData = { sections };
