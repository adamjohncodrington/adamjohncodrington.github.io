import { THEATRE_VENUES as venues } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getTheatreMatches = (theatre: ITheatre): ITheatreVisit[] =>
  DATA.reduce(
    (matches: ITheatreVisit[], theatreVisit: ITheatreVisit): ITheatreVisit[] =>
      theatreVisit.theatre === theatre ? [...matches, theatreVisit] : matches,
    []
  );

const getTheatreVenueDetails = (play: ITheatre): IMiniCardPanelDetail[] =>
  getTheatreMatches(play).map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [theatreVisit.play.name],
        sort: [date],
        dates: [date]
      };
    }
  );

export const VENUES: IMiniCard[] = Object.values(venues).map(
  (theatre: ITheatre): IMiniCard => {
    const { name } = theatre;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({ item: { theatre }, data: { theatreVisits: DATA } });
    return {
      primaryText: name,
      sort: [name],
      primaryCount,
      secondaryCount,
      details: getTheatreVenueDetails(theatre)
    };
  }
);
