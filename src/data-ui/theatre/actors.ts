import { ACTORS as actors } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts, getTheatreVisitTitle } from "utils";

const getActorMatches = (actor: IActor): Array<ITheatreVisit> =>
  DATA.reduce(
    (
      matches: Array<ITheatreVisit>,
      theatreVisit: ITheatreVisit
    ): Array<ITheatreVisit> => {
      const { cast } = theatreVisit;
      return cast && cast.includes(actor)
        ? [...matches, theatreVisit]
        : matches;
    },
    []
  );

const getActorDetails = (actor: IActor): Array<IMiniCardPanelDetail> =>
  getActorMatches(actor).map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [getTheatreVisitTitle(theatreVisit)],
        sort: [date],
        dates: [date]
      };
    }
  );

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
      details: getActorDetails(actor)
    };
  }
);
