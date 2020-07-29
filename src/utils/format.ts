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

  const translated: Array<IMiniCard> = filtered.map(
    (miniCard: IMiniCard): IMiniCard => ({
      ...miniCard,
      text: moveTheSuffixToPrefix(miniCard.text)
    })
  );

  const mapped: Array<IMiniCard> = translated.map(
    (miniCard: IMiniCard): IMiniCard =>
      isLeaderboard ? { ...miniCard, isLeaderboardItem: true } : miniCard
  );

  // const detailSorted: Array<IMiniCard> = mapped.map(
  //   ({ details, ...rest }: IMiniCard): IMiniCard => ({
  //     ...rest,
  //     details: details
  //       ? details.sort(
  //           (a: IMiniCardPanelDetail, b: IMiniCardPanelDetail): number =>
  //             a.dates && b.dates && a.dates[0].valueOf() > b.dates[0].valueOf()
  //               ? 1
  //               : a.year && b.year && a.year > b.year
  //               ? 1
  //               : -1
  //         )
  //       : undefined
  //   })
  // );

  return mapped;
};
