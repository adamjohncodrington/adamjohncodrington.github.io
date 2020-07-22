import { THEATRE_VISITS } from "data";
import { isInFuture } from "utils";

export const UP_NEXT: Array<ITheatreVisit> = THEATRE_VISITS.filter(
  ({ date }: ITheatreVisit): boolean => isInFuture(date)
);
