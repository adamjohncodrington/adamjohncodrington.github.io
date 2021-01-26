import { FRIENDS as friends } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import { getItemCounts, getTripTitle } from "utils";

const getTripsMatchingFriend = (friend: Friend): ITripLeg[] => {
  const tripsMatchingFriend: ITripLeg[] = [];
  const tripLegs: ITripLeg[] = DATA;
  tripLegs.forEach((trip: ITripLeg): void => {
    if (trip.company.includes(friend)) tripsMatchingFriend.push(trip);
  });
  return tripsMatchingFriend;
};

const getFriendDetails = (friend: Friend): IMiniCardPanelDetail[] => {
  const tripsMatchingFriend: ITripLeg[] = getTripsMatchingFriend(friend);
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

export const WITH: MiniCardProps[] = Object.values(friends)
  .filter(({ travel }: Friend): boolean => !!travel)
  .map(
    (friend: Friend): MiniCardProps => {
      const { name } = friend;
      const {
        pastCount: primaryCount,
        futureCount: secondaryCount
      } = getItemCounts({
        item: { friend },
        data: { tripLegs: DATA }
      });
      return {
        primaryText: name,
        sort: [-primaryCount, -secondaryCount],
        greaterCountPadding: true,
        primaryCount,
        secondaryCount,
        details: getFriendDetails(friend)
      };
    }
  );
