import { TRIP_LEGS as DATA } from "data-raw";
import { isInFuture } from "utils";

export const UP_NEXT: ITripLeg[] = DATA.filter(({ dates }: ITripLeg): boolean =>
  isInFuture(dates[0])
);
