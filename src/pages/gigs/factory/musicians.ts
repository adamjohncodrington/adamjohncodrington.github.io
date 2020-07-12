import { MUSICIANS } from "@constants";
import { getItemCounts, getDatesText, isInFuture } from "utils";

import { DATA } from "../data";

import { FAVOURITES } from "./favourites";

interface IMusicianIsFavourited {
  musician: IMusician;
  favouritedGigCards: Array<IGigCard>;
}

const musicianHasFavouritedGig = ({
  musician,
  favouritedGigCards
}: IMusicianIsFavourited): boolean => {
  let itemIsFavourited: boolean = false;
  favouritedGigCards.forEach(({ headline }: IGigCard) => {
    if (headline && headline.name === musician.name) itemIsFavourited = true;
  });
  return itemIsFavourited;
};

const musicians: Array<IMusician> = Object.values(MUSICIANS);

export const musiciansCounted: Array<IMusicianCounted> = musicians.map(
  (musician: IMusician): IMusicianCounted => ({
    ...musician,
    ...getItemCounts({ item: { musician }, data: { gigCards: DATA.ALL } })
  })
);

const getMusicianGigs = (musician: IMusician): Array<IGigCard> => {
  const musicianGigs: Array<IGigCard> = [];
  const allGigs: Array<IGigCard> = DATA.ALL;
  allGigs.forEach((gig: IGigCard): void => {
    const { headline, support, lineup } = gig;
    // console.log("-------------");
    // console.log(musician);
    // console.log(headline);
    // console.log(support);
    // console.log(lineup);
    if (
      headline === musician ||
      (support && support.includes(musician)) ||
      (lineup && lineup.includes(musician))
    ) {
      musicianGigs.push(gig);
    }
  });
  return musicianGigs;
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
      ...getItemCounts({ item: { musician }, data: { gigCards: DATA.ALL } }),

      noLongerExists,
      details: getMusicianGigs(musician).map(
        (
          { dates, venue }: IGigCard,
          index: number
        ): ICountedListItemDetail => ({
          index,
          mainText: venue.name,
          dateText: getDatesText(dates),
          isInFuture: isInFuture(dates[0])
        })
      )
    };
  }
);
