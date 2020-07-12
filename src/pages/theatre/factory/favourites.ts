import { DATA } from "../data";

export const FAVOURITES: Array<ITheatreVisit> = DATA.ALL.filter(
  item => item.favourite
);
