import { moveTheSuffixToPrefix } from "./basic";

interface IFormatCLIOptions {
  isLeaderboard: boolean;
}

export const formatBasicListItems = (
  basicListItems: Array<IBasicListItem>,
  options?: IFormatCLIOptions
): Array<IBasicListItem> => {
  const isLeaderboard: boolean = !!(options && options.isLeaderboard);

  const reduced = basicListItems.reduce(
    (newArray: Array<IBasicListItem>, current: IBasicListItem) => {
      const duplicate = newArray.find(
        (item: IBasicListItem): boolean => item.text === current.text
      );
      return duplicate ? newArray : [...newArray, current];
    },
    []
  );

  const filtered: Array<IBasicListItem> = reduced.filter(
    ({
      futureCount,
      pastCount,
      countInfoIrrelevant
    }: IBasicListItem): boolean =>
      countInfoIrrelevant || futureCount !== 0 || pastCount !== 0
  );

  const sorted: Array<IBasicListItem> = filtered.sort(
    (a: IBasicListItem, b: IBasicListItem): number =>
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

  const translated: Array<IBasicListItem> = sorted.map(
    (basicListItem: IBasicListItem): IBasicListItem => ({
      ...basicListItem,
      text: moveTheSuffixToPrefix(basicListItem.text)
    })
  );

  const mapped: Array<IBasicListItem> = translated.map(
    (basicListItem: IBasicListItem): IBasicListItem =>
      isLeaderboard
        ? { ...basicListItem, isLeaderboardItem: true }
        : basicListItem
  );

  const detailSorted: Array<IBasicListItem> = mapped.map(
    ({ details, ...rest }: IBasicListItem): IBasicListItem => ({
      ...rest,
      details: details
        ? details.sort(
            (a: IBasicListItemDetail, b: IBasicListItemDetail): number =>
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
