import { PAGE_SECTION_TEMPLATES } from "@constants";

import { mapRecipeGroupsToSections } from "./factory";
import { CATEGORISED, COMING_SOON } from "./data";

const SECTIONS_RECIPE_GROUPS: Array<IPageSection> = mapRecipeGroupsToSections(
  CATEGORISED
);

const SECTION_COMING_SOON: IPageSection = {
  template: PAGE_SECTION_TEMPLATES.RECIPES_COMING_SOON,
  data: COMING_SOON
};

const sections: Array<IPageSection> = [
  ...SECTIONS_RECIPE_GROUPS,
  SECTION_COMING_SOON
];

export const PAGE_RECIPES: IPageData = { sections };
