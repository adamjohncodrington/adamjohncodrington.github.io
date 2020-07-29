import { moveTheSuffixToPrefix } from "./basic";

interface IFormatCLIOptions {
  isLeaderboard: boolean;
}

export const formatMiniCards = (
  miniCards: Array<IMiniCard>,
  options?: IFormatCLIOptions
): Array<IMiniCard> => {
  const isLeaderboard: boolean = !!(options && options.isLeaderboard);

  const filtered: Array<IMiniCard> = miniCards.filter(
    ({ futureCount, pastCount, countInfoIrrelevant }: IMiniCard): boolean =>
      countInfoIrrelevant || futureCount !== 0 || pastCount !== 0
  );

  const sorted: Array<IMiniCard> = filtered.sort(
    (a: IMiniCard, b: IMiniCard): number =>
      isLeaderboard
        ? a.pastCount > b.pastCount
          ? -1
          : a.pastCount === b.pastCount && a.futureCount > b.futureCount
          ? -1
          : 1
        : a.text.toLowerCase() > b.text.toLowerCase()
        ? 1
        : a.text.toLowerCase() === b.text.toLowerCase() &&
          a.secondaryText &&
          b.secondaryText
        ? a.secondaryText > b.secondaryText
          ? 1
          : -1
        : -1
  );

  const translated: Array<IMiniCard> = sorted.map(
    (MiniCard: IMiniCard): IMiniCard => ({
      ...MiniCard,
      text: moveTheSuffixToPrefix(MiniCard.text)
    })
  );

  const mapped: Array<IMiniCard> = translated.map(
    (MiniCard: IMiniCard): IMiniCard =>
      isLeaderboard ? { ...MiniCard, isLeaderboardItem: true } : MiniCard
  );

  const detailSorted: Array<IMiniCard> = mapped.map(
    ({ details, ...rest }: IMiniCard): IMiniCard => ({
      ...rest,
      details: details
        ? details.sort((a: IMiniCardPanelItem, b: IMiniCardPanelItem): number =>
            a.dates && b.dates && a.dates[0].valueOf() > b.dates[0].valueOf()
              ? 1
              : a.year && b.year && a.year > b.year
              ? 1
              : -1
          )
        : undefined
    })
  );

  return detailSorted;
};
