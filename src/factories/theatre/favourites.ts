import { THEATRE_VISITS } from "data";

export const FAVOURITES: Array<ITheatreVisit> = THEATRE_VISITS.filter(
  ({ favourite }: ITheatreVisit): boolean => !!favourite
);
