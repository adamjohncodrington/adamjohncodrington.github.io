import { FRIENDS as friends } from "@constants";
import { TRAVEL as DATA } from "data";
import { getItemCounts, getTripTitle } from "utils";

const getTripsMatchingFriend = (friend: IFriend): Array<ITripLeg> => {
  const tripsMatchingFriend: Array<ITripLeg> = [];
  const trips: Array<ITripLeg> = DATA.TRIP_LEGS;
  trips.forEach((trip: ITripLeg): void => {
    if (trip.company.includes(friend)) tripsMatchingFriend.push(trip);
  });
  return tripsMatchingFriend;
};

const getFriendDetails = (friend: IFriend): Array<IBasicListItemDetail> => {
  const tripsMatchingFriend: Array<ITripLeg> = getTripsMatchingFriend(friend);
  return tripsMatchingFriend.map(
    (trip: ITripLeg, index: number): IBasicListItemDetail => {
      const { dates, video } = trip;
      return {
        mainText: [getTripTitle(trip)],
        dates,
        video
      };
    }
  );
};

export const FRIENDS: Array<IBasicListItem> = Object.values(friends)
  .filter(({ travel }: IFriend): boolean => !!travel)
  .map(
    (friend: IFriend): IBasicListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { trips: DATA.TRIP_LEGS } }),
      details: getFriendDetails(friend)
    })
  );
