import { moveTheSuffixToPrefix } from "./basic";

interface IFormatCountedListItems {
  countedListItems: Array<ICountedListItem>;
  isLeaderboard?: boolean;
}

export const formatCountedListItems = ({
  countedListItems,
  isLeaderboard
}: IFormatCountedListItems): Array<ICountedListItem> => {
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
        : a.text.toLowerCase().localeCompare(b.text.toLowerCase())
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
