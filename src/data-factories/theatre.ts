import {
  getTheatreVisitTitle,
  // getTheatreVisitSubtitle,
  moveTheSuffixToPrefix,
  getDateText
} from "utils";

export const mapTheatreVisitsToCards = (
  theatreVisits: Array<ITheatreVisit>
): Array<ICard> => {
  const mapTheatreVisitToCard = (theatreVisit: ITheatreVisit): ICard => {
    const { theatre, date } = theatreVisit;
    return {
      ...theatreVisit,
      dates: [date],
      title: getTheatreVisitTitle(theatreVisit),
      // subtitle: getTheatreVisitSubtitle(theatreVisit),
      body: moveTheSuffixToPrefix(theatre.name),
      secondaryBody: getDateText(date)
    };
  };
  return theatreVisits.map(
    (theatreVisit: ITheatreVisit): ICard => mapTheatreVisitToCard(theatreVisit)
  );
};
