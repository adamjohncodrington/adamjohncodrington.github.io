import { FRIENDS } from "@constants";
import {
  getItemCounts,
  getTheatreVisitTitle,
  getDateText,
  isInFuture
} from "utils";

import { DATA } from "../data";

const getTheatreTripsWithFriend = (friend: IFriend): Array<ITheatreVisit> => {
  const theatreTripsWithFriend: Array<ITheatreVisit> = [];
  const allTheatreTrips: Array<ITheatreVisit> = DATA.ALL;
  allTheatreTrips.forEach((theatreVisit: ITheatreVisit): void => {
    if (theatreVisit.company.includes(friend))
      theatreTripsWithFriend.push(theatreVisit);
  });
  return theatreTripsWithFriend;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const friendTheatreTrips = getTheatreTripsWithFriend(friend);
  return friendTheatreTrips.map(
    (theatreVisit: ITheatreVisit, index: number): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return {
        index: friendTheatreTrips.length > 1 ? index + 1 : undefined,
        mainText: getTheatreVisitTitle(theatreVisit),
        dateText: getDateText(date),
        isInFuture: isInFuture(date)
      };
    }
  );
};

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FRIENDS
)
  .filter(({ theatre }: IFriend): boolean => !!theatre)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { theatreVisits: DATA.ALL } }),
      details: getFriendDetails(friend)
    })
  );
