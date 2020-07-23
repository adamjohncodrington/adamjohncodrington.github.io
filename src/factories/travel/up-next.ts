import { TRAVEL as DATA } from "data";
import { isInFuture } from "utils";

export const UP_NEXT: Array<ITripLeg> = DATA.TRIP_LEGS.filter(
  ({ dates }: ITripLeg): boolean => isInFuture(dates[0])
);
