import { ACTORS as actors } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts, getTheatreVisitTitle } from "utils";

const getActorMatches = (actor: IActor): Array<ITheatreVisit> => {
  const actorMatches: Array<ITheatreVisit> = [];
  DATA.forEach((theatreVisit: ITheatreVisit): void => {
    const { cast } = theatreVisit;
    if (cast && cast.includes(actor)) actorMatches.push(theatreVisit);
  });
  return actorMatches;
};

const getActorDetails = (actor: IActor): Array<IMiniCardPanelDetail> => {
  const actorMatches: Array<ITheatreVisit> = getActorMatches(actor);
  return actorMatches.map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [getTheatreVisitTitle(theatreVisit)],
        sort: [date],
        dates: [date]
      };
    }
  );
};

export const ACTORS: Array<IMiniCard> = Object.values(actors).map(
  (actor: IActor): IMiniCard => {
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
      panelDetails: getActorDetails(actor)
    };
  }
);
