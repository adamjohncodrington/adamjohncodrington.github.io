import * as DATA from "../data";

export const FAVOURITES: Array<ITheatreVisit> = DATA.ARRAY.filter(
  ({ favourite }: ITheatreVisit): boolean => !!favourite
);
