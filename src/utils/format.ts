import { moveTheSuffixToPrefix } from "./basic";

interface IFormatCLIOptions {
  isLeaderboard: boolean;
}

export const formatMiniCards = (
  miniCards: Array<IMiniCard>,
  options?: IFormatCLIOptions
): Array<IMiniCard> => {
  const isLeaderboard: boolean = !!(options && options.isLeaderboard);

  const reduced = miniCards.reduce(
    (newArray: Array<IMiniCard>, current: IMiniCard) => {
      const duplicate = newArray.find(
        (item: IMiniCard): boolean => item.text === current.text
      );
      return duplicate ? newArray : [...newArray, current];
    },
    []
  );

  const filtered: Array<IMiniCard> = reduced.filter(
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
        ? details.sort((a: IMiniCardDetail, b: IMiniCardDetail): number =>
            a.dates[0].valueOf() > b.dates[0].valueOf() ? 1 : -1
          )
        : undefined
    })
  );

  return detailSorted;
};

export const formatVinyls = (vinyls: Array<IVinyl>): Array<IVinyl> => {
  const sorted: Array<IVinyl> = vinyls.sort((a: IVinyl, b: IVinyl): number =>
    a.title < b.title ? 1 : -1
  );
  return sorted;
};

export const formatVideoCards = (
  videoCards: Array<IVideoCard>
): Array<IVideoCard> => {
  const sorted: Array<IVideoCard> = videoCards.sort(
    (a: IVideoCard, b: IVideoCard): number =>
      a.title > b.title
        ? 1
        : a.title === b.title
        ? a.dates[0].valueOf() > b.dates[0].valueOf()
          ? 1
          : 0
        : -1
  );
  return sorted;
};
