import { THEATRE as DATA } from "data-raw";
import { isInFuture } from "utils";

export const UP_NEXT: TheatreVisit[] = DATA.filter(
  ({ date }: TheatreVisit): boolean => isInFuture(date)
);
