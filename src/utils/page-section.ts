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

const lowerCaseIfString = (variable: any): any =>
  typeof variable === "string" ? variable.toLowerCase() : variable;

const compare = (a: any, b: any): number => {
  const A0 = lowerCaseIfString(a.sort[0]);
  const A1 = lowerCaseIfString(a.sort[1]);
  const B0 = lowerCaseIfString(b.sort[0]);
  const B1 = lowerCaseIfString(b.sort[1]);
  return A0 > B0 ? 1 : A0 === B0 ? (A1 > B1 ? 1 : -1) : -1;
};

export const sortCards = (cards: ICard[]): ICard[] =>
  cards.sort((a: ICard, b: ICard): number => compare(a, b));

export const sortMiniCards = (miniCards: MiniCardProps[]): MiniCardProps[] =>
  miniCards.sort((a: MiniCardProps, b: MiniCardProps): number => compare(a, b));

export const sortMiniCardPanelDetails = (
  miniCardPanelDetails: IMiniCardPanelDetail[]
): IMiniCardPanelDetail[] =>
  miniCardPanelDetails.sort(
    (a: IMiniCardPanelDetail, b: IMiniCardPanelDetail): number => compare(a, b)
  );
