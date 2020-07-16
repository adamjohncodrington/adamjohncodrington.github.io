import { FESTIVALS } from "@constants";
import { getItemCounts, isInFuture, getDatesText, getGigSubtitle } from "utils";

import { DATA } from "../data";

const getGigsMatchingFestival = (festival: IFestival): Array<IGig> => {
  const gigsMatchingFestival: Array<IGig> = [];
  const gigs: Array<IGig> = DATA.ALL;
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
      const { dates, youtubeId } = gig;
      return {
        index: gigsMatchingFestival.length > 1 ? index + 1 : undefined,
        mainText: [getGigSubtitle(gig) || "TBC"],
        dateText: getDatesText(dates),
        youtubeId,
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
      ...getItemCounts({ item: { festival }, data: { gigs: DATA.ALL } }),
      details: getFestivalDetails(festival)
    })
  );
