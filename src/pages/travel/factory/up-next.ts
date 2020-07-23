import { isInFuture } from "utils";

import { TRAVEL as DATA } from "data";

export const UP_NEXT: Array<ITripLeg> = DATA.TRIP_LEGS.filter(
  ({ dates }: ITripLeg): boolean => isInFuture(dates[0])
);
