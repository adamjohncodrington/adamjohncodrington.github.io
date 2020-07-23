import { GIGS_AND_FESTIVALS as DATA } from "data";
import { isInFuture } from "utils";

export const UP_NEXT: Array<IGigOrFestival> = DATA.filter(
  ({ dates }: IGigOrFestival): boolean => isInFuture(dates[0])
);
