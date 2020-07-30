import { PLAYS as plays } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts } from "utils";

import { FAVOURITES } from "./favourites";

interface IPlayIsFavourited {
  play: IPlay;
  favouritedTheatreCards: Array<ITheatreVisit>;
}

const playIsFavourited = ({
  play,
  favouritedTheatreCards
}: IPlayIsFavourited): boolean => {
  let itemIsFavourited: boolean = false;
  favouritedTheatreCards.forEach((theatreVisit: ITheatreVisit) => {
    if (play === theatreVisit.play) itemIsFavourited = true;
  });
  return itemIsFavourited;
};

const getPlayMatches = (play: IPlay): Array<ITheatreVisit> => {
  const playMatches: Array<ITheatreVisit> = [];
  DATA.forEach((theatreVisit: ITheatreVisit): void => {
    if (theatreVisit.play === play) playMatches.push(theatreVisit);
  });
  return playMatches;
};

const getPlayDetails = (play: IPlay): Array<IMiniCardPanelDetail> => {
  const playMatches: Array<ITheatreVisit> = getPlayMatches(play);
  return playMatches.map(
    (theatreVisit: ITheatreVisit): IMiniCardPanelDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [theatreVisit.theatre.name],
        sort: [date],
        dates: [date]
      };
    }
  );
};

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
      favourite: playIsFavourited({ play, favouritedTheatreCards: FAVOURITES }),
      panelDetails: getPlayDetails(play)
    };
  }
);
