import {
  getTheatreVisitTitle,
  getTheatreVisitSubtitle,
  getDateText,
  getSymbols
} from "utils";

export const mapTheatreVisitsToCards = (
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
