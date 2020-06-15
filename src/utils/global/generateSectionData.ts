import { PAGE_SECTION_TYPES } from "../../constants";

import {
  isInFuture,
  formatData,
  getPageSectionItemCounts,
  itemIsFavourited
} from "../local";

interface IGenerateSectionData {
  items: any;
  pageSectionType: IPageSectionType;
  filter: any;
  allData: any;
  favouritedData: any;
  upcomingMode: boolean;
  bucketListMode: boolean;
}

export const generateSectionData = ({
  items,
  pageSectionType,
  filter,
  allData,
  favouritedData,
  upcomingMode,
  bucketListMode
}: IGenerateSectionData) => {
  //@ts-ignore
  if (upcomingMode) return allData.filter(item => isInFuture(item.dates));

  //@ts-ignore
  const mapToListEntry = item => {
    const { pastCount, futureCount } = getPageSectionItemCounts({
      itemToCount: item,
      pageSectionType,
      data: allData
    });

    return {
      listEntry: formatData(item),
      ignoreCountInfo: item.insignificant || bucketListMode,
      pastCount,
      futureCount,
      favourite:
        item.favourite ||
        itemIsFavourited({
          itemToInspect: item,
          pageSectionType,
          favouritedData
        }),
      star: item.capital
    };
  };

  const data = Object.values(items)
    //@ts-ignore
    .filter(item => (filter ? item[filter] : true))
    .sort((a, b) =>
      //@ts-ignore
      (a.name ? a.name : a)
        .toLowerCase()
        //@ts-ignore
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

  return pageSectionType === PAGE_SECTION_TYPES.FRIEND
    ? data
        .sort((a, b) => (a.futureCount > b.futureCount ? -1 : 1))
        .sort((a, b) => (a.pastCount > b.pastCount ? -1 : 1))
    : data;
};
