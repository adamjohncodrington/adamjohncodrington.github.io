import { moveTheSuffixToPrefix } from "./basic";

interface IFormatCLIOptions {
  isLeaderboard: boolean;
}

export const formatCountedListItems = (
  countedListItems: Array<ICountedListItem>,
  options?: IFormatCLIOptions
): Array<ICountedListItem> => {
  const isLeaderboard: boolean = !!(options && options.isLeaderboard);

  const filteredCountedListItems: Array<ICountedListItem> = countedListItems.filter(
    ({
      futureCount,
      pastCount,
      countInfoIrrelevant
    }: ICountedListItem): boolean =>
      countInfoIrrelevant || futureCount !== 0 || pastCount !== 0
  );

  const sortedCountedListItems: Array<ICountedListItem> = filteredCountedListItems.sort(
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

  const translatedCountedListItems: Array<ICountedListItem> = sortedCountedListItems.map(
    (countedListItem: ICountedListItem): ICountedListItem => ({
      ...countedListItem,
      text: moveTheSuffixToPrefix(countedListItem.text)
    })
  );

  const mappedCountedListItems: Array<ICountedListItem> = translatedCountedListItems.map(
    (countedListItem: ICountedListItem): ICountedListItem =>
      isLeaderboard
        ? {
            ...countedListItem,
            isLeaderboardItem: true
          }
        : countedListItem
  );

  return mappedCountedListItems;
};

export const formatVinyls = (vinyls: Array<IVinyl>): Array<IVinyl> => {
  const sortedVinyls: Array<IVinyl> = vinyls.sort(
    (a: IVinyl, b: IVinyl): number => (a.title < b.title ? 1 : -1)
  );
  return sortedVinyls;
};
