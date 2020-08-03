import {
  getTheatreVisitTitle,
  getTheatreVisitSubtitle,
  getDateText,
  getSymbols,
  filterMiniCards
} from "utils";

import { ACTORS } from "./actors";
import { FRIENDS } from "./friends";
import { PLAYS } from "./plays";
import { VENUES } from "./venues";
import { UP_NEXT } from "./up-next";
import { YEARS } from "./years";

const mapTheatreVisitsToCards = (
  theatreVisits: Array<ITheatreVisit>
): Array<ICard> => {
  const mapTheatreVisitToCard = (theatreVisit: ITheatreVisit): ICard => {
    const { theatre, company, date } = theatreVisit;
    return {
      ...theatreVisit,
      dates: [date],
      sort: [date],
      symbols: getSymbols({ company }),
      title: getTheatreVisitTitle(theatreVisit),
      secondaryBody: getTheatreVisitSubtitle(theatreVisit),
      subtitle: theatre.name,
      body: getDateText(date)
    };
  };
  return theatreVisits.map(
    (theatreVisit: ITheatreVisit): ICard => mapTheatreVisitToCard(theatreVisit)
  );
};

export const THEATRE = {
  ACTORS: filterMiniCards(ACTORS),
  FRIENDS: filterMiniCards(FRIENDS),
  PLAYS: filterMiniCards(PLAYS),
  VENUES: filterMiniCards(VENUES),
  UP_NEXT: mapTheatreVisitsToCards(UP_NEXT),
  YEARS: YEARS.map(
    (year: Array<ITheatreVisit>): Array<ICard> => mapTheatreVisitsToCards(year)
  )
};
