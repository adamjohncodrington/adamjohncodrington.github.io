import { FRIENDS } from "@constants";
import {
  getItemCounts,
  getTheatreCardTitle,
  getDateText,
  isInFuture
} from "utils";

import { DATA } from "../data";

const getTheatreTripsWithFriend = (friend: IFriend): Array<ITheatreCard> => {
  const theatreTripsWithFriend: Array<ITheatreCard> = [];
  const allTheatreTrips: Array<ITheatreCard> = DATA.ALL;
  allTheatreTrips.forEach((theatreTrip: ITheatreCard): void => {
    if (theatreTrip.company.includes(friend))
      theatreTripsWithFriend.push(theatreTrip);
  });
  return theatreTripsWithFriend;
};

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FRIENDS
)
  .filter(({ theatre }: IFriend): boolean => !!theatre)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { theatreCards: DATA.ALL } }),
      details: getTheatreTripsWithFriend(friend).map(
        (theatreCard: ITheatreCard, index: number): ICountedListItemDetail => {
          const { date } = theatreCard;
          return {
            index,
            mainText: getTheatreCardTitle(theatreCard),
            dateText: getDateText(date),
            isInFuture: isInFuture(date)
          };
        }
      )
    })
  );
