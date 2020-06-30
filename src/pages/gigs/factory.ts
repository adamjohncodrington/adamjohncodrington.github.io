import {
  MUSIC_VENUES as VENUES,
  FRIENDS,
  MUSICIANS,
  FESTIVALS
} from "@constants";
import {
  isInFuture,
  formatCountedListItems,
  itemIsFavourited,
  getMusicianCounts,
  getFestivalCounts,
  getMusicVenueCounts,
  getFriendGigCounts
} from "@utils";

import { DATA } from "./data";

const FAVOURITES: Array<IGigCard> = DATA.ALL.filter(
  ({ favourite }: IGigCard) => favourite
);

const UP_NEXT: Array<IGigCard> = DATA.ALL.filter(({ dates }: IGigCard) =>
  isInFuture(dates[0])
);

const totalGigsPastAndPresent: number = DATA.ALL.length;
const totalFutureGigs: number = UP_NEXT.length;
const totalGigsSoFar: number = totalGigsPastAndPresent - totalFutureGigs;

const FESTIVALS_LIST_ITEMS: Array<ICountedListItem> = Object.values(FESTIVALS)
  .filter(({ festival }: IFestival): boolean => !!festival)
  .map(
    (festival: IFestival): ICountedListItem => ({
      text: festival.name,
      ...getFestivalCounts({ festival, gigCards: DATA.ALL })
    })
  );

const VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(VENUES).map(
  (venue: IMusicVenue): ICountedListItem => ({
    text: venue.name,
    favourite: venue.favourite,
    ...getMusicVenueCounts({ musicVenue: venue, gigCards: DATA.ALL })
  })
);

const MUSICIANS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  MUSICIANS
).map(
  (musician: IMusician): ICountedListItem => ({
    text: musician.name,
    favourite:
      musician.favourite ||
      itemIsFavourited({
        itemToInspect: musician,
        favouritedData: FAVOURITES
      }),
    ...getMusicianCounts({ musician, gigCards: DATA.ALL }),
    noLongerExists: musician.noLongerExists
  })
);

const BUCKET_LIST_ITEMS: Array<ICountedListItem> = MUSICIANS_LIST_ITEMS.filter(
  ({ pastCount, futureCount }: ICountedListItem): boolean =>
    pastCount === 0 && futureCount === 0
);

const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(FRIENDS)
  .filter(({ gigs }: IFriend): boolean => !!gigs)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getFriendGigCounts({ friend, gigCards: DATA.ALL })
    })
  );

export const FACTORY = {
  pageCount: totalGigsSoFar,

  BUCKET_LIST: formatCountedListItems({
    countedListItems: BUCKET_LIST_ITEMS,
    isBucketList: true
  }),
  MUSICIANS: formatCountedListItems({ countedListItems: MUSICIANS_LIST_ITEMS }),
  FESTIVALS: formatCountedListItems({ countedListItems: FESTIVALS_LIST_ITEMS }),
  FRIENDS: formatCountedListItems({
    countedListItems: FRIENDS_LIST_ITEMS,
    isLeaderboard: true
  }),
  UP_NEXT,
  VENUES: formatCountedListItems({ countedListItems: VENUES_LIST_ITEMS })
};
