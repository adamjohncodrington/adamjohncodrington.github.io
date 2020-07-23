import { FRIENDS as friends } from "@constants";
import { THEATRE as DATA } from "data";
import { getItemCounts, getTheatreVisitTitle } from "utils";

const getFriendMatches = (friend: IFriend): Array<ITheatreVisit> => {
  const friendMatches: Array<ITheatreVisit> = [];
  DATA.forEach((theatreVisit: ITheatreVisit): void => {
    if (theatreVisit.company.includes(friend)) friendMatches.push(theatreVisit);
  });
  return friendMatches;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const friendMatches: Array<ITheatreVisit> = getFriendMatches(friend);
  return friendMatches.map(
    (theatreVisit: ITheatreVisit): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return { mainText: [getTheatreVisitTitle(theatreVisit)], dates: [date] };
    }
  );
};

export const FRIENDS: Array<ICountedListItem> = Object.values(friends)
  .filter(({ theatre }: IFriend): boolean => !!theatre)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { theatreVisits: DATA } }),
      details: getFriendDetails(friend)
    })
  );
