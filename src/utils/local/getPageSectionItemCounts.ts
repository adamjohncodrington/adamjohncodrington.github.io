import { PAGE_SECTION_TYPES } from "../../constants";

import { isInFuture } from "./isInFuture";

interface ILookupFunction {
  pageSectionType: IPageSectionType;
  itemToCount: any;
  dataItem: any;
}
const musicianMatchExists = ({
  dataItem,
  itemToCount,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.MUSICIAN &&
  (dataItem.headline === itemToCount ||
    (dataItem.support && dataItem.support.includes(itemToCount)) ||
    (dataItem.lineup && dataItem.lineup.includes(itemToCount)));

const actorMatchExists = ({
  dataItem,
  itemToCount,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.ACTOR &&
  (dataItem.cast === itemToCount ||
    (Array.isArray(dataItem.cast) && dataItem.cast.includes(itemToCount)));

const playMatchExists = ({
  dataItem,
  itemToCount,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.PLAY && itemToCount === dataItem.play;

const friendMatchExists = ({
  dataItem,
  itemToCount,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.FRIEND &&
  (dataItem.company === itemToCount ||
    (Array.isArray(dataItem.company) &&
      dataItem.company.includes(itemToCount)));

const theatreVenueMatchExists = ({
  dataItem,
  itemToCount,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.THEATRE_VENUES &&
  itemToCount === dataItem.theatre;

const festivalMatchExists = ({
  dataItem,
  itemToCount,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.FESTIVAL &&
  itemToCount === dataItem.festival;

const musicVenueMatchExists = ({
  dataItem,
  itemToCount,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.MUSIC_VENUES &&
  itemToCount === dataItem.venue;

const locationMatchExists = ({
  dataItem,
  itemToCount,
  pageSectionType
}: ILookupFunction): boolean =>
  (pageSectionType === PAGE_SECTION_TYPES.COUNTRY ||
    pageSectionType === PAGE_SECTION_TYPES.CITY ||
    pageSectionType === PAGE_SECTION_TYPES.REGION ||
    pageSectionType === PAGE_SECTION_TYPES.ATTRACTION ||
    pageSectionType === PAGE_SECTION_TYPES.ISLAND ||
    pageSectionType === PAGE_SECTION_TYPES.TOWN) &&
  (dataItem.title.name === itemToCount ||
    (dataItem.subtitle && dataItem.subtitle.name === itemToCount) ||
    (dataItem.hidden &&
      (dataItem.hidden === itemToCount ||
        dataItem.hidden.name === itemToCount)) ||
    (Array.isArray(dataItem.title) &&
      dataItem.title
        .map((country: ICountry) => country.name)
        .includes(itemToCount)) ||
    (Array.isArray(dataItem.subtitle) &&
      dataItem.subtitle
        .map((country: ICountry) => country.name)
        .includes(itemToCount)) ||
    (Array.isArray(dataItem.hidden) &&
      dataItem.hidden
        .map((country: ICountry) => country.name)
        .includes(itemToCount)));

interface IGetPageSectionItemCounts {
  itemToCount: any;
  pageSectionType: IPageSectionType;
  data: any;
}

export const getPageSectionItemCounts = ({
  itemToCount,
  pageSectionType,
  data
}: IGetPageSectionItemCounts) => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  data.map((dataItem: any) => {
    const params: ILookupFunction = { pageSectionType, dataItem, itemToCount };

    if (
      musicianMatchExists(params) ||
      festivalMatchExists(params) ||
      friendMatchExists(params) ||
      musicVenueMatchExists(params) ||
      playMatchExists(params) ||
      locationMatchExists(params) ||
      theatreVenueMatchExists(params) ||
      actorMatchExists(params)
    ) {
      if (isInFuture(dataItem.dates)) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { futureCount, pastCount };
};
