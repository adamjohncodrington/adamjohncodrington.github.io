export const filterMiniCards = (
  miniCards: MiniCardProps[]
): MiniCardProps[] => {
  const filtered: MiniCardProps[] = miniCards.filter(
    ({
      primaryCount,
      secondaryCount,
      countInfoIrrelevant
    }: MiniCardProps): boolean =>
      countInfoIrrelevant ||
      (!!primaryCount && primaryCount !== 0) ||
      (!!secondaryCount && secondaryCount !== 0)
  );
  return filtered;
};

export const splitCardsIntoYears = (cards: CardProps[]): CardProps[][] => {
  let arrayIndex: number = 0;
  let arrayYear: number = cards[0].year;

  const years: CardProps[][] = [];

  cards.forEach((card: CardProps): void => {
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
