import { MUSICIANS } from "@constants";
import {
  getItemCounts,
  getDatesText,
  isInFuture,
  moveTheSuffixToPrefix,
  musicianMatchExists
} from "utils";

import { DATA } from "../data";

const getGigsMatchingMusician = (musician: IMusician): Array<IGig> => {
  const gigsMatchingMusician: Array<IGig> = [];
  const gigs: Array<IGig> = DATA.ALL;
  gigs.forEach((gig: IGig): void => {
    if (musicianMatchExists(musician, gig)) {
      gigsMatchingMusician.push(gig);
    }
  });
  return gigsMatchingMusician;
};

const getMusicianDetails = (
  musician: IMusician
): Array<ICountedListItemDetail> => {
  const gigsMatchingMusician: Array<IGig> = getGigsMatchingMusician(musician);
  return gigsMatchingMusician.map(
    (
      { dates, festival, venue }: IGig,
      index: number
    ): ICountedListItemDetail => ({
      index: gigsMatchingMusician.length > 1 ? index + 1 : undefined,
      mainText: festival ? festival.name : moveTheSuffixToPrefix(venue.name),
      dateText: getDatesText(dates),
      isInFuture: isInFuture(dates[0])
    })
  );
};

export const MUSICIANS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  MUSICIANS
).map(
  (musician: IMusician): ICountedListItem => {
    const { name, favourite, noLongerExists } = musician;
    return {
      text: name,
      favourite,
      ...getItemCounts({ item: { musician }, data: { gigs: DATA.ALL } }),
      noLongerExists,
      details: getMusicianDetails(musician)
    };
  }
);
