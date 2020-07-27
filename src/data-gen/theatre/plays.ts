import { PLAYS as plays } from "@constants";
import { THEATRE as DATA } from "data-raw";
import { getItemCounts, moveTheSuffixToPrefix } from "utils";

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

const getPlayDetails = (play: IPlay): Array<IMiniCardDetail> => {
  const playMatches: Array<ITheatreVisit> = getPlayMatches(play);
  return playMatches.map(
    (theatreVisit: ITheatreVisit): IMiniCardDetail => {
      const { date } = theatreVisit;
      return {
        mainText: [moveTheSuffixToPrefix(theatreVisit.theatre.name)],
        dates: [date]
      };
    }
  );
};

export const PLAYS: Array<IMiniCard> = Object.values(plays).map(
  (play: IPlay): IMiniCard => ({
    text: play.name,
    favourite: playIsFavourited({ play, favouritedTheatreCards: FAVOURITES }),
    ...getItemCounts({ item: { play }, data: { theatreVisits: DATA } }),
    details: getPlayDetails(play)
  })
);
