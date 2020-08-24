import {
  getTheatreVisitTitle,
  getTheatreVisitSubtitle,
  getDateText,
  getSymbols
} from "utils";

export const mapTheatreVisitsToCards = (
  theatreVisits: ITheatreVisit[]
): ICard[] => {
  const mapTheatreVisitToCard = (theatreVisit: ITheatreVisit): ICard => {
    const { theatre, company, date } = theatreVisit;
    return {
      ...theatreVisit,
      year: date.getFullYear(),
      sort: [date.valueOf()],
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
