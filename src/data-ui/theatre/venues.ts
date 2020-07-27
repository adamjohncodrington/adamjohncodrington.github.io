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

const getTheatreVenueDetails = (play: ITheatre): Array<IMiniCardPanelItem> => {
  const theatreMatches: Array<ITheatreVisit> = getTheatreMatches(play);
  return theatreMatches.map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelItem => {
      const { date } = theatreVisit;
      return {
        mainText: [moveTheSuffixToPrefix(theatreVisit.play.name)],
        dates: [date]
      };
    }
  );
};

export const VENUES: Array<IMiniCard> = Object.values(venues).map(
  (theatre: ITheatre): IMiniCard => ({
    text: theatre.name,
    ...getItemCounts({ item: { theatre }, data: { theatreVisits: DATA } }),
    details: getTheatreVenueDetails(theatre)
  })
);
