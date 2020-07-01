import { DATA } from "../data";

export const FAVOURITES: Array<ITheatreCard> = DATA.ALL.filter(
  item => item.favourite
);
