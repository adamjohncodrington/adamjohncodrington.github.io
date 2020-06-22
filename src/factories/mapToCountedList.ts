import { PAGE_SECTIONS } from "CONSTANTS";
import { formatNames, getPageSectionItemCounts, itemIsFavourited } from "utils";

interface IMapToCountedList {
  items: Object;
  pageSectionTitle: IPageSectionDetails;
  filter: IFilter;
  allData: Array<any>;
  favouritedData: Array<any>;
  bucketListMode: boolean;
}

export const mapToCountedList = ({
  items,
  pageSectionTitle,
  filter,
  allData,
  favouritedData,
  bucketListMode
}: IMapToCountedList): Array<ICountedListItem> => {
  const mapToListEntry = (item: any): ICountedListItem => {
    const { pastCount, futureCount } = getPageSectionItemCounts({
      itemToCount: item,
      data: allData
    });

    return {
      text: formatNames(item),
      ignoreCountInfo: item.insignificant || bucketListMode,
      pastCount,
      futureCount,
      favourite:
        item.favourite ||
        itemIsFavourited({
          itemToInspect: item,
          pageSectionTitle,
          favouritedData
        }),
      star: item.capital
    };
  };

  const data: Array<any> = Object.values(items)
    .filter(item => (filter ? item[filter] : true))
    .sort((a, b) =>
      (a.name ? a.name : a)
        .toLowerCase()
        .localeCompare((b.name ? b.name : b).toLowerCase())
    )
    .map(item => mapToListEntry(item))
    .filter(({ futureCount, pastCount }) =>
      bucketListMode ? futureCount === 0 && pastCount === 0 : true
    )
    // DO NOT INCLUDE VENUES I'VE NEVER GONE TO ON THE WEBSITE, e.g. "Lafayette" venu
    .filter(
      ({ futureCount, ignoreCountInfo, pastCount }) =>
        ignoreCountInfo || futureCount !== 0 || pastCount !== 0
    );

  return pageSectionTitle === PAGE_SECTIONS.FRIEND
    ? data
        .sort((a, b) => (a.futureCount > b.futureCount ? -1 : 1))
        .sort((a, b) => (a.pastCount > b.pastCount ? -1 : 1))
    : data;
};
