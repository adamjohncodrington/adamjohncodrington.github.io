import { moveTheSuffixToPrefix } from "./basic";

interface IFormatCountedListItems {
  countedListItems: Array<ICountedListItem>;
  isBucketList?: boolean;
  isLeaderboard?: boolean;
}

export const formatCountedListItems = ({
  countedListItems,
  isBucketList,
  isLeaderboard
}: IFormatCountedListItems): Array<ICountedListItem> => {
  const filteredCountedListItems: Array<ICountedListItem> = countedListItems.filter(
    ({
      futureCount,
      pastCount,
      countInfoIrrelevant,
      noLongerExists
    }: ICountedListItem): boolean =>
      isBucketList
        ? !noLongerExists
        : countInfoIrrelevant || futureCount !== 0 || pastCount !== 0
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

  const formattedCountedListItems: Array<ICountedListItem> = sortedCountedListItems.map(
    (countedListItem: ICountedListItem): ICountedListItem => ({
      ...countedListItem,
      text: moveTheSuffixToPrefix(countedListItem.text)
    })
  );

  const mappedCountedListItems: Array<ICountedListItem> = formattedCountedListItems.map(
    (countedListItem: ICountedListItem): ICountedListItem =>
      isLeaderboard
        ? {
            ...countedListItem,
            isLeaderboardItem: true
          }
        : isBucketList
        ? { ...countedListItem, countInfoIrrelevant: true }
        : countedListItem
  );

  return mappedCountedListItems;
};
