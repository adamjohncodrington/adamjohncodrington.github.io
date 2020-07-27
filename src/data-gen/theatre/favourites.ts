import { THEATRE as DATA } from "data";

export const FAVOURITES: Array<ITheatreVisit> = DATA.filter(
  ({ favourite }: ITheatreVisit): boolean => !!favourite
);
