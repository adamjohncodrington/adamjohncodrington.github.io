import { PLAYS } from "@constants";
import { THEATRE as DATA } from "data";
import {
  getItemCounts,
  getDateText,
  isInFuture,
  moveTheSuffixToPrefix
} from "utils";

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

const getTheatreVisitsMatchingPlay = (play: IPlay): Array<ITheatreVisit> => {
  const theatreVisitsMatchingPlay: Array<ITheatreVisit> = [];
  DATA.forEach((theatreVisit: ITheatreVisit): void => {
    if (theatreVisit.play === play)
      theatreVisitsMatchingPlay.push(theatreVisit);
  });
  return theatreVisitsMatchingPlay;
};

const getPlayDetails = (play: IPlay): Array<ICountedListItemDetail> => {
  const theatreVisitsMatchingPlay: Array<ITheatreVisit> = getTheatreVisitsMatchingPlay(
    play
  );
  return theatreVisitsMatchingPlay.map(
    (theatreVisit: ITheatreVisit, index: number): ICountedListItemDetail => {
      const { date } = theatreVisit;
      return {
        index: theatreVisitsMatchingPlay.length > 1 ? index + 1 : undefined,
        mainText: [moveTheSuffixToPrefix(theatreVisit.theatre.name)],
        dateText: getDateText(date),
        isInFuture: isInFuture(date)
      };
    }
  );
};

export const PLAYS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  PLAYS
).map(
  (play: IPlay): ICountedListItem => ({
    text: play.name,
    favourite: playIsFavourited({ play, favouritedTheatreCards: FAVOURITES }),
    ...getItemCounts({ item: { play }, data: { theatreVisits: DATA } }),
    details: getPlayDetails(play)
  })
);
