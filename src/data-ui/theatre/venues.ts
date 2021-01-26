import { THEATRE_VENUES as venues } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getTheatreMatches = (theatre: Theatre): TheatreVisit[] =>
  DATA.reduce(
    (matches: TheatreVisit[], theatreVisit: TheatreVisit): TheatreVisit[] =>
      theatreVisit.theatre === theatre ? [...matches, theatreVisit] : matches,
    []
  );

const getTheatreVenueDetails = (play: Theatre): IMiniCardPanelDetail[] =>
  getTheatreMatches(play).map(
    (theatreVisit: TheatreVisit): IMiniCardPanelDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [theatreVisit.play.name],
        sort: [date.valueOf()],
        dates: [date]
      };
    }
  );

export const VENUES: MiniCardProps[] = Object.values(venues).map(
  (theatre: Theatre): MiniCardProps => {
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
