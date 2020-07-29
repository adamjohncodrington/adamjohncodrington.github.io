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

const compare = (a: any, b: any): number =>
  a.sort[0] > b.sort[0]
    ? 1
    : a.sort[0] === b.sort[0]
    ? a.sort[1] > b.sort[1]
      ? 1
      : -1
    : -1;

export const sortCards = (cards: Array<ICard>): Array<ICard> =>
  cards.sort((a: ICard, b: ICard): number => compare(a, b));

export const sortMiniCards = (miniCards: Array<IMiniCard>): Array<IMiniCard> =>
  miniCards.sort((a: IMiniCard, b: IMiniCard): number => compare(a, b));

export const sortMiniCardPanelDetails = (
  miniCardPanelDetails: Array<IMiniCardPanelDetail>
): Array<IMiniCardPanelDetail> =>
  miniCardPanelDetails.sort(
    (a: IMiniCardPanelDetail, b: IMiniCardPanelDetail): number => compare(a, b)
  );
