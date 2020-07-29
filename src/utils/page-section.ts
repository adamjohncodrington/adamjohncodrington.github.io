export const validPageSectionData = ({
  cards,
  miniCards,
  recipes
}: IPageSectionPanelDataTypes): boolean =>
  !(
    (cards && cards.length === 0) ||
    (miniCards && miniCards.length === 0) ||
    (recipes &&
      recipes.filter((item: IRecipe): boolean => !item.hide).length === 0)
  );

export const sortCards = (cards: Array<ICard>): Array<ICard> =>
  cards.sort((a: ICard, b: ICard): number => (a.sort > b.sort ? 1 : -1));
