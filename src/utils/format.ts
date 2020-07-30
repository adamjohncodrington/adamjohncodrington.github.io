export const filterMiniCards = (
  miniCards: Array<IMiniCard>
): Array<IMiniCard> => {
  const filtered: Array<IMiniCard> = miniCards.filter(
    ({
      primaryCount,
      secondaryCount,
      countInfoIrrelevant
    }: IMiniCard): boolean =>
      countInfoIrrelevant || secondaryCount !== 0 || primaryCount !== 0
  );
  return filtered;
};
