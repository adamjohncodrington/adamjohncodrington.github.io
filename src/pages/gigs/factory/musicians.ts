import { MUSICIANS } from "constant-objects";
import { getItemCounts } from "utils";

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

export const MUSICIANS_LIST_ITEMS: Array<ICountedListItem> = musiciansCounted.map(
  (musician: IMusicianCounted): ICountedListItem => ({
    text: musician.name,
    favourite:
      musicianHasFavouritedGig({ musician, favouritedGigCards: FAVOURITES }) ||
      musician.favourite,
    pastCount: musician.pastCount,
    futureCount: musician.futureCount,
    noLongerExists: musician.noLongerExists
  })
);
