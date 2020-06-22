import { DATA_RECIPES } from "../data";
import { mapRecipeGroupsToSections } from "../factories";
import { PAGE_SECTIONS } from "@constants";

const recipeGroupSections: Array<IPageSection> = mapRecipeGroupsToSections(
  DATA_RECIPES.CATEGORISED
);

const comingSoonSection: IPageSection = {
  details: PAGE_SECTIONS.RECIPES_COMING_SOON,
  data: DATA_RECIPES.COMING_SOON
};

const sections: Array<IPageSection> = [
  ...recipeGroupSections,
  comingSoonSection
];

export const PAGE_DATA_RECIPES: IPageData = { sections };
