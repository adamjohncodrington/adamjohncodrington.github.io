import { PLAYS as plays } from "@constants";
import { THEATRE as DATA } from "data";
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

const getPlayDetails = (play: IPlay): Array<ICountedListItemDetail> => {
  const playMatches: Array<ITheatreVisit> = getPlayMatches(play);
  return playMatches.map(
    (theatreVisit: ITheatreVisit, index: number): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return {
        index: playMatches.length > 1 ? index + 1 : undefined,
        mainText: [moveTheSuffixToPrefix(theatreVisit.theatre.name)],
        dates: [date]
      };
    }
  );
};

export const PLAYS: Array<ICountedListItem> = Object.values(plays).map(
  (play: IPlay): ICountedListItem => ({
    text: play.name,
    favourite: playIsFavourited({ play, favouritedTheatreCards: FAVOURITES }),
    ...getItemCounts({ item: { play }, data: { theatreVisits: DATA } }),
    details: getPlayDetails(play)
  })
);
