import { DATA } from "../data";

export const FAVOURITES: Array<ITheatreVisit> = DATA.ALL.filter(
  ({ favourite }: ITheatreVisit): boolean => !!favourite
);
