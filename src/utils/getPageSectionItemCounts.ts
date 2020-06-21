import { PAGE_SECTIONS } from "../constants";

import { isInFuture } from "./isInFuture";

type UnknownTypeDataItem = any;
type IItemToMatch = any;

interface ILookupFunction {
  dataItem: UnknownTypeDataItem;
  pageSectionTitle: IPageSectionDetails;
  itemToMatch: IItemToMatch;
}

interface IGetPageSectionItemCounts {
  itemToCount: any;
  pageSectionTitle: IPageSectionDetails;
  data: Array<UnknownTypeDataItem>;
}

const musicianMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionTitle
}: ILookupFunction): boolean =>
  pageSectionTitle === PAGE_SECTIONS.MUSICIAN &&
  (dataItem.headline === itemToMatch ||
    (dataItem.support && dataItem.support.includes(itemToMatch)) ||
    (dataItem.lineup && dataItem.lineup.includes(itemToMatch)));

const actorMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionTitle
}: ILookupFunction): boolean =>
  pageSectionTitle === PAGE_SECTIONS.ACTOR &&
  dataItem.cast &&
  dataItem.cast.includes(itemToMatch);

const playMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionTitle
}: ILookupFunction): boolean =>
  pageSectionTitle === PAGE_SECTIONS.PLAY && dataItem.play === itemToMatch;

const friendMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionTitle
}: ILookupFunction): boolean =>
  pageSectionTitle === PAGE_SECTIONS.FRIEND &&
  dataItem.company &&
  dataItem.company.includes(itemToMatch);

const theatreVenueMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionTitle
}: ILookupFunction): boolean =>
  pageSectionTitle === PAGE_SECTIONS.THEATRE_VENUES &&
  dataItem.theatre === itemToMatch;

const festivalMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionTitle
}: ILookupFunction): boolean =>
  pageSectionTitle === PAGE_SECTIONS.FESTIVAL &&
  dataItem.festival === itemToMatch;

const musicVenueMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionTitle
}: ILookupFunction): boolean =>
  pageSectionTitle === PAGE_SECTIONS.MUSIC_VENUES &&
  dataItem.venue === itemToMatch;

const countryCityTownMatchExists = ({
  dataItem,
  itemToMatch,
  pageSectionTitle
}: ILookupFunction): boolean =>
  (pageSectionTitle === PAGE_SECTIONS.COUNTRY ||
    pageSectionTitle === PAGE_SECTIONS.ATTRACTION ||
    pageSectionTitle === PAGE_SECTIONS.REGION ||
    pageSectionTitle === PAGE_SECTIONS.TOWN ||
    pageSectionTitle === PAGE_SECTIONS.ISLAND ||
    pageSectionTitle === PAGE_SECTIONS.CITY) &&
  ((dataItem.title && dataItem.title.includes(itemToMatch)) ||
    (dataItem.hidden && dataItem.hidden.includes(itemToMatch)) ||
    (dataItem.subtitle && dataItem.subtitle.includes(itemToMatch)));

export const getPageSectionItemCounts = ({
  itemToCount,
  pageSectionTitle,
  data
}: IGetPageSectionItemCounts) => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  data.forEach((dataItem: UnknownTypeDataItem) => {
    const params: ILookupFunction = {
      pageSectionTitle,
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
  });

  return { futureCount, pastCount };
};
