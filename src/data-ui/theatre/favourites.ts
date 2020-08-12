import { THEATRE as DATA } from "data-raw";

export const FAVOURITES: ITheatreVisit[] = DATA.filter(
  ({ favourite }: ITheatreVisit): boolean => !!favourite
);
