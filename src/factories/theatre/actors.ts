import { ACTORS } from "@constants";
import { THEATRE as DATA } from "data";
import {
  getItemCounts,
  getTheatreVisitTitle,
  isInFuture,
  getDateText
} from "utils";

const getTheatreVisitsMatchingActor = (actor: IActor): Array<ITheatreVisit> => {
  const theatreVisitsMatchingActor: Array<ITheatreVisit> = [];
  DATA.forEach((theatreVisit: ITheatreVisit): void => {
    const { cast } = theatreVisit;
    if (cast && cast.includes(actor))
      theatreVisitsMatchingActor.push(theatreVisit);
  });
  return theatreVisitsMatchingActor;
};

const getActorDetails = (actor: IActor): Array<ICountedListItemDetail> => {
  const theatreVisitsMatchingActor: Array<ITheatreVisit> = getTheatreVisitsMatchingActor(
    actor
  );
  return theatreVisitsMatchingActor.map(
    (theatreVisit: ITheatreVisit, index: number): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return {
        index: theatreVisitsMatchingActor.length > 1 ? index + 1 : undefined,
        mainText: [getTheatreVisitTitle(theatreVisit)],
        dates: [date],
        isInFuture: isInFuture(date)
      };
    }
  );
};

export const ACTORS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  ACTORS
).map(
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
