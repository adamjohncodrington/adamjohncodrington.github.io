import { MUSICIANS } from "@constants";
import {
  getItemCounts,
  getDatesText,
  isInFuture,
  moveTheSuffixToPrefix
} from "utils";

import { DATA } from "../data";

import { FAVOURITES } from "./favourites";

interface IMusicianIsFavourited {
  musician: IMusician;
  favouritedGigCards: Array<IGig>;
}

const musicianHasFavouritedGig = ({
  musician,
  favouritedGigCards
}: IMusicianIsFavourited): boolean => {
  let itemIsFavourited: boolean = false;
  favouritedGigCards.forEach(({ headline }: IGig) => {
    if (headline && headline.name === musician.name) itemIsFavourited = true;
  });
  return itemIsFavourited;
};

const musicians: Array<IMusician> = Object.values(MUSICIANS);

export const musiciansCounted: Array<IMusicianCounted> = musicians.map(
  (musician: IMusician): IMusicianCounted => ({
    ...musician,
    ...getItemCounts({ item: { musician }, data: { gigs: DATA.ALL } })
  })
);

const getGigsMatchingMusician = (musician: IMusician): Array<IGig> => {
  const gigsMatchingMusician: Array<IGig> = [];
  const gigs: Array<IGig> = DATA.ALL;
  gigs.forEach((gig: IGig): void => {
    const { headline, support, lineup } = gig;
    if (
      headline === musician ||
      (support && support.includes(musician)) ||
      (lineup && lineup.includes(musician))
    ) {
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

export const MUSICIANS_LIST_ITEMS: Array<ICountedListItem> = musicians.map(
  (musician: IMusician): ICountedListItem => {
    const { name, favourite, noLongerExists } = musician;
    return {
      text: name,
      favourite:
        musicianHasFavouritedGig({
          musician,
          favouritedGigCards: FAVOURITES
        }) || favourite,
      ...getItemCounts({ item: { musician }, data: { gigs: DATA.ALL } }),
      noLongerExists,
      details: getMusicianDetails(musician)
    };
  }
);
