import { moveTheSuffixToPrefix } from "./basic";

interface IFormatCLIOptions {
  isLeaderboard: boolean;
}

export const formatCountedListItems = (
  countedListItems: Array<ICountedListItem>,
  options?: IFormatCLIOptions
): Array<ICountedListItem> => {
  const isLeaderboard: boolean = !!(options && options.isLeaderboard);

  const reduced = countedListItems.reduce(
    (newArray: Array<ICountedListItem>, current: ICountedListItem) => {
      const duplicate = newArray.find(
        (item: ICountedListItem): boolean => item.text === current.text
      );
      return duplicate ? newArray : [...newArray, current];
    },
    []
  );

  const filtered: Array<ICountedListItem> = reduced.filter(
    ({
      futureCount,
      pastCount,
      countInfoIrrelevant
    }: ICountedListItem): boolean =>
      countInfoIrrelevant || futureCount !== 0 || pastCount !== 0
  );

  const sorted: Array<ICountedListItem> = filtered.sort(
    (a: ICountedListItem, b: ICountedListItem): number =>
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

  const translated: Array<ICountedListItem> = sorted.map(
    (countedListItem: ICountedListItem): ICountedListItem => ({
      ...countedListItem,
      text: moveTheSuffixToPrefix(countedListItem.text)
    })
  );

  const mapped: Array<ICountedListItem> = translated.map(
    (countedListItem: ICountedListItem): ICountedListItem =>
      isLeaderboard
        ? { ...countedListItem, isLeaderboardItem: true }
        : countedListItem
  );

  const detailSorted: Array<ICountedListItem> = mapped.map(
    ({ details, ...rest }: ICountedListItem): ICountedListItem => ({
      ...rest,
      details: details
        ? details.sort(
            (a: ICountedListItemDetail, b: ICountedListItemDetail): number =>
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
