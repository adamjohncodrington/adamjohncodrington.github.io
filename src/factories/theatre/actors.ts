import { ACTORS as actors } from "@constants";
import { THEATRE as DATA } from "data";
import { getItemCounts, getTheatreVisitTitle } from "utils";

const getActorMatches = (actor: IActor): Array<ITheatreVisit> => {
  const actorMatches: Array<ITheatreVisit> = [];
  DATA.forEach((theatreVisit: ITheatreVisit): void => {
    const { cast } = theatreVisit;
    if (cast && cast.includes(actor)) actorMatches.push(theatreVisit);
  });
  return actorMatches;
};

const getActorDetails = (actor: IActor): Array<ICountedListItemDetail> => {
  const actorMatches: Array<ITheatreVisit> = getActorMatches(actor);
  return actorMatches.map(
    (theatreVisit: ITheatreVisit, index: number): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return {
        index: actorMatches.length > 1 ? index + 1 : undefined,
        mainText: [getTheatreVisitTitle(theatreVisit)],
        dates: [date]
      };
    }
  );
};

export const ACTORS: Array<ICountedListItem> = Object.values(actors).map(
  (actor: IActor): ICountedListItem => {
    const { name, favourite } = actor;
    return {
      text: name,
      favourite,
      ...getItemCounts({ item: { actor }, data: { theatreVisits: DATA } }),
      details: getActorDetails(actor)
    };
  }
);
