import { FRIENDS } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

const getTripsWithFriend = (friend: IFriend): Array<ITravelCard> => {
  const tripsWithFriend: Array<ITravelCard> = [];
  const allTrips: Array<ITravelCard> = DATA.ALL;
  allTrips.forEach((trip: ITravelCard): void => {
    if (trip.company.includes(friend)) tripsWithFriend.push(trip);
  });
  return tripsWithFriend;
};

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FRIENDS
)
  .filter(({ travel }: IFriend): boolean => !!travel)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { travelCards: DATA.ALL } }),
      details: { travelCards: getTripsWithFriend(friend) }
    })
  );
