import { FRIENDS as friends } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import { getItemCounts, getTripTitle } from "utils";

const getTripsMatchingFriend = (friend: IFriend): Array<ITripLeg> => {
  const tripsMatchingFriend: Array<ITripLeg> = [];
  const tripLegs: Array<ITripLeg> = DATA;
  tripLegs.forEach((trip: ITripLeg): void => {
    if (trip.company.includes(friend)) tripsMatchingFriend.push(trip);
  });
  return tripsMatchingFriend;
};

const getFriendDetails = (friend: IFriend): Array<IMiniCardPanelDetail> => {
  const tripsMatchingFriend: Array<ITripLeg> = getTripsMatchingFriend(friend);
  return tripsMatchingFriend.map(
    (trip: ITripLeg): IMiniCardPanelDetail => {
      const { dates, video } = trip;
      return {
        sort: [dates[0].valueOf()],
        mainText: [getTripTitle(trip)],
        dates,
        video
      };
    }
  );
};

export const FRIENDS: Array<IMiniCard> = Object.values(friends)
  .filter(({ travel }: IFriend): boolean => !!travel)
  .map(
    (friend: IFriend): IMiniCard => {
      const { name } = friend;
      const { pastCount, futureCount } = getItemCounts({
        item: { friend },
        data: { tripLegs: DATA }
      });
      return {
        text: name,
        sort: [-pastCount, -futureCount],
        pastCount,
        futureCount,
        details: getFriendDetails(friend)
      };
    }
  );
