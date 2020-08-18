export const filterMiniCards = (miniCards: IMiniCard[]): IMiniCard[] => {
  const filtered: IMiniCard[] = miniCards.filter(
    ({
      primaryCount,
      secondaryCount,
      countInfoIrrelevant
    }: IMiniCard): boolean =>
      countInfoIrrelevant ||
      (!!primaryCount && primaryCount !== 0) ||
      (!!secondaryCount && secondaryCount !== 0)
  );
  return filtered;
};

export const splitCardsIntoYears = (cards: ICard[]): ICard[][] => {
  let arrayIndex: number = 0;
  let arrayYear: number = cards[0].year;

  const years: ICard[][] = [];

  cards.forEach((card: ICard): void => {
    const { year } = card;
    if (year !== arrayYear) {
      arrayIndex += 1;
      arrayYear = year;
    }
    if (!years[arrayIndex]) years[arrayIndex] = [];
    years[arrayIndex].push(card);
  });

  return years;
};
