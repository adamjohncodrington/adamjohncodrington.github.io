import { THEATRE_VENUES as venues } from "@constants";
import { THEATRE as DATA } from "data";
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
): Array<ICountedListItemDetail> => {
  const theatreMatches: Array<ITheatreVisit> = getTheatreMatches(play);
  return theatreMatches.map(
    (theatreVisit: ITheatreVisit, index: number): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return {
        index: theatreMatches.length > 1 ? index + 1 : undefined,
        mainText: [moveTheSuffixToPrefix(theatreVisit.play.name)],
        dates: [date]
      };
    }
  );
};

export const VENUES: Array<ICountedListItem> = Object.values(venues).map(
  (theatre: ITheatre): ICountedListItem => ({
    text: theatre.name,
    ...getItemCounts({ item: { theatre }, data: { theatreVisits: DATA } }),
    details: getTheatreVenueDetails(theatre)
  })
);
