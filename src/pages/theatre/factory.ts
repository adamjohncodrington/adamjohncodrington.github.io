import { ACTORS, FRIENDS, PLAYS, THEATRE_VENUES as VENUES } from "@constants";
import {
  isInFuture,
  getPageSectionItemCounts,
  formatCountedListItems,
  itemIsFavourited
} from "@utils";

import { DATA } from "./data";

const FAVOURITES: Array<ITheatreCard> = DATA.ALL.filter(item => item.favourite);
const UP_NEXT: Array<ITheatreCard> = DATA.ALL.filter(theatreTrip =>
  isInFuture(theatreTrip.dates)
);

const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(FRIENDS)
  .filter(({ theatre }: IFriend): boolean => !!theatre)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getPageSectionItemCounts({
        itemToCount: friend,
        dataToCompareAgainst: DATA.ALL
      })
    })
  );

const VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(VENUES).map(
  (venue: ITheatreVenue): ICountedListItem => ({
    text: venue.name,
    ...getPageSectionItemCounts({
      itemToCount: venue,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

const PLAYS_LIST_ITEMS: Array<ICountedListItem> = Object.values(PLAYS).map(
  (play: IPlay): ICountedListItem => ({
    text: play.name,
    favourite: itemIsFavourited({
      itemToInspect: play,
      favouritedData: FAVOURITES
    }),
    ...getPageSectionItemCounts({
      itemToCount: play,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

const ACTORS_LIST_ITEMS: Array<ICountedListItem> = Object.values(ACTORS).map(
  (actor: IActor): ICountedListItem => ({
    text: actor.name,
    favourite: actor.favourite,
    ...getPageSectionItemCounts({
      itemToCount: actor,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

export const FACTORY = {
  ACTORS: formatCountedListItems({ countedListItems: ACTORS_LIST_ITEMS }),
  FRIENDS: formatCountedListItems({
    countedListItems: FRIENDS_LIST_ITEMS,
    isLeaderboard: true
  }),
  PLAYS: formatCountedListItems({ countedListItems: PLAYS_LIST_ITEMS }),
  VENUES: formatCountedListItems({ countedListItems: VENUES_LIST_ITEMS }),
  UP_NEXT
};
