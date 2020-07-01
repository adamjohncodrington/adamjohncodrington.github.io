import { PLAYS } from "@constants";
import { getItemCounts } from "@utils";

import { DATA } from "../data";

import { FAVOURITES } from "./favourites";

interface IPlayIsFavourited {
  play: IPlay;
  favouritedTheatreCards: Array<ITheatreCard>;
}

const playIsFavourited = ({
  play,
  favouritedTheatreCards
}: IPlayIsFavourited): boolean => {
  let itemIsFavourited: boolean = false;

  favouritedTheatreCards.forEach((theatreCard: ITheatreCard) => {
    if (play === theatreCard.play) itemIsFavourited = true;
  });

  return itemIsFavourited;
};

export const PLAYS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  PLAYS
).map(
  (play: IPlay): ICountedListItem => ({
    text: play.name,
    favourite: playIsFavourited({ play, favouritedTheatreCards: FAVOURITES }),
    ...getItemCounts({ item: { play }, data: { theatreCards: DATA.ALL } })
  })
);
