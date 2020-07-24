import { moveTheSuffixToPrefix } from "./basic";

interface IFormatCLIOptions {
  isLeaderboard: boolean;
}

///TODO: sort child details here

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

  const detailSortedCountedListItems: Array<ICountedListItem> = mappedCountedListItems.map(
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

  return detailSortedCountedListItems;
};

export const formatVinyls = (
  vinyls: Array<IVinylPostPurchase>
): Array<IVinylPostPurchase> => {
  const sorted: Array<IVinylPostPurchase> = vinyls.sort(
    (a: IVinylPostPurchase, b: IVinylPostPurchase): number =>
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
