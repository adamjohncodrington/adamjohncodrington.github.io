import { FRIENDS } from "@constants";
import { getItemCounts, getDatesText, isInFuture, getTripTitle } from "utils";

import { DATA } from "../data";

const getTripsMatchingFriend = (friend: IFriend): Array<ITrip> => {
  const tripsMatchingFriend: Array<ITrip> = [];
  const trips: Array<ITrip> = DATA.ALL;
  trips.forEach((trip: ITrip): void => {
    if (trip.company.includes(friend)) tripsMatchingFriend.push(trip);
  });
  return tripsMatchingFriend;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const tripsMatchingFriend: Array<ITrip> = getTripsMatchingFriend(friend);
  return tripsMatchingFriend.map(
    (trip: ITrip, index: number): ICountedListItemDetail => {
      const { dates, youtubeId } = trip;
      return {
        index: tripsMatchingFriend.length > 1 ? index + 1 : undefined,
        mainText: [getTripTitle(trip)],
        dateText: getDatesText(dates),
        youtubeId,
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FRIENDS
)
  .filter(({ travel }: IFriend): boolean => !!travel)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { trips: DATA.ALL } }),
      details: getFriendDetails(friend)
    })
  );
