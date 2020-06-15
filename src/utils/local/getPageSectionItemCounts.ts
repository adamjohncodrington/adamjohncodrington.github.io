import { PAGE_SECTION_TYPES } from "../../constants";

import { isInFuture } from "./isInFuture";

interface ILookupFunction {
  dataItem: any;
  pageSectionType: IPageSectionType;
  itemToMatch: any;
}
const musicianMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.MUSICIAN &&
  (dataItem.headline === itemToMatch ||
    (dataItem.support && dataItem.support.includes(itemToMatch)) ||
    (dataItem.lineup && dataItem.lineup.includes(itemToMatch)));

const actorMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.ACTOR &&
  dataItem.cast &&
  dataItem.cast.includes(itemToMatch);

const playMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.PLAY && dataItem.play === itemToMatch;

const friendMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.FRIEND &&
  dataItem.company &&
  dataItem.company.includes(itemToMatch);

const theatreVenueMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.THEATRE_VENUES &&
  dataItem.theatre === itemToMatch;

const festivalMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.FESTIVAL &&
  dataItem.festival === itemToMatch;

const musicVenueMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionType
}: ILookupFunction): boolean =>
  pageSectionType === PAGE_SECTION_TYPES.MUSIC_VENUES &&
  dataItem.venue === itemToMatch;

const countryCityTownMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionType
}: ILookupFunction): boolean =>
  (pageSectionType === PAGE_SECTION_TYPES.COUNTRY ||
    pageSectionType === PAGE_SECTION_TYPES.ATTRACTION ||
    pageSectionType === PAGE_SECTION_TYPES.REGION ||
    pageSectionType === PAGE_SECTION_TYPES.TOWN ||
    pageSectionType === PAGE_SECTION_TYPES.ISLAND ||
    pageSectionType === PAGE_SECTION_TYPES.CITY) &&
  ((dataItem.title && dataItem.title.includes(itemToMatch)) ||
    (dataItem.hidden && dataItem.hidden.includes(itemToMatch)) ||
    (dataItem.subtitle && dataItem.subtitle.includes(itemToMatch)));

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
    const params: ILookupFunction = {
      pageSectionType,
      dataItem,
      itemToMatch: itemToCount
    };

    if (
      musicianMatchExists(params) ||
      festivalMatchExists(params) ||
      friendMatchExists(params) ||
      musicVenueMatchExists(params) ||
      playMatchExists(params) ||
      theatreVenueMatchExists(params) ||
      countryCityTownMatchExists(params) ||
      actorMatchExists(params)
    ) {
      if (isInFuture(dataItem.dates)) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }

    return null;
  });

  return { futureCount, pastCount };
};
