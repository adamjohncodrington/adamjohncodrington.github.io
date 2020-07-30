import {
  getTheatreVisitTitle,
  // getTheatreVisitSubtitle,
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
      // subtitle: getTheatreVisitSubtitle(theatreVisit),
      body: theatre.name,
      secondaryBody: getDateText(date)
    };
  };
  return theatreVisits.map(
    (theatreVisit: ITheatreVisit): ICard => mapTheatreVisitToCard(theatreVisit)
  );
};
