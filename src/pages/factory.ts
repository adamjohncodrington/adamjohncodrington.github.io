import {
  getPageSectionItemCounts,
  itemIsFavourited,
  moveTheSuffixToPrefix
} from "@utils";

//TODO: this file is a mess! Rewrite it.

interface IMapToCountedList {
  items: Object;
  filter: IFilter;
  allData: Array<any>;
  sortByPastAndFutureCount?: boolean;
  favouritedData: Array<any>;
  bucketListMode: boolean;
}

export const mapToCountedList = ({
  items,
  filter,
  allData,
  sortByPastAndFutureCount,
  favouritedData,
  bucketListMode
}: IMapToCountedList): Array<ICountedListItem> => {
  const formatNames = (inputData: any): string => {
    if (!Array.isArray(inputData))
      return inputData.name && moveTheSuffixToPrefix(inputData.name);

    const array = inputData.map(
      item => item.name && moveTheSuffixToPrefix(item.name)
    );

    let outputString: string = "";
    array.forEach(
      (name: string, index: number) =>
        (outputString += index === array.length - 1 ? name : `${name}, `)
    );
    return outputString;
  };

  const mapToCountedListItem = (item: any): ICountedListItem => {
    const { pastCount, futureCount } = getPageSectionItemCounts({
      itemToCount: item,
      data: allData
    });

    return {
      text: formatNames(item),
      countInfoIrrelevant: item.insignificant || bucketListMode,
      pastCount,
      doNotIncludeInList: item.passedAway,
      futureCount,
      favourite:
        item.favourite ||
        itemIsFavourited({
          itemToInspect: item,
          favouritedData
        }),
      star: item.capital
    };
  };

  const countedList: Array<ICountedListItem> = Object.values(items)
    .filter(item => (filter ? item[filter] : true))
    .sort((a, b) =>
      (a.name ? a.name : a)
        .toLowerCase()
        .localeCompare((b.name ? b.name : b).toLowerCase())
    )
    .map(item => mapToCountedListItem(item))
    .filter(item => !item.doNotIncludeInList)

    .filter(({ futureCount, pastCount }) =>
      bucketListMode ? futureCount === 0 && pastCount === 0 : true
    )
    // DO NOT INCLUDE VENUES I'VE NEVER GONE TO ON THE WEBSITE, e.g. "Lafayette" venu
    .filter(
      ({ futureCount, countInfoIrrelevant, pastCount }) =>
        countInfoIrrelevant || futureCount !== 0 || pastCount !== 0
    );

  if (sortByPastAndFutureCount) {
    countedList
      .sort((a, b) => (a.futureCount > b.futureCount ? -1 : 1))
      .sort((a, b) => (a.pastCount > b.pastCount ? -1 : 1));
  }

  return countedList;
};

interface IGeneratePropertyArrayFromObject {
  object: Object;
  childLevelProperty: string;
  topLevelProperty?: string;
}

export const generatePropertyArrayFromObject = ({
  object,
  childLevelProperty,
  topLevelProperty
}: IGeneratePropertyArrayFromObject) => {
  const array: Array<any> = Object.values(object);

  const arrayFilteredByTopLevelProperty: Array<any> = array.filter(
    item => topLevelProperty && item[topLevelProperty]
  );

  const arrayFilteredByChildLevelProperty: Array<any> = [].concat.apply(
    [],
    array
      .filter(item => item[childLevelProperty])
      .map(item => Object.values(item[childLevelProperty]))
  );

  return [
    ...arrayFilteredByTopLevelProperty,
    ...arrayFilteredByChildLevelProperty
  ];
};
