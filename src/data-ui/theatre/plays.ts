import { PLAYS as plays } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts } from "utils";

import { FAVOURITES } from "./favourites";

interface IPlayIsFavourited {
  play: Play;
  favouriteTheatreVisits: TheatreVisit[];
}

const playIsFavourited = ({
  play,
  favouriteTheatreVisits
}: IPlayIsFavourited): boolean =>
  favouriteTheatreVisits.some(
    (theatreVisit: TheatreVisit): boolean => theatreVisit.play === play
  );

const getPlayMatches = (play: Play): TheatreVisit[] =>
  DATA.reduce(
    (matches: TheatreVisit[], theatreVisit: TheatreVisit): TheatreVisit[] =>
      theatreVisit.play === play ? [...matches, theatreVisit] : matches,
    []
  );

const getPlayDetails = (play: Play): MiniCardPanelDetailProps[] =>
  getPlayMatches(play).map(
    (theatreVisit: TheatreVisit): MiniCardPanelDetailProps => {
      const { date } = theatreVisit;
      return {
        mainText: [theatreVisit.theatre.name],
        sort: [date.valueOf()],
        dates: [date]
      };
    }
  );

export const PLAYS: MiniCardProps[] = Object.values(plays).map(
  (play: Play): MiniCardProps => {
    const { name } = play;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({ item: { play }, data: { theatreVisits: DATA } });
    return {
      primaryText: name,
      sort: [name],
      primaryCount,
      secondaryCount,
      favourite: playIsFavourited({ play, favouriteTheatreVisits: FAVOURITES }),
      details: getPlayDetails(play)
    };
  }
);
