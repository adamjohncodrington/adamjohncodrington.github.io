import { MUSICIANS } from "@constants";
import { getItemCounts } from "@utils";

import { DATA } from "../data";

import { FAVOURITES } from "./favourites";

interface IMusicianIsFavourited {
  musician: IMusician;
  favouritedData: Array<IGigCard>;
}

const musicianHasFavouritedGig = ({
  musician,
  favouritedData
}: IMusicianIsFavourited): boolean => {
  let itemIsFavourited: boolean = false;

  favouritedData.forEach(({ headline }: IGigCard) => {
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
      musicianHasFavouritedGig({ musician, favouritedData: FAVOURITES }) ||
      musician.favourite,
    pastCount: musician.pastCount,
    futureCount: musician.futureCount,
    noLongerExists: musician.noLongerExists
  })
);
