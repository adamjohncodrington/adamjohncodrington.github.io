import { PLAYS as plays } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts } from "utils";

import { FAVOURITES } from "./favourites";

interface IPlayIsFavourited {
  play: IPlay;
  favouriteTheatreVisits: Array<ITheatreVisit>;
}

const playIsFavourited = ({
  play,
  favouriteTheatreVisits
}: IPlayIsFavourited): boolean =>
  favouriteTheatreVisits.some(
    (theatreVisit: ITheatreVisit): boolean => theatreVisit.play === play
  );

const getPlayMatches = (play: IPlay): Array<ITheatreVisit> => {
  const playMatches: Array<ITheatreVisit> = [];
  DATA.forEach((theatreVisit: ITheatreVisit): void => {
    if (theatreVisit.play === play) playMatches.push(theatreVisit);
  });
  return playMatches;
};

const getPlayDetails = (play: IPlay): Array<IMiniCardPanelDetail> =>
  getPlayMatches(play).map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [theatreVisit.theatre.name],
        sort: [date],
        dates: [date]
      };
    }
  );

export const PLAYS: Array<IMiniCard> = Object.values(plays).map(
  (play: IPlay): IMiniCard => {
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
      panelDetails: getPlayDetails(play)
    };
  }
);
