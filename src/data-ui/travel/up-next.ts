import { TRIP_LEGS as DATA } from "data-raw";
import { isInFuture } from "utils";

export const UP_NEXT: TripLeg[] = DATA.filter(({ dates }: TripLeg): boolean =>
  isInFuture(dates[0])
);
