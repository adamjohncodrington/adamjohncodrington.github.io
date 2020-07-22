import { FRIENDS } from "@constants";
import {
  getItemCounts,
  getTheatreVisitTitle,
  getDateText,
  isInFuture
} from "utils";

import * as DATA from "../data";

const getTheatreVisitsMatchingFriend = (
  friend: IFriend
): Array<ITheatreVisit> => {
  const theatreVisitsMatchingFriend: Array<ITheatreVisit> = [];
  const theatreVisits: Array<ITheatreVisit> = DATA.ARRAY;
  theatreVisits.forEach((theatreVisit: ITheatreVisit): void => {
    if (theatreVisit.company.includes(friend))
      theatreVisitsMatchingFriend.push(theatreVisit);
  });
  return theatreVisitsMatchingFriend;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const theatreVisitsMatchingFriend: Array<ITheatreVisit> = getTheatreVisitsMatchingFriend(
    friend
  );
  return theatreVisitsMatchingFriend.map(
    (theatreVisit: ITheatreVisit, index: number): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return {
        index: theatreVisitsMatchingFriend.length > 1 ? index + 1 : undefined,
        mainText: [getTheatreVisitTitle(theatreVisit)],
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
      ...getItemCounts({
        item: { friend },
        data: { theatreVisits: DATA.ARRAY }
      }),
      details: getFriendDetails(friend)
    })
  );
