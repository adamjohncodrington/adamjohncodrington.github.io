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
