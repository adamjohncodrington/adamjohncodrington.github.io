export const validPageSectionData = ({
  cards,
  miniCards,
  recipes
}: IPageSectionPanelTypes): boolean =>
  !(
    (cards && cards.length === 0) ||
    (miniCards && miniCards.length === 0) ||
    (recipes &&
      recipes.filter((item: IRecipe): boolean => !item.hide).length === 0)
  );
