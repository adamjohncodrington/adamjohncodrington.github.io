import { THEATRE_VENUES as venues } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts, moveTheSuffixToPrefix } from "utils";

const getTheatreMatches = (theatre: ITheatre): Array<ITheatreVisit> => {
  const theatreMatches: Array<ITheatreVisit> = [];
  DATA.forEach((theatreVisit: ITheatreVisit): void => {
    if (theatreVisit.theatre === theatre) theatreMatches.push(theatreVisit);
  });
  return theatreMatches;
};

const getTheatreVenueDetails = (
  play: ITheatre
): Array<IMiniCardPanelDetail> => {
  const theatreMatches: Array<ITheatreVisit> = getTheatreMatches(play);
  return theatreMatches.map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [moveTheSuffixToPrefix(theatreVisit.play.name)],
        sort: [date.valueOf()],
        dates: [date]
      };
    }
  );
};

export const VENUES: Array<IMiniCard> = Object.values(venues).map(
  (theatre: ITheatre): IMiniCard => {
    const { name } = theatre;
    return {
      text: name,
      sort: [name],
      ...getItemCounts({ item: { theatre }, data: { theatreVisits: DATA } }),
      details: getTheatreVenueDetails(theatre)
    };
  }
);
