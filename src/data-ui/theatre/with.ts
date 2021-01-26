import { FRIENDS as friends } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts, getTheatreVisitTitle } from "utils";

const getFriendMatches = (friend: Friend): TheatreVisit[] =>
  DATA.reduce(
    (matches: TheatreVisit[], theatreVisit: TheatreVisit): TheatreVisit[] =>
      theatreVisit.company.includes(friend)
        ? [...matches, theatreVisit]
        : matches,
    []
  );

const getFriendDetails = (friend: Friend): MiniCardPanelDetailProps[] =>
  getFriendMatches(friend).map(
    (theatreVisit: TheatreVisit): MiniCardPanelDetailProps => {
      const { date } = theatreVisit;
      return {
        mainText: [getTheatreVisitTitle(theatreVisit)],
        sort: [date.valueOf()],
        dates: [date]
      };
    }
  );

export const WITH: MiniCardProps[] = Object.values(friends)
  .filter(({ theatre }: Friend): boolean => !!theatre)
  .map(
    (friend: Friend): MiniCardProps => {
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
