import { THEATRE as DATA } from "data-raw";

export const FAVOURITES: TheatreVisit[] = DATA.filter(
  ({ favourite }: TheatreVisit): boolean => !!favourite
);
