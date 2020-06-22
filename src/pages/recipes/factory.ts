import { PAGE_SECTION_TYPES } from "CONSTANTS";

export const mapRecipeGroupsToSections = (
  recipeGroups: Array<IRecipeGroup>
): Array<IPageSection> => {
  const maprecipeGroupToSection = ({
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

  return recipeGroups.map((item: IRecipeGroup) =>
    maprecipeGroupToSection(item)
  );
};
