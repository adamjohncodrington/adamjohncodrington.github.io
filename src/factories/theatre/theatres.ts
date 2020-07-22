import { THEATRE_VENUES } from "@constants";
import { THEATRE_VISITS } from "data";
import {
  getItemCounts,
  isInFuture,
  getDateText,
  moveTheSuffixToPrefix
} from "utils";

const getTheatreVisitsMatchingVenue = (
  theatre: ITheatre
): Array<ITheatreVisit> => {
  const theatreVisitsMatchingVenue: Array<ITheatreVisit> = [];
  const theatreVisits: Array<ITheatreVisit> = THEATRE_VISITS;
  theatreVisits.forEach((theatreVisit: ITheatreVisit): void => {
    if (theatreVisit.theatre === theatre)
      theatreVisitsMatchingVenue.push(theatreVisit);
  });
  return theatreVisitsMatchingVenue;
};

const getTheatreVenueDetails = (
  play: ITheatre
): Array<ICountedListItemDetail> => {
  const theatreVisitsMatchingVenue: Array<ITheatreVisit> = getTheatreVisitsMatchingVenue(
    play
  );
  return theatreVisitsMatchingVenue.map(
    (theatreVisit: ITheatreVisit, index: number): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return {
        index: theatreVisitsMatchingVenue.length > 1 ? index + 1 : undefined,
        mainText: [moveTheSuffixToPrefix(theatreVisit.play.name)],
        dateText: getDateText(date),
        isInFuture: isInFuture(date)
      };
    }
  );
};

export const THEATRE_VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  THEATRE_VENUES
).map(
  (theatre: ITheatre): ICountedListItem => ({
    text: theatre.name,
    ...getItemCounts({
      item: { theatre },
      data: { theatreVisits: THEATRE_VISITS }
    }),
    details: getTheatreVenueDetails(theatre)
  })
);
