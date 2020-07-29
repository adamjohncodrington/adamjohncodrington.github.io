export const formatMiniCards = (
  miniCards: Array<IMiniCard>
): Array<IMiniCard> => {
  const filtered: Array<IMiniCard> = miniCards.filter(
    ({ futureCount, pastCount, countInfoIrrelevant }: IMiniCard): boolean =>
      countInfoIrrelevant || futureCount !== 0 || pastCount !== 0
  );

  return filtered;
};
