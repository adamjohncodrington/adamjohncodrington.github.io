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

const getActorDetails = (actor: IActor): Array<IMiniCardPanelItem> => {
  const actorMatches: Array<ITheatreVisit> = getActorMatches(actor);
  return actorMatches.map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelItem => {
      const { date } = theatreVisit;
      return { mainText: [getTheatreVisitTitle(theatreVisit)], dates: [date] };
    }
  );
};

export const ACTORS: Array<IMiniCard> = Object.values(actors).map(
  (actor: IActor): IMiniCard => {
    const { name, favourite } = actor;
    return {
      text: name,
      favourite,
      ...getItemCounts({ item: { actor }, data: { theatreVisits: DATA } }),
      details: getActorDetails(actor)
    };
  }
);
