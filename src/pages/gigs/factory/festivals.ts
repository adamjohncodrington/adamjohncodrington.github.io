import { FESTIVALS } from "@constants";
import { getItemCounts, isInFuture, getDatesText, getGigSubtitle } from "utils";

import * as DATA from "../data";

const getGigsMatchingFestival = (festival: IFestival): Array<IGig> => {
  const gigsMatchingFestival: Array<IGig> = [];
  const gigs: Array<IGig> = DATA.ARRAY;
  gigs.forEach((gig: IGig): void => {
    if (festival === gig.festival) {
      gigsMatchingFestival.push(gig);
    }
  });
  return gigsMatchingFestival;
};

const getFestivalDetails = (
  musician: IMusician
): Array<ICountedListItemDetail> => {
  const gigsMatchingFestival: Array<IGig> = getGigsMatchingFestival(musician);
  return gigsMatchingFestival.map(
    (gig: IGig, index: number): ICountedListItemDetail => {
      const { dates, video } = gig;
      return {
        index: gigsMatchingFestival.length > 1 ? index + 1 : undefined,
        mainText: [getGigSubtitle(gig) || "TBC"],
        dateText: getDatesText(dates),
        video,
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

export const FESTIVALS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FESTIVALS
)
  .filter(({ festival }: IFestival): boolean => !!festival)
  .map(
    (festival: IFestival): ICountedListItem => ({
      text: festival.name,
      ...getItemCounts({ item: { festival }, data: { gigs: DATA.ARRAY } }),
      details: getFestivalDetails(festival)
    })
  );
