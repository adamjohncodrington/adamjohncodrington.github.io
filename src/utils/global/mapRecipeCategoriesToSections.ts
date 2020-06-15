import { PAGE_SECTION_TYPES } from "../../constants";

export const mapRecipeCategoriesToPageSections = (
  recipeCategories: Array<IRecipeGroup>
): Array<IPageSection> => {
  const mapRecipeCategoryToSection = ({
    category,
    data
  }: IRecipeGroup): IPageSection => ({
    details: {
      id: category,
      title: category,
      type: PAGE_SECTION_TYPES.RECIPES
    },
    data,
    expandedAutomatically: true
  });

  return recipeCategories.map(item => mapRecipeCategoryToSection(item));
};
