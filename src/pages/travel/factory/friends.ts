import { FRIENDS } from "@constants";
import { getItemCounts, getDatesText, isInFuture, getTripTitle } from "utils";

import { DATA } from "../data";

const getTripsWithFriend = (friend: IFriend): Array<ITrip> => {
  const tripsWithFriend: Array<ITrip> = [];
  const allTrips: Array<ITrip> = DATA.ALL;
  allTrips.forEach((trip: ITrip): void => {
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
      ...getItemCounts({ item: { friend }, data: { trips: DATA.ALL } }),
      details: getTripsWithFriend(friend).map(
        (trip: ITrip, index: number): ICountedListItemDetail => {
          const { dates } = trip;
          return {
            index,
            mainText: getTripTitle(trip),
            dateText: getDatesText(dates),
            isInFuture: isInFuture(dates[0])
          };
        }
      )
    })
  );
