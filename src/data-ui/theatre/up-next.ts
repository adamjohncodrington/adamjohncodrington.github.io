import { THEATRE as DATA } from "data-raw";
import { isInFuture } from "utils";

export const UP_NEXT: Array<ITheatreVisit> = DATA.filter(
  ({ date }: ITheatreVisit): boolean => isInFuture(date)
);
