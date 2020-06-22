import {
  PAGE_SECTION_TEMPLATES,
  PAGE_SECTION_DATA_TYPES,
  EVENT_CARD_TYPES
} from "@constants";
import {
  formatNames,
  getPageSectionItemCounts,
  itemIsFavourited,
  isInFuture
} from "utils";

interface IMapToCountedList {
  items: Object;
  id: IPageSectionDetails;
  filter: IFilter;
  allData: Array<any>;
  favouritedData: Array<any>;
  bucketListMode: boolean;
}

export const mapToCountedList = ({
  items,
  id,
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
          id,
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

  return id === PAGE_SECTION_TEMPLATES.FRIEND
    ? data
        .sort((a, b) => (a.futureCount > b.futureCount ? -1 : 1))
        .sort((a, b) => (a.pastCount > b.pastCount ? -1 : 1))
    : data;
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

interface IMapDataToEventCards {
  data: Array<any>;
  eventCardType: IEventCardType;
}

export const mapToEventCard = ({
  data,
  eventCardType
}: IMapDataToEventCards): Array<IEventCard> => {
  const mapDataToEventCard = ({
    title,
    subtitle,
    headline,
    festival,
    support,
    lineup,
    dates,
    venue,
    favourite,
    company,
    ticketType,
    play,
    cast,
    theatre
  }: any): IEventCard => ({
    //@ts-ignore
    title: formatNames(
      title
        ? title
        : eventCardType === EVENT_CARD_TYPES.GIG
        ? headline
          ? headline
          : festival
        : eventCardType === EVENT_CARD_TYPES.THEATRE
        ? play
        : null
    ),
    //@ts-ignore
    subtitle: formatNames(
      subtitle
        ? subtitle
        : eventCardType === EVENT_CARD_TYPES.GIG
        ? lineup
          ? lineup
          : support
        : eventCardType === EVENT_CARD_TYPES.THEATRE
        ? cast
        : null
    ),
    //@ts-ignore
    body: formatNames(
      eventCardType === EVENT_CARD_TYPES.GIG
        ? venue
        : eventCardType === EVENT_CARD_TYPES.THEATRE
        ? theatre
        : null
    ),
    dates,
    company: company.sort((a: IFriend, b: IFriend) =>
      a.initials > b.initials ? 1 : -1
    ),
    favourite,
    disclaimer:
      eventCardType === EVENT_CARD_TYPES.GIG && isInFuture(dates) && ticketType
  });

  return data.map((item: any) => mapDataToEventCard(item));
};

type SingleYearData = Array<IEventCardRawData>;
type IMapYearGroupsToSections = {
  years: Array<SingleYearData>;
  eventCardType: IEventCardType;
};

export const mapYearsToEventCardPageSections = ({
  years,
  eventCardType
}: IMapYearGroupsToSections): Array<IPageSection> => {
  const mapYearGroupToSection = (year: SingleYearData): IPageSection => {
    const title = year[0].dates[0].getFullYear().toString();

    return {
      details: { id: title, title, type: PAGE_SECTION_DATA_TYPES.EVENT_CARDS },
      showSectionLength: true,
      data: mapToEventCard({ data: year, eventCardType }).filter(
        (item: IEventCard) => !isInFuture(item.dates)
      )
    };
  };

  return years.map((year: SingleYearData) => mapYearGroupToSection(year));
};
