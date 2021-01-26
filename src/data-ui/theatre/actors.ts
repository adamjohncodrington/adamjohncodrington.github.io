import { ACTORS as actors } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts, getTheatreVisitTitle } from "utils";

const getActorMatches = (actor: Actor): TheatreVisit[] =>
  DATA.reduce(
    (matches: TheatreVisit[], theatreVisit: TheatreVisit): TheatreVisit[] => {
      const { cast } = theatreVisit;
      return cast && cast.includes(actor)
        ? [...matches, theatreVisit]
        : matches;
    },
    []
  );

const getActorDetails = (actor: Actor): MiniCardPanelDetailProps[] =>
  getActorMatches(actor).map(
    (theatreVisit: TheatreVisit): MiniCardPanelDetailProps => {
      const { date } = theatreVisit;
      return {
        mainText: [getTheatreVisitTitle(theatreVisit)],
        sort: [date.valueOf()],
        dates: [date]
      };
    }
  );

export const ACTORS: MiniCardProps[] = Object.values(actors).map(
  (actor: Actor): MiniCardProps => {
    const { name, favourite } = actor;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({ item: { actor }, data: { theatreVisits: DATA } });
    return {
      primaryText: name,
      sort: [name],
      favourite,
      primaryCount,
      secondaryCount,
      details: getActorDetails(actor)
    };
  }
);
