import { FRIENDS } from "@constants";
import { getItemCounts, getDatesText, isInFuture, getTripTitle } from "utils";

import { DATA } from "../data";

const getTripsMatchingFriend = (friend: IFriend): Array<ITripLeg> => {
  const tripsMatchingFriend: Array<ITripLeg> = [];
  const trips: Array<ITripLeg> = DATA.ALL_FLAT;
  trips.forEach((trip: ITripLeg): void => {
    if (trip.company.includes(friend)) tripsMatchingFriend.push(trip);
  });
  return tripsMatchingFriend;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const tripsMatchingFriend: Array<ITripLeg> = getTripsMatchingFriend(friend);
  return tripsMatchingFriend.map(
    (trip: ITripLeg, index: number): ICountedListItemDetail => {
      const { dates, video } = trip;
      return {
        index: tripsMatchingFriend.length > 1 ? index + 1 : undefined,
        mainText: [getTripTitle(trip)],
        dateText: getDatesText(dates),
        video,
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
      ...getItemCounts({ item: { friend }, data: { trips: DATA.ALL_FLAT } }),
      details: getFriendDetails(friend)
    })
  );
