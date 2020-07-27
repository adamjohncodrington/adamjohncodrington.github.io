import { TRIP_LEGS as DATA } from "data";
import { isInFuture } from "utils";

export const UP_NEXT: Array<ITripLeg> = DATA.filter(
  ({ dates }: ITripLeg): boolean => isInFuture(dates[0])
);
