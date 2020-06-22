import { PAGE_SECTIONS } from "_constants";
import { DATA_RECIPES } from "_raw-data";
import { mapRecipeGroupsToSections } from "_factories";

const SECTIONS_RECIPE_GROUPS: Array<IPageSection> = mapRecipeGroupsToSections(
  DATA_RECIPES.CATEGORISED
);

const SECTION_COMING_SOON: IPageSection = {
  details: PAGE_SECTIONS.RECIPES_COMING_SOON,
  data: DATA_RECIPES.COMING_SOON
};

const sections: Array<IPageSection> = [
  ...SECTIONS_RECIPE_GROUPS,
  SECTION_COMING_SOON
];

export const DATA_PAGE_RECIPES: IPageData = { sections };
