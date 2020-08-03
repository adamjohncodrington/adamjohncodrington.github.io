import { FRIENDS as friends } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts, getTheatreVisitTitle } from "utils";

const getFriendMatches = (friend: IFriend): Array<ITheatreVisit> =>
  DATA.reduce(
    (matches: Array<ITheatreVisit>, theatreVisit: ITheatreVisit) =>
      theatreVisit.company.includes(friend)
        ? [...matches, theatreVisit]
        : matches,
    []
  );

const getFriendDetails = (friend: IFriend): Array<IMiniCardPanelDetail> =>
  getFriendMatches(friend).map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [getTheatreVisitTitle(theatreVisit)],
        sort: [date],
        dates: [date]
      };
    }
  );

export const FRIENDS: Array<IMiniCard> = Object.values(friends)
  .filter(({ theatre }: IFriend): boolean => !!theatre)
  .map(
    (friend: IFriend): IMiniCard => {
      const {
        pastCount: primaryCount,
        futureCount: secondaryCount
      } = getItemCounts({
        item: { friend },
        data: { theatreVisits: DATA }
      });
      return {
        primaryText: friend.name,
        sort: [-primaryCount, -secondaryCount],
        greaterCountPadding: true,
        primaryCount,
        secondaryCount,
        details: getFriendDetails(friend)
      };
    }
  );
