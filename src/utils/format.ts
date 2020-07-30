export const filterMiniCards = (
  miniCards: Array<IMiniCard>
): Array<IMiniCard> => {
  const filtered: Array<IMiniCard> = miniCards.filter(
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
