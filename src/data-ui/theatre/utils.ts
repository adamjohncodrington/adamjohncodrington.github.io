import {
  getTheatreVisitTitle,
  getTheatreVisitSubtitle,
  getDateText,
  getSymbols
} from "utils";

const mapTheatreVisitToCard = (theatreVisit: TheatreVisit): CardProps => {
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

export const mapTheatreVisitsToCards = (
  theatreVisits: TheatreVisit[]
): CardProps[] => theatreVisits.map(mapTheatreVisitToCard);
