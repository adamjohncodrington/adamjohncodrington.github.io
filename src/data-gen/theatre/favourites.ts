import { THEATRE as DATA } from "data-raw";

export const FAVOURITES: Array<ITheatreVisit> = DATA.filter(
  ({ favourite }: ITheatreVisit): boolean => !!favourite
);
