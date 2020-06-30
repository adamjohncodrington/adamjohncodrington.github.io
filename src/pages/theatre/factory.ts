import { ACTORS, FRIENDS, PLAYS, THEATRE_VENUES as VENUES } from "@constants";
import {
  isInFuture,
  formatCountedListItems,
  itemIsFavourited,
  getActorCounts,
  getFriendTheatreCounts,
  getTheatreCounts,
  getPlayCounts
} from "@utils";

import { DATA } from "./data";

const FAVOURITES: Array<ITheatreCard> = DATA.ALL.filter(item => item.favourite);
const UP_NEXT: Array<ITheatreCard> = DATA.ALL.filter(theatreTrip =>
  isInFuture(theatreTrip.date)
);

const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(FRIENDS)
  .filter(({ theatre }: IFriend): boolean => !!theatre)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getFriendTheatreCounts({ friend, theatreCards: DATA.ALL })
    })
  );

const VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(VENUES).map(
  (theatre: ITheatreVenue): ICountedListItem => ({
    text: theatre.name,
    ...getTheatreCounts({
      theatre,
      theatreCards: DATA.ALL
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
    ...getPlayCounts({ play, theatreCards: DATA.ALL })
  })
);

const ACTORS_LIST_ITEMS: Array<ICountedListItem> = Object.values(ACTORS).map(
  (actor: IActor): ICountedListItem => ({
    text: actor.name,
    favourite: actor.favourite,
    ...getActorCounts({ actor, theatreCards: DATA.ALL })
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
